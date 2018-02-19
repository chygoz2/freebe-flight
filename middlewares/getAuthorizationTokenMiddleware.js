require('dotenv').load();
const axios = require('axios');
const sha1 = require('sha1');
const moment = require('moment');
const Token = require('../models/Token');

const API_KEY = process.env.API_KEY;
const URL = process.env.URL;
const AFFILIATE_ID = process.env.AFFILIATE_ID;
const SECRET_KEY = process.env.SECRET_KEY;

const getToken2 = async function(){
    const input = {
        key : API_KEY,
        affiliateCode : AFFILIATE_ID,
        hash : sha1(`${AFFILIATE_ID}${SECRET_KEY}`)
    };
    
    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const endpointURL = `${URL}v1/auth/verify-affiliate`;
    
    try{
        const response = await axios.post(endpointURL, input, config);
        const responseData = response.data;
        const tokenData = responseData.data;
        return tokenData;
    }catch(e){
        // console.log(e);
        throw new Error("Unable to connect to Travelbeta API");
    }
};

const getToken = function(){
    return new Promise(function(resolve, reject){
        Token.findOne({name: 'token'}, function(err, foundToken){
            if(err){
                reject("Unable to connect to database");
            }
            else if(!foundToken){
                getToken2().then(function(tokenData){
                    const newToken = new Token({
                        name: 'token',
                        token: tokenData.token,
                        expirationTime: tokenData.expirationTime
                    });
                    newToken.save(function(err){
                        if(err){
                            console.log("An error occured while saving token");
                            reject("An error occured while saving token");
                        }
                        resolve(newToken);
                    });
                }).catch(error => {
                    reject(error);
                });
            }else if(moment(foundToken.expirationTime, 'YYYY/MM/DD kk:mm') < moment()){
                //token expired. Get new one and update the existing one in database
                getToken2().then(function(tokenData){
                    foundToken.token = tokenData.token,
                    foundToken.expirationTime = tokenData.expirationTime
                    foundToken.save(function(err){
                        if(err){
                            console.log("An error occured while saving token");
                            reject("An error occured while saving token");
                        }
                        resolve(foundToken);
                    });
                }).catch(error => {
                    reject(error);
                });;
            }else{
                resolve(foundToken);
            }
        });
    });
};

module.exports = getToken;

