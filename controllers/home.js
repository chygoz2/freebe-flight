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
            if(err) {
                reject({status: -1, message: "An error occured while fetching token"});
                return;
            }
            if(!token){
                reject({status: -1, message: "An error occured while fetching token"});
                return;
            }
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

router.get('/populate-countries', async (req, res) => {    
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

router.get('/countries',async (req, res) => {
    await getHeader();
    Country.find({}, (err, countries) => {
        if(err){
            res.status(500).json({status: -1, message: "An error occured while fetching countries list"});
            return;
        }
        
        res.status(200).json({
            status: 0, 
            message: "Request processed successfully",
            countries: countries
        });
    });
});

router.get('/remote-countries/:countrycode', async (req, res) => {
    await getHeader();
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

router.get('/countries/:countrycode', async (req, res) => {
    await getHeader();
    let countryCode = req.params.countrycode;
    if(!countryCode){
        res.status(500).json({status: -1, message: "Country code not found"});
        return;
    }
    countryCode = countryCode.toUpperCase();
    Country.findOne({code: countryCode}, (err, country) => {
        if(err){
            res.status(500).json({status: -1, message: "An error occured while fetching country details"});
            return;
        }
        res.status(200).json({
            status: 0, 
            message: "Request processed successfully",
            country: country
        });
    });
});

router.get('/countries/:countrycode/airports', async (req, res) => {
    await getHeader();
    let countryCode = req.params.countrycode;
    if(!countryCode){
        res.status(500).json({status: -1, message: "Country code not found"});
        return;
    }
    countryCode = countryCode.toUpperCase();
    Country.findOne({code: countryCode}, (err, country) => {
        if(err){
            res.status(500).json({status: -1, message: "An error occured while fetching country details"});
            return;
        }
        const airports = country.cities.map(city => {
            return city.airports;
        });
        const airp = airports.map(airport => airport[0]);
        res.status(200).json({
            status: 0, 
            message: "Request processed successfully",
            airports: airp
        });
    });
});

router.get('/search/:query', async (req, res) => {
    await getHeader();
    const query = req.params.query;
    const results = [];
    
    //get countries containing query
    Country.find({}, (err, data) => {
        if(err){
            res.status(500).json({status: -1, message: "An error occured while performing search"});
            return;
        }

        for(let country of data){
            //check if country name contains the search query. If it does, get all airports in the country
            if(country.name.toLowerCase().startsWith(query.toLowerCase())){
                const cities = country.cities;
                for(let city of cities){
                    const airports = city.airports;
                    for(let airport of airports){
                        const newAirport = JSON.parse(JSON.stringify(airport));
                        newAirport.displayName = `${airport.name} (${airport.iataCode}) ${city.name}, ${country.name}`;  
                        results.push(newAirport);
                    }
                }
            }else{
                const cities = country.cities;
                for(let city of cities){
                    //if the city name contains the search query, get all airports in the city
                    if(city.name.toLowerCase().startsWith(query.toLowerCase())){ 
                        const airports = city.airports;
                        for(let airport of airports){
                            const newAirport = JSON.parse(JSON.stringify(airport));
                            newAirport.displayName = `${airport.name} (${airport.iataCode}) ${city.name}, ${country.name}`;  
                            results.push(newAirport);
                        }
                    }else{
                        const airports = city.airports;
                        for(let airport of airports){
                            //if the airport name or iatacode contains the search query, get all airports in the city
                            if(airport.iataCode.toLowerCase().startsWith(query.toLowerCase()) ||
                                airport.name.toLowerCase().startsWith(query.toLowerCase()))
                            {
                                const newAirport = JSON.parse(JSON.stringify(airport));
                                newAirport.displayName = `${airport.name} (${airport.iataCode}) ${city.name}, ${country.name}`;  
                                results.push(newAirport);
                            }
                        }
                    }
                }
            }
        }

        res.json(results);  
    });
});

module.exports = router;
