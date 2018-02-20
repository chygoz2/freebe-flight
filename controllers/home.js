require('dotenv').load();
const router = require('express').Router();
const axios = require('axios');
const sha1 = require('sha1');
const Country = require('../models/Country');

const URL = process.env.URL;
const Token = require('../models/Token');

const config = {
    headers: {
        "Content-Type": "application/json"
    }
};

const getHeader = () => {
    return new Promise(function(resolve, reject){
        Token.findOne({name: 'token'}, function(err, token){
            if(err) reject({status: -1, message: "An error occured while fetching token"});
            if(!token) reject({status: -1, message: "An error occured while fetching token"});
            config.headers["Authorization"] = token.token;
            resolve();
        });
    });
};

const saveCountriesInDatabase = async (countries) => {
    //save countries in database
    for(const country of countries){
        const countryCode = country.code; //get country code
        console.log("Fetching cities and airports for ", countryCode);

        const endpointUrl = `${URL}v1/flight/get-cities`;
        const input = { countryCode };

        try{
            //get cities in that country
            const response = await axios.post(endpointUrl, input, config);
            const cities = response.data.data;

            //for each city, get the airports in it 
            for(const city of cities){
                const cityCode = city.code;
                const endpointUrl = `${URL}v1/flight/get-city-airports`;
                const input = {code: cityCode};
                
                const response = await axios.post(endpointUrl, input, config);
                const airports = response.data.data;
                city['airports'] = airports;
            }

            const query = {code: countryCode};
            const update = {
                code: countryCode,
                name: country.name,
                isoCode: country.isoCode,
                dialingCode: country.dialingCode,
                capital: country.capital,
                currencyCode: country.currencyCode,
                currencyName: country.currencyName,
                cities: cities
            };
            const options = {upsert: true, new: true};

            Country.findOneAndUpdate(query, update, options, function(error, result){
                if(error) throw error;
            });

        }catch(e){
            console.log(e);
        }
    }
};

router.get('/countries', async (req, res) => {    
    await getHeader();
    const endpointUrl = `${URL}v1/get-countries`;
    axios.post(endpointUrl, {}, config)
        .then(response => {
            if(response.data.status === 0){
                // console.log(response.data);
                const countries = response.data.data;

                saveCountriesInDatabase(countries);

                res.status(200).json({
                    status: response.data.status, 
                    message: response.data.message,
                    countries: countries
                });
            }else{
                res.status(200).json({status: response.status, message: response.message});
            }
        })
        .catch(err => {
            res.status(500).json({status: -1, message: "An error occured while fetching countries list"});
        })
});

router.get('/countries/:countrycode', (req, res) => {
    getHeader().then(() => {
        const endpointUrl = `${URL}v1/get-country`;
        const input = {code: req.params.countrycode};

        axios.post(endpointUrl,input, config)
            .then(response => {
                if(response.data.status === 0){
                    const country = response.data.data;
                    res.status(200).json({
                        status: response.data.status, 
                        message: response.data.message,
                        country: country
                    });
                }else{
                    res.status(200).json({status: response.status, message: response.message});
                }
            })
            .catch(err => {
                res.status(500).json({status: -1, message: "An error occured while fetching country details"});
            });
    });
});

module.exports = router;
