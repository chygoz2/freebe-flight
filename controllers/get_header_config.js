const Token = require('../models/Token');

const config = {
    headers: {
        "Content-Type": "application/json"
    }
};

module.exports = async () => {
    try{        
        const getHeader = () => {
            return new Promise(function(resolve, reject){
                Token.findOne({name: 'token'}, function(err, token){
                    if(err || !token) {
                        reject({status: -1, message: "An error occured while fetching token"});
                        return;
                    }
                    config.headers["Authorization"] = token.token;
                    resolve();
                });
            });
        };

        await getHeader();
    }catch(e){

    }finally{
        return config;
    }
}