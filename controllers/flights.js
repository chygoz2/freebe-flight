require('dotenv').load();
const router = require('express').Router();
const axios = require('axios');
const sha1 = require('sha1');
const Country = require('../models/Country');
const Token = require('../models/Token');
const { FLIGHT_TRIP_TYPE, TICKET_CLASS_TYPE } = require('../config/constants');

const URL = process.env.URL;

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

router.post('/process-flight-search', async (req, res) => {
    await getHeader(); 
    
    const endpointUrl = `${URL}v1/flight/process-flight-search`;
    let input;
    
    if(req.body.tripType == FLIGHT_TRIP_TYPE.ONE_WAY_TRIP){
        input = {
            tripType: req.body.tripType,
            ticketClass: req.body.ticketClass,
            travellerDetail:{
                adults: req.body.adults,
                children: req.body.children,
                infants: req.body.infants
            },
            flightItineraryDetail: [
              {
                originAirportCode: req.body.originAirportCode,
                destinationAirportCode: req.body.destinationAirportCode,
                departureDate: req.body.departureDate
              } 
            ]
        };
    }else if(req.body.tripType == FLIGHT_TRIP_TYPE.ROUND_TRIP){
        input = {
            tripType: req.body.tripType,
            ticketClass: req.body.ticketClass,
            travellerDetail:{
                adults: req.body.adults,
                children: req.body.children,
                infants: req.body.infants
            },
            flightItineraryDetail: [
              {
                originAirportCode: req.body.originAirportCode,
                destinationAirportCode: req.body.destinationAirportCode,
                departureDate: req.body.departureDate
              },
              {
                originAirportCode: req.body.destinationAirportCode,
                destinationAirportCode: req.body.originAirportCode,
                departureDate: req.body.returnDate
              }  
            ]
        };
    }

    axios.post(endpointUrl,input, config)
        .then(response => {
            if(response.data.status === 0){
                res.status(200).json(response.data);
            }else{
                return res.status(500).json({status: results.status, message: results.message});
            }
        })
        .catch(err => {
            res.status(500).json({status: -1, message: "An error occured while fetching flight search results"});
        });
});

module.exports = router;
