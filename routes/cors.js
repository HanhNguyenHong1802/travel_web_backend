const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:4000', 'http://localhost:4001'];
var corsOptsDelegate = (req, callback) => {
    corsOpts = { origin: false };
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOpts= { origin: true };
    }
    callback(null, corsOpts);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptsDelegate);