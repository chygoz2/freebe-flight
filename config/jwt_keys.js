const fs = require('fs');
const path = require('path');

const jwtPrivateKey = fs.readFileSync(path.join(__dirname, 'jwt'), 'utf8');
const jwtPublicKey = fs.readFileSync(path.join(__dirname, 'jwt.pub'), 'utf8');

module.exports = { jwtPrivateKey, jwtPublicKey };