const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const thirdParty = require('./controllers/thirdParty');

router.get('/trips', controllers.getTrips);
router.get('/search-flights', thirdParty.searchFlights);


module.exports = router;
