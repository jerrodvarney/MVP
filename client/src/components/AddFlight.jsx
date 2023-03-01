import { useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';

const AddFlight = ({ setFlights, flights }) => {
  // STATE DATA
  const [airline, setAirline] = useState(null);
  const [number, setNumber] = useState(null);
  const [confirmation, setConfirm] = useState(null);
  const [depart, setDepart] = useState(null);
  const [departTime, setDepartTime] = useState(null);
  const [arrive, setArrive] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [direction, setDirection] = useState(false);

  // EVENT HANDLERS
  const handleSubmit = (e) => {
    const flight = {
      airline: airline,
      number: number,
      confirmation: confirmation,
      departure: depart,
      departureTime: departTime,
      arrival: arrive,
      arrivalTime: arrivalTime,
      direction: direction,
    }
    setSubmit(true);
    setFlights([...flights, flight]);
  };


  return (
    <div className="add-flight-form">
      <div className="flight-form-name">
        <label>Airline:
          <input className="flight-input" type="text" onChange={(e) => setAirline(e.target.value)}/>
        </label>
        <label>Flight Number:
          <input className="flight-input" type="number" onChange={(e) => setNumber(e.target.value)}/>
        </label>
        <label>Confirmation:
          <input className="flight-input" type="text" onChange={(e) => setConfirm(e.target.value)}/>
        </label>
        <label>Return Flight?
          <input type="checkbox" onClick={() => setDirection(!direction)}/>
        </label>
      </div>
      <div className="flight-form-depart-">
        <label>Departure Airport:
          <input className="flight-input" type="text" onChange={(e) => setDepart(e.target.value)}/>
        </label>
        <label>Departure Time:
          <input className="flight-input" type="datetime-local" onChange={(e) => setDepartTime(e.target.value)}/>
        </label>
        <label>Arrival Airport:
          <input className="flight-input" type="text" onChange={(e) => setArrive(e.target.value)}/>
        </label>
        <label>Arrival Time:
          <input className="flight-input" type="datetime-local" onChange={(e) => setArrivalTime(e.target.value)}/>
        </label>
      </div>
      {!submit
        ? <button className="submit-flight" onClick={handleSubmit}>
            <BsCheck2 />
          </button>
        : null}
    </div>
  )
};

export default AddFlight;