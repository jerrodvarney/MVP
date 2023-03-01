import Flight from './Flight.jsx';

const FlightList = ({ flights }) => {
  console.log(flights);
  return (
    <div className="flight-list">
      <div className="departing-flights">
      <h3 className="content-title">Departing Flights</h3>
        {flights
          ? flights
              .filter(flight => flight.direction === false)
              .map(flight => <Flight flight={flight} key={flight.number} />)
            : <div className="content-placeholder" />}
      </div>
      <div className="returning-flights">
      <h3 className="content-title">Return Flights</h3>
        {flights
          ? flights
          .filter(flight => flight.direction === true)
          .map(flight => <Flight flight={flight} key={flight.number} />)
          : <div className="content-placeholder" />}
      </div>
    </div>
  )
}

export default FlightList;