require('dotenv').load();
const router = require('express').Router();
const axios = require('axios');
const sha1 = require('sha1');

const URL = process.env.URL;
const Token = require('../models/Token');

router.get('/', (req, res) => {
    (async () => {
        res.json(await getAuthorizationToken());
    })();
});

module.exports = router;
