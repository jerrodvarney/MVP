require('dotenv').config();
const axios = require('axios');

// AVIATION API
const { AVIATION_API } = process.env;
const flightUrl = 'http://api.aviationstack.com/v1';

module.exports = {
  searchFlights: (req, res) => {
    const { date, flightNum } = req.query;

    const options = {
      method: 'get',
      url: `${flightUrl}/flights`,
      params: {
        access_key: AVIATION_API,
        limit: 1,
        flight_date: date,
        flight_number: flightNum
      }
    };

    axios(options)
      .then(({ data }) => res.status(200).send(data))
      .catch(err => {
        console.error('error fetching flights: ', err.response);
        res.sendStatus(500);
      });
  }
}