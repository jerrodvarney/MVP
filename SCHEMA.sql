-- trips table
DROP TABLE IF EXISTS trips;

CREATE TABLE trips (
  id SERIAL PRIMARY KEY,
  location VARCHAR(255) NOT NULL,
  start_date VARCHAR(255) NOT NULL,
  end_date VARCHAR(255) NOT NULL,
  image VARCHAR(255)
);

CREATE INDEX idx_trips_id ON trips(id);

-- flights table
DROP TABLE IF EXISTS flights;

CREATE TABLE flights (
  id SERIAL PRIMARY KEY,
  airline VARCHAR(255) NOT NULL,
  number INT NOT NULL,
  departure_time VARCHAR(255) NOT NULL,
  arrival_time VARCHAR(255) NOT NULL,
  arrival VARCHAR(255) NOT NULL,
  departure VARCHAR(255) NOT NULL,
  confirmation VARCHAR(255) NOT NULL,
  direction BOOLEAN NOT NULL,
  trip_id INTEGER NOT NULL REFERENCES trips(id)
);

CREATE INDEX idx_flights_trip_id ON flights(trip_id);

-- hotels table
DROP TABLE IF EXISTS hotels;

CREATE TABLE hotels (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  check_in VARCHAR(255) NOT NULL,
  check_out VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  confirmation VARCHAR(255) NOT NULL,
  trip_id INTEGER NOT NULL REFERENCES trips(id)
);

CREATE INDEX idx_hotels_trip_id ON hotels(trip_id);