const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user: { 
        firstname: {type: String },
        lastname: {type: String },
        email: { type: String }
    },
    referenceNumber: { type: String },
    bookingNumber: { type: String },
    bookingDate: { type: String },
    reservationStatus: {type: String},
    ticketDownloadUrl: {type: String, default: null},
    pricedItinerary: {
        sequencyNumber: Number,
        totalFare: String,
        currencyCode: String,
        ticketLimitTime: String,
        signature: String,
        originDestinationOptions: [
            {
                stops: Number,
                flightSegments: [
                    {
                        departureTime: String,
                        arrivalTime: String,
                        departureAirportCode: String,
                        departureAirportName: String,
                        arrivalAirportCode: String,
                        arrivalAirportName: String,
                        operatingAirlineCode: String,
                        airlineName: String,
                        airlineCode: String,
                        bookingClass: String,
                        journeyDuration: String,
                        flightNumber: String,
                        resBookDesigCode: String,
                        numberInParty: Number,
                        rph: Number
                    }
                ]
            }
        ],
    },
    contactInformation: {
        title: Number,
        firstName: String,
        lastName: String,
        dateOfBirth: String,
        email: String,
        phoneNumber: String,
        address: String,
        city: String,
        countryCode: String
    },
    travellers: [
    	{
    	  firstName: String,
	      lastName: String,
	      dateOfBirth: String,
	      title: Number,
	      ageGroup: Number,
	      passportNumber: String,
	      passportIssuingCountryCode: String,
	      passportExpiryDate: String
    	}
    ]
});

module.exports = mongoose.model('Booking', bookingSchema);