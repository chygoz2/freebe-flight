require('dotenv').load();
const router = require('express').Router();
const axios = require('axios');
const moment = require('moment');
const sha1 = require('sha1');
const jwt = require('jsonwebtoken');

const Country = require('../models/Country');
const Token = require('../models/Token');
const Booking = require('../models/Booking');
const getHeaderConfig = require('./get_header_config');
const { FLIGHT_TRIP_TYPE, TICKET_CLASS_TYPE, AGE_GROUPS } = require('../config/constants');
const { jwtPublicKey } = require('../config/jwt_keys');

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

    const endpointUrl = `${URL}v1/flight/create-affiliate-booking`;

    const input = {
        pricedItinerary: req.body.pricedItinerary,
        contactInformation: req.body.contactInformation,
        travellers: req.body.travellers
    };

    //get user details from JWT in header
    const token = req.headers.authorization;

    const jwtuser = jwt.verify(token, jwtPublicKey);

    axios.post(endpointUrl,input, config)
        .then(response => {
            if(response.data.status === 0){
                // save booking details to database
                const { referenceNumber, bookingNumber } = response.data.data;
                //insert into database code
                const booking = new Booking({
                    user: {
                        firstname: jwtuser.firstName,
                        lastname: jwtuser.lastName,
                        email: jwtuser.email.toLowerCase()
                    },
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

router.post('/issue-ticket', async (req, res) => {
    const config = await getHeaderConfig();
    const WALLET_PASSCODE = process.env.WALLET_PASSCODE;
    const SECRET_KEY = process.env.SECRET_KEY;
    const NOFIFICATION_URL = process.env.NOFIFICATION_URL;

    const endpointUrl = `${URL}v1/affiliate/ticket-issue-request`;
    const input = { 
        bookingNumber: req.body.bookingNumber,
        walletPasscode: WALLET_PASSCODE,
        notificationUrl: NOFIFICATION_URL,
        hash: sha1(`${WALLET_PASSCODE}${SECRET_KEY}`)
    };

    console.log(input.hash)

    axios.post(endpointUrl, input, config)
        .then(response => {
            const {status, message, data} = response.data;
            if(status === -1){
                return res.status(500).json({status: status, message: message});
            }
            if(status === 0){
                return res.status(200).json(
                    response.data
                );
            }
        }).catch(err => {
            res.status(500).json({ status: -1, message: "An error occured while issuing ticket"});
        });

});

router.post('/ticket-issue-notification', async (req, res) => {
    const bookingNumber = req.body.bookingNumber;
    const ticketDownloadUrl = req.body.ticketDownloadUrl;

    //complete code to save ticket download url in database

    //UPDATE THE BOOKING STATUS IN THE DATABASE LATER
    Booking.findOneAndUpdate({bookingNumber: bookingNumber}, {ticketDownloadUrl: ticketDownloadUrl}, (err, data) => {
        if(err){
            return res.status(500).json({status: -1});
        }
        //probably write code to send email upon ticket issue to user and/or admin
        return res.status(200).json({status: 1});
    })
});

router.get('/get-user-bookings', (req, res) => {
    //get user details from JWT in header
    const token = req.headers.authorization;
    const jwtuser = jwt.verify(token, jwtPublicKey);

    Booking.find({ 'user.email' : jwtuser.email.toLowerCase()}, (err, bookings) => {
        if(err){
            return res.status(500).json({status: -1, message: "Unable to retrieve bookings for user"});
        }
        console.log(bookings);
        return res.status(200).json({
            status: -1,
            message: "Bookings retrieved successfully",
            data: bookings
        });
    })
})


module.exports = router;
