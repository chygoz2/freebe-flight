const jwt = require('jsonwebtoken');
const { jwtPrivateKey, jwtPublicKey } = require('../config/jwt_keys');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(500).json({status: -1, message: "Token not specified"});
    }

    jwt.verify(token, jwtPublicKey, function(err, decoded) {
        if(err){ 
            return res.status(500).json({status: -1, message: "Invalid token"});
        }
        else{
            next();
        }
    });
};

module.exports = verifyToken;