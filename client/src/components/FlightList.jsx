import Flight from './Flight.jsx';

const FlightList = ({ flights }) => {
  console.log(flights);
  return (
    <div className="flight-list">
      {flights
        ? (
          <>
            <div className="departing-flights">
            <h3 className="content-title">Departing Flights</h3>
              {flights.departing.map(flight => <Flight flight={flight} key={flight.number} />)}
            </div>
            <div className="returning-flights">
            <h3 className="content-title">Return Flights</h3>
              {flights.returning.map(flight => <Flight flight={flight} key={flight.number} />)}
            </div>
          </>
        )
        : <div className="content-placeholder" />}
    </div>
  )
}

export default FlightList;