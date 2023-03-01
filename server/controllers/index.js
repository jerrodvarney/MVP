const db = require('../../db/models');

const controllers = {
  getTrips: (req, res) => {
    db.getTrips()
      .then(({ rows }) => {
        const data = rows.map(({ result }) => result);
        res.status(200).send(data);
       })
      .catch(err => {
        console.error('error fetching all trips: ', err);
        res.sendStatus(500);
      });
  },

  newTrip: (req, res) => {
    db.newTrip(req.body)
      .then(() => res.sendStatus(204))
      .catch(err => {
        console.error('error adding new trip: ', err);
        res.sendStatus(500);
      });
  },
}

module.exports = controllers;
