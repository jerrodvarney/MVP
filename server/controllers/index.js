// const db = require('../../db/models');

//temporary local storage
const trips = [
  {
    id: 1,
    location: 'miami',
    startDate: '5/24',
    endDate: '6/5',
    image: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg',
    hotels: [
      {
        name: 'Broadmore Miami Beach',
        address: '7450 Ocean Terrace, Miami Beach, Florida 33141, United States',
        checkIn: 'Wed May 24, 2023 (4 PM)',
        checkOut: 'Fri May 26, 2023 (11 AM)',
        confirmation: 'B_8580360',
        phone: '+1 305-866-1631'
      },
      {
        name: 'Quality Inn Florida City',
        address: '333 S.E. 1st Ave, U.S. 1, Florida City, Florida 33034, United States',
        checkIn: 'Fri, 26 May 2023 from 14:00',
        checkOut: 'Sun, 28 May 2023 until 11:00',
        confirmation: 'CHP242',
        phone: '+13052484009'
      },
      {
        name: 'Sonesta Miami Airport',
        address: '950 NW 42nd Avenue, Miami, FL 33126, Florida, United States',
        checkIn: 'May 29, 2023 After 16:00',
        checkOut: 'May 30, 2023 Before 11:00',
        confirmation: '31851SE224236',
        phone: '+1 305-446-9000'
      },
    ],
    flights: {
      departing: [
        {
          airline: 'Frontier',
          number: '2078',
          departureTime: '5/23/2023 1:37 PM',
          arrivalTime: '5/23/2023 3:12 PM',
          departure: 'San Francisco (SFO)',
          arrival: 'Las Vegas (LAS)',
          confirmation: 'U891SY'
        },
        {
          airline: 'Frontier',
          number: '2134',
          departureTime: '5/24/2023 6:36 AM',
          arrivalTime: '5/24/2023 11:24 AM',
          departure: 'Las Vegas (LAS)',
          arrival: 'Dallas (DFW)',
          confirmation: 'ZED65T',
        },
        {
          airline: 'Frontier',
          number: '2766',
          departureTime: '5/24/2023 12:24 PM',
          arrivalTime: '5/24/2023 4:33 PM',
          departure: 'Las Vegas (LAS)',
          arrival: 'Miami (MIA)',
          confirmation: 'ZED65T',
        }
      ],
      returning: [
        {
          airline: 'Frontier',
          number: '2159',
          departureTime: '5/30/2023 8:27 PM',
          arrivalTime: '5/30/2023 10:52 PM',
          departure: 'Miami (MIA)',
          arrival: 'Las Vegas (LAS)',
          confirmation: 'ZED65T',
        },
        {
          airline: 'Frontier',
          number: '2081',
          departureTime: '5/31/2023 8:09 PM',
          arrivalTime: '5/31/2023 9:51 PM',
          departure: 'Las Vegas (LAS)',
          arrival: 'San Francisco (SFO)',
          confirmation: 'U891SY',
        }
      ]
    }
  },
  {
    id: 2,
    location: 'ohio',
    startDate: '3/28',
    endDate: '4/5',
    image: 'https://a.cdn-hotels.com/gdcs/production111/d211/9dee9a54-835b-412d-b45c-5d783bb3d9c0.jpg',
    hotels: [],
    flights: {
      departing: [],
      returning: [],
    }
  },
  {
    id: 3,
    location: 'ohio',
    startDate: '3/28',
    endDate: '4/5',
    image: 'https://a.cdn-hotels.com/gdcs/production111/d211/9dee9a54-835b-412d-b45c-5d783bb3d9c0.jpg',
    hotels: [],
    flights: {
      departing: [],
      returning: [],
    }
  },
  {
    id: 4,
    location: 'miami',
    startDate: '5/24',
    endDate: '6/5',
    image: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg',
    hotels: [
      {
        name: 'Broadmore Miami Beach',
        address: '7450 Ocean Terrace, Miami Beach, Florida 33141, United States',
        checkIn: 'Wed May 24, 2023 (4 PM)',
        checkOut: 'Fri May 26, 2023 (11 AM)',
        confirmation: 'B_8580360',
        phone: '+1 305-866-1631'
      },
      {
        name: 'Quality Inn Florida City',
        address: '333 S.E. 1st Ave, U.S. 1, Florida City, Florida 33034, United States',
        checkIn: 'Fri, 26 May 2023 from 14:00',
        checkOut: 'Sun, 28 May 2023 until 11:00',
        confirmation: 'CHP242',
        phone: '+13052484009'
      },
      {
        name: 'Sonesta Miami Airport',
        address: '950 NW 42nd Avenue, Miami, FL 33126, Florida, United States',
        checkIn: 'May 29, 2023 After 16:00',
        checkOut: 'May 30, 2023 Before 11:00',
        confirmation: '31851SE224236',
        phone: '+1 305-446-9000'
      },
    ],
    flights: {
      departing: [
        {
          airline: 'Frontier',
          number: '2078',
          departureTime: '5/23/2023 1:37 PM',
          arrivalTime: '5/23/2023 3:12 PM',
          departure: 'San Francisco (SFO)',
          arrival: 'Las Vegas (LAS)',
          confirmation: 'U891SY'
        },
        {
          airline: 'Frontier',
          number: '2134',
          departureTime: '5/24/2023 6:36 AM',
          arrivalTime: '5/24/2023 11:24 AM',
          departure: 'Las Vegas (LAS)',
          arrival: 'Dallas (DFW)',
          confirmation: 'ZED65T',
        },
        {
          airline: 'Frontier',
          number: '2766',
          departureTime: '5/24/2023 12:24 PM',
          arrivalTime: '5/24/2023 4:33 PM',
          departure: 'Las Vegas (LAS)',
          arrival: 'Miami (MIA)',
          confirmation: 'ZED65T',
        }
      ],
      returning: [
        {
          airline: 'Frontier',
          number: '2159',
          departureTime: '5/30/2023 8:27 PM',
          arrivalTime: '5/30/2023 10:52 PM',
          departure: 'Miami (MIA)',
          arrival: 'Las Vegas (LAS)',
          confirmation: 'ZED65T',
        },
        {
          airline: 'Frontier',
          number: '2081',
          departureTime: '5/31/2023 8:09 PM',
          arrivalTime: '5/31/2023 9:51 PM',
          departure: 'Las Vegas (LAS)',
          arrival: 'San Francisco (SFO)',
          confirmation: 'U891SY',
        }
      ]
    }
  },
  {
    id: 5,
    location: 'miami',
    startDate: '5/24',
    endDate: '6/5',
    image: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg',
    hotels: [
      {
        name: 'Broadmore Miami Beach',
        address: '7450 Ocean Terrace, Miami Beach, Florida 33141, United States',
        checkIn: 'Wed May 24, 2023 (4 PM)',
        checkOut: 'Fri May 26, 2023 (11 AM)',
        confirmation: 'B_8580360',
        phone: '+1 305-866-1631'
      },
      {
        name: 'Quality Inn Florida City',
        address: '333 S.E. 1st Ave, U.S. 1, Florida City, Florida 33034, United States',
        checkIn: 'Fri, 26 May 2023 from 14:00',
        checkOut: 'Sun, 28 May 2023 until 11:00',
        confirmation: 'CHP242',
        phone: '+13052484009'
      },
      {
        name: 'Sonesta Miami Airport',
        address: '950 NW 42nd Avenue, Miami, FL 33126, Florida, United States',
        checkIn: 'May 29, 2023 After 16:00',
        checkOut: 'May 30, 2023 Before 11:00',
        confirmation: '31851SE224236',
        phone: '+1 305-446-9000'
      },
    ],
    flights: {
      departing: [
        {
          airline: 'Frontier',
          number: '2078',
          departureTime: '5/23/2023 1:37 PM',
          arrivalTime: '5/23/2023 3:12 PM',
          departure: 'San Francisco (SFO)',
          arrival: 'Las Vegas (LAS)',
          confirmation: 'U891SY'
        },
        {
          airline: 'Frontier',
          number: '2134',
          departureTime: '5/24/2023 6:36 AM',
          arrivalTime: '5/24/2023 11:24 AM',
          departure: 'Las Vegas (LAS)',
          arrival: 'Dallas (DFW)',
          confirmation: 'ZED65T',
        },
        {
          airline: 'Frontier',
          number: '2766',
          departureTime: '5/24/2023 12:24 PM',
          arrivalTime: '5/24/2023 4:33 PM',
          departure: 'Las Vegas (LAS)',
          arrival: 'Miami (MIA)',
          confirmation: 'ZED65T',
        }
      ],
      returning: [
        {
          airline: 'Frontier',
          number: '2159',
          departureTime: '5/30/2023 8:27 PM',
          arrivalTime: '5/30/2023 10:52 PM',
          departure: 'Miami (MIA)',
          arrival: 'Las Vegas (LAS)',
          confirmation: 'ZED65T',
        },
        {
          airline: 'Frontier',
          number: '2081',
          departureTime: '5/31/2023 8:09 PM',
          arrivalTime: '5/31/2023 9:51 PM',
          departure: 'Las Vegas (LAS)',
          arrival: 'San Francisco (SFO)',
          confirmation: 'U891SY',
        }
      ]
    }
  },
  {
    id: 6,
    location: 'ohio',
    startDate: '3/28',
    endDate: '4/5',
    image: 'https://a.cdn-hotels.com/gdcs/production111/d211/9dee9a54-835b-412d-b45c-5d783bb3d9c0.jpg',
    hotels: [],
    flights: {
      departing: [],
      returning: [],
    }
  },
  {
    id: 7,
    location: 'ohio',
    startDate: '3/28',
    endDate: '4/5',
    image: 'https://a.cdn-hotels.com/gdcs/production111/d211/9dee9a54-835b-412d-b45c-5d783bb3d9c0.jpg',
    hotels: [],
    flights: {
      departing: [],
      returning: [],
    }
  },
  {
    id: 8,
    location: 'miami',
    startDate: '5/24',
    endDate: '6/5',
    image: 'https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg',
    hotels: [
      {
        name: 'Broadmore Miami Beach',
        address: '7450 Ocean Terrace, Miami Beach, Florida 33141, United States',
        checkIn: 'Wed May 24, 2023 (4 PM)',
        checkOut: 'Fri May 26, 2023 (11 AM)',
        confirmation: 'B_8580360',
        phone: '+1 305-866-1631'
      },
      {
        name: 'Quality Inn Florida City',
        address: '333 S.E. 1st Ave, U.S. 1, Florida City, Florida 33034, United States',
        checkIn: 'Fri, 26 May 2023 from 14:00',
        checkOut: 'Sun, 28 May 2023 until 11:00',
        confirmation: 'CHP242',
        phone: '+13052484009'
      },
      {
        name: 'Sonesta Miami Airport',
        address: '950 NW 42nd Avenue, Miami, FL 33126, Florida, United States',
        checkIn: 'May 29, 2023 After 16:00',
        checkOut: 'May 30, 2023 Before 11:00',
        confirmation: '31851SE224236',
        phone: '+1 305-446-9000'
      },
    ],
    flights: {
      departing: [
        {
          airline: 'Frontier',
          number: '2078',
          departureTime: '5/23/2023 1:37 PM',
          arrivalTime: '5/23/2023 3:12 PM',
          departure: 'San Francisco (SFO)',
          arrival: 'Las Vegas (LAS)',
          confirmation: 'U891SY'
        },
        {
          airline: 'Frontier',
          number: '2134',
          departureTime: '5/24/2023 6:36 AM',
          arrivalTime: '5/24/2023 11:24 AM',
          departure: 'Las Vegas (LAS)',
          arrival: 'Dallas (DFW)',
          confirmation: 'ZED65T',
        },
        {
          airline: 'Frontier',
          number: '2766',
          departureTime: '5/24/2023 12:24 PM',
          arrivalTime: '5/24/2023 4:33 PM',
          departure: 'Las Vegas (LAS)',
          arrival: 'Miami (MIA)',
          confirmation: 'ZED65T',
        }
      ],
      returning: [
        {
          airline: 'Frontier',
          number: '2159',
          departureTime: '5/30/2023 8:27 PM',
          arrivalTime: '5/30/2023 10:52 PM',
          departure: 'Miami (MIA)',
          arrival: 'Las Vegas (LAS)',
          confirmation: 'ZED65T',
        },
        {
          airline: 'Frontier',
          number: '2081',
          departureTime: '5/31/2023 8:09 PM',
          arrivalTime: '5/31/2023 9:51 PM',
          departure: 'Las Vegas (LAS)',
          arrival: 'San Francisco (SFO)',
          confirmation: 'U891SY',
        }
      ]
    }
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
