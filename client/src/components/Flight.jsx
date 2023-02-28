const Flight = ({ flight }) => {
  return (
    <div className="flight-entry">
      <div className="flight-left">
          <h3 className="flight-airline">{flight.airline} <span>- {flight.number}</span></h3>
          <h3 className="flight-time">Departure: {flight.departureTime}</h3>
          <h3 className="flight-time">Arrival: {flight.arrivalTime}</h3>
      </div>
      <div className="flight-right">
        <div className="departure">
          <h3 className="airport-title">Departure Airport</h3>
          <h4 className="airport-name">{flight.departure}</h4>
        </div>
        <div className="arrival">
          <h3 className="airport-title">Arrival Airport</h3>
          <h4 className="airport-name">{flight.arrival}</h4>
        </div>
      </div>
    </div>
  )
};

export default Flight;