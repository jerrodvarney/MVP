import { TfiClose } from 'react-icons/tfi';
import HotelList from './HotelList.jsx';
import FlightList from './FlightList.jsx';

const TripDetails = ({ tripData, setSelect }) => {

  return (
    <div id="details">
      <div
        className="details-top"
        style={{backgroundImage: `url(${tripData.image})` }}
      >
        <div className="details-title-holder">
          <h3 className="details-title">{tripData.location}</h3>
          <button className="close-details" onClick={() => setSelect(false)}>
            <TfiClose size="2em" />
          </button>
        </div>
      </div>
      <div className="details-content">
        <div className="leave-return">
          <h3 className="itinerary-dates">Leave: {tripData.startDate}</h3>
          <h3 className="itinerary-dates">Return: {tripData.endDate}</h3>
        </div>
        <HotelList hotels={tripData.hotels} />
        <FlightList flights={tripData.flights} />
      </div>
    </div>
  )
};

export default TripDetails;