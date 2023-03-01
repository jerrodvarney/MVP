const db = require('../config.js');

const models = {
  getTrips: () => {
    const query = `
      SELECT
        jsonb_build_object(
          'id', t.id,
          'location', t.location,
          'startDate', t.start_date,
          'endDate', t.end_date,
          'image', t.image,
          'hotels', (
            SELECT jsonb_agg(
              jsonb_build_object(
                'name', h.name,
                'address', h.address,
                'checkIn', h.check_in,
                'checkOut', h.check_out,
                'confirmation', h.confirmation,
                'phone', h.phone
              )
            ) FROM hotels h WHERE h.trip_id = t.id
          ),
          'flights', (
            SELECT jsonb_agg(
              json_build_object(
                'airline', f.airline,
                'number', f.number,
                'departureTime', f.departure_time,
                'arrivalTime', f.arrival_time,
                'arrival', f.arrival,
                'departure', f.departure,
                'confirmation', f.confirmation,
                'direction', f.direction
              )
            ) FROM flights f WHERE f.trip_id = t.id
          )
        ) AS result FROM trips t`;

    return db.query(query)
  },

  newTrip: async (trip) => {
    const queryText = `
      INSERT INTO trips (location, start_date, end_date, image)
      VALUES ($1, $2, $3, $4)
      RETURNING id`;
    const queryValues = [trip.location, trip.startDate, trip.endDate, trip.image];

    try {
      await db.query('BEGIN');

      // Insert a new trip record into the 'trips' table
      const tripResult = await db.query(queryText, queryValues);
      const tripId = tripResult.rows[0].id;

      // Insert each hotel record associated with the new trip
      const hotelValues = trip.hotels.map(hotel =>
        [hotel.name, hotel.address, hotel.checkIn, hotel.checkOut, hotel.confirmation, hotel.phone, tripId]
      );

      for (const hotel of hotelValues) {
        await db.query(`
          INSERT INTO hotels (name, address, check_in, check_out, confirmation, phone, trip_id)
          VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          hotel
        );
      }

      // Insert each departing flight record associated with the new trip
      const flights = trip.flights.map(flight =>
        [flight.airline, flight.number, flight.departureTime, flight.arrivalTime, flight.departure, flight.arrival, flight.confirmation, flight.direction, tripId]
      );

      for (const flight of flights) {
        await db.query(`
          INSERT INTO flights (airline, number, departure_time, arrival_time, departure, arrival, confirmation, direction, trip_id)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
          flight
        );
      }

      await db.query('COMMIT');
      console.log('Data inserted successfully!');
    } catch (error) {
      await db.query('ROLLBACK');
      console.error('Error inserting data:', error);
    }
  }
};

module.exports = models;
