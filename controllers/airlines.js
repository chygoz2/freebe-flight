require('dotenv').load();
const router = require('express').Router();
const axios = require('axios');
const Token = require('../models/Token');
const getHeaderConfig = require('./get_header_config');

const URL = process.env.URL;

router.post('/get-logos', async (req, res) => {
    
    const config = await getHeaderConfig();
    
    const endpointUrl = `${URL}v1/flight/get-airlines-logo`;
    const input = {
        codes: req.body.codes
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
            res.status(500).json({status: -1, message: "Error occured while getting airline logos"});
        });
});

module.exports = router;
