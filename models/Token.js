const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    name: String,
    token: String,
    expirationTime: String
});

module.exports = mongoose.model('Token', TokenSchema);