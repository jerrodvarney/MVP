// const db = require('../../db/models');

//temporary local storage
const trips = [
  {
    id: 1,
    location: 'miami',
    startDate: '5/24',
    endDate: '6/5',
    image: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg'
  },
  {
    id: 2,
    location: 'ohio',
    startDate: '3/28',
    endDate: '4/5',
    image: 'https://a.cdn-hotels.com/gdcs/production111/d211/9dee9a54-835b-412d-b45c-5d783bb3d9c0.jpg'
  },
  {
    id: 3,
    location: 'ohio',
    startDate: '3/28',
    endDate: '4/5',
    image: 'https://a.cdn-hotels.com/gdcs/production111/d211/9dee9a54-835b-412d-b45c-5d783bb3d9c0.jpg'
  },
  {
    id: 4,
    location: 'miami',
    startDate: '5/24',
    endDate: '6/5',
    image: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg'
  },
  {
    id: 5,
    location: 'miami',
    startDate: '5/24',
    endDate: '6/5',
    image: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg'
  },
  {
    id: 6,
    location: 'ohio',
    startDate: '3/28',
    endDate: '4/5',
    image: 'https://a.cdn-hotels.com/gdcs/production111/d211/9dee9a54-835b-412d-b45c-5d783bb3d9c0.jpg'
  },
  {
    id: 7,
    location: 'ohio',
    startDate: '3/28',
    endDate: '4/5',
    image: 'https://a.cdn-hotels.com/gdcs/production111/d211/9dee9a54-835b-412d-b45c-5d783bb3d9c0.jpg'
  },
  {
    id: 8,
    location: 'miami',
    startDate: '5/24',
    endDate: '6/5',
    image: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg'
  },
]


const controllers = {
  getTrips: (req, res) => {
    res.status(200).send(trips);
  },

  oneTrip: (req, res) => {
    let target = req.body.id;
    target = trips.filter(trip => trip.id === target);
    res.status(200).send(target);
  },

  newTrip: (req, res) => {

  },


}

module.exports = controllers;
