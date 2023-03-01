const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
// const thirdParty = require('./controllers/thirdParty');

router.get('/trips', controllers.getTrips);
router.post('/trips', controllers.newTrip);


module.exports = router;
