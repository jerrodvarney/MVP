import { TfiClose } from 'react-icons/tfi';

const TripDetails = ({ tripData, setSelect }) => {

  console.log(tripData)
  return (
    <div id="details">
      <button onClick={() => setSelect(false)}>
        <TfiClose size="2em" />
      </button>
      <h3 className="detail-title">{tripData.location}</h3>
    </div>
  )

};

export default TripDetails;