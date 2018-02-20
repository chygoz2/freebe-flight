const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    code: { type: String },
    name: { type: String },
    isoCode: { type: String },
    dialingCode: { type: String },
    capital: { type: String },
    currencyCode: { type: String },
    currencyName: { type: String },
    cities: [{
        code: { type: String },
        name: { type: String },
        gmt: { type: Number },
        countryCode: { type: String },
        airports: [{
            iataCode: { type: String },
            icaoCode: { type: String },
            name: { type: String },
            gmt: { type: Number },
            latitude: { type: String },
            longitude: { type: String },
            popularityIndex: { type: Number },
            cityCode: { type: String }
        }]
    }]
});

module.exports = mongoose.model('Country', countrySchema);