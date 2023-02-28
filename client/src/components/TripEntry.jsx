const TripEntry = ({ tripDetails, setSelect }) => {
  return (
    <div
      className="trip-entry"
      style={{backgroundImage: `url(${tripDetails.image})` }}
      onClick={() => setSelect(tripDetails.id)}
    >
      <div className="trip-top" />
      <div className="trip-bottom">
        <h3 className="trip-title">{tripDetails.location}</h3>
        <div className="date-container">
          <span className="trip-dates">{`${tripDetails.startDate} - ${tripDetails.endDate}`}</span>
        </div>
      </div>
    </div>
  )
};

export default TripEntry;
