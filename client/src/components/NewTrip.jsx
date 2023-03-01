import { useState } from 'react';
import AddHotel from './AddHotel.jsx';
import AddFlight from './AddFlight.jsx';
import { MdOutlineAdd, MdDeleteOutline } from 'react-icons/md';
import requests from '../requests.js';

const NewTrip = ({ newTrip, displayHome, fetchTrips }) => {
  // STATE DATA
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);
  const [leave, setLeave] = useState(null);
  const [tripEnd, setTripEnd] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [flights, setFlights] = useState([]);
  const [numHotelForms, setHotelForms] = useState([1]);
  const [numFlightForms, setFlightForms] = useState([1]);

  // HELPER FUNCTIONS
  const anotherHotel = (boolean) => {
    if (boolean) setHotelForms([...numHotelForms, 1]);
    else setHotelForms(numHotelForms.slice(1));
  };

  const anotherFlight = (boolean) => {
    if (boolean) setFlightForms([...numFlightForms, 1]);
    else setFlightForms(numFlightForms.slice(1));
  };

  const resetState = () => {
    setLocation(null);
    setImage(null);
    setLeave(null);
    setTripEnd(null);
    setHotels([]);
    setFlights([]);
    setHotelForms([1]);
    setFlightForms([1]);
  };

  // EVENT HANDLERS
  const submitForm = (e) => {
    e.preventDefault();

    // build trip object
    let trip = {
      location: location,
      startDate: leave,
      endDate: tripEnd,
      image: image,
      hotels: hotels,
      flights: flights
    }

    requests.addNew(trip)
      .then(() => {
         // reset all inputs and state
        let inputs = Array.from(document.getElementsByTagName('input'));
        inputs.map(input => input.value = null);
        resetState()

        // get new trip data and display home
        fetchTrips()
        displayHome();
      })
      .catch(err => {
        console.error('error adding new trip: ', err);
      });
  };



  if (!newTrip) return null;
  return (
    <div id="new-trip">
      <div className="new-top">
        <label className="new-title">Plan A New Trip To:
          <input type="text" className="location-input" onChange={(e) => setLocation(e.target.value)}/>
        </label>
      </div>
      <div className="new-bottom">
        <div className="trip-dates-form">
          <div className="date-left">
            <h4 className="form-date-title">Leave:</h4>
            <input id="leave-date" type="date" onChange={(e) => setLeave(e.target.value)}></input>
          </div>
          <div className="date-right">
            <h4 className="form-date-title">Return:</h4>
            <input id="return-date" type="date" onChange={(e) => setTripEnd(e.target.value)}></input>
          </div>
        </div>
        <div className="image-upload">
          <label>Image:
            <input type="text" onChange={(e) => setImage(e.target.value)}/>
          </label>
        </div>
        <div id="add-hotels">
          <h3 className="add-hotels-title">Hotels / Accomodations</h3>
          {numHotelForms.map((num, i) => (
            <div className="add-hotel-entry" key={i}>
              <h4 className="num-hotels">Hotel {i + 1}</h4>
              <AddHotel setHotels={setHotels} hotels={hotels} />
            </div>
          ))}
          <button className="add-another-hotel" type="button" onClick={() => anotherHotel(true)}>
            Add Another
            <MdOutlineAdd />
          </button>
          {numHotelForms.length > 1
            ? <button className="remove-hotel" onClick={() => anotherHotel(false)}>
                Remove Hotel
                <MdDeleteOutline />
              </button>
            : null}
        </div>
        <div id="add-flights">
          <h3 className="add-flights-title">Hotels / Accomodations</h3>
          {numFlightForms.map((num, i) => (
            <div className="add-flight-entry" key={i}>
              <h4 className="num-flights">Flight {i + 1}</h4>
              <AddFlight setFlights={setFlights} flights={flights} />
            </div>
          ))}
          <button className="add-another-flight" type="button" onClick={() => anotherFlight(true)}>
            Add Another
            <MdOutlineAdd />
          </button>
          {numFlightForms.length > 1
            ? <button className="remove-flight" onClick={() => anotherFlight(false)}>
                Remove Flight
                <MdDeleteOutline />
              </button>
            : null}
        </div>
        <button type="submit" onClick={submitForm}>Submit</button>
      </div>
    </div>
  )
};

export default NewTrip;