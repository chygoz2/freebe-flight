require('dotenv').load();
const router = require('express').Router();
const axios = require('axios');
const moment = require('moment');
const Country = require('../models/Country');
const Token = require('../models/Token');
const Booking = require('../models/Booking');
const getHeaderConfig = require('./get_header_config');
const { FLIGHT_TRIP_TYPE, TICKET_CLASS_TYPE, AGE_GROUPS } = require('../config/constants');

const URL = process.env.URL;

router.post('/search', async (req, res) => {
    
    const config = await getHeaderConfig();
    
    const endpointUrl = `${URL}v1/flight/process-flight-search`;
    const input = {
        tripType: req.body.tripType,
        ticketClass: req.body.ticketClass,
        travellerDetail: req.body.travellerDetail,
        flightItineraryDetail: req.body.flightItineraryDetail
    };

    axios.post(endpointUrl,input, config)
        .then(response => {
            if(response.data.status === 0){
                res.status(200).json(response.data);
            }else{
                return res.status(500).json({status: results.status, message: results.message});
            }
        })
        .catch(err => {
            res.status(500).json({status: -1, message: "Error occured while processing flights search"});
        });
});

router.post('/create-booking', async (req,res) => {

    const config = await getHeaderConfig();

    let endpointUrl;
    if(process.env.ENVIRONMENT === 'test'){
        endpointUrl = `${URL}v1/flight/create-affiliate-booking`;
    }
    else if(process.env.ENVIRONMENT === 'production'){
        endpointUrl = `${URL}v1/flight/create-booking`;
    }
    const input = {
        pricedItinerary: req.body.pricedItinerary,
        contactInformation: req.body.contactInformation,
        travellers: req.body.travellers
    };

    axios.post(endpointUrl,input, config)
        .then(response => {
            if(response.data.status === 0){
                //write code to save booking details to database
                const { referenceNumber, bookingNumber } = response.data.data;
                //insert into database code
                const booking = new Booking({
                    user: {},
                    referenceNumber: referenceNumber,
                    bookingNumber: bookingNumber,
                    bookingDate: moment().format("DD/MM/YY gg:mm"),
                    reservationStatus: "UNPROCESSED",
                    pricedItinerary: input.pricedItinerary,
                    contactInformation: input.contactInformation,
                    travellers: input.travellers  
                });
                booking.save((err) => {
                    if(err){
                        return res.status(500).json({status: -1, message: "Booking submitted. However an error occured while saving booking details to database"});
                    }
                    res.status(200).json(response.data);
                });
            }else{
                return res.status(500).json({status: results.status, message: results.message});
            }
        })
        .catch(err => {
            res.status(500).json({status: -1, message: "An error occured while booking selected flight"});
        });
});

router.post('/cancel-booking', async (req, res) => {
    
    const config = await getHeaderConfig();

    const endpointUrl = `${URL}v1/flight/cancel-reservation`;
    const input = { bookingNumber: req.body.bookingNumber };

    axios.post(endpointUrl, input, config)
        .then(response => {
            if(response.data.status === 0){
                //write code to cancel booking in database
                const { successful } = response.data.data;
                if(successful){
                    //update database code
                    Booking.findOneAndUpdate({bookingNumber: input.bookingNumber}, {reservationStatus: "CANCELLED"}, (err, data) => {
                        if(err){
                            return res.status(500).json({status: -1, message: "Booking cancelled. However an error occured while update booking details in database"});
                        }
                        if(!data){
                            return res.status(500).json({status: -1, message: "Booking cancelled. However was unable to find booking record in database"});
                        }
                        res.status(200).json(response.data);
                    });
                }
            }else{
                return res.status(500).json({status: results.status, message: results.message});
            }
        }).catch(err => {
            res.status(500).json({status: -1, message: "An error occured while cancelling booking"});
        });
});

module.exports = router;
