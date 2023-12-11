const express = require('express');
const router = express.Router();
const { getAllAircrafts, getAircraftById } = require('./controller');

router.get('/aircrafts', getAllAircrafts);
router.get('/aircrafts/:id', getAircraftById)

module.exports = router;
