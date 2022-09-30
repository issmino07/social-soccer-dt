const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players.controller');
const dtsController = require('../controllers/dts.controller');

const pool = require('../config/database')



module.exports = router;