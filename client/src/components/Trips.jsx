// import { useState } from 'react';
import TripEntry from './TripEntry.jsx';
import TripDetails from './TripDetails.jsx';

const Trips = ({
  displayTrips,
  allTrips,
  selected,
  setSelect,
}) => {

  //HELPER FUNCTIONS
  const renderSelected = () => {
    const tripData = allTrips.filter(trip => trip.id === selected);
    return (
      <TripDetails tripData={tripData[0]} setSelect={setSelect} />
    )
  }

  if (!displayTrips) return null;
  return (
    <div id="trips">
      {allTrips && !selected
        ? allTrips.map(detail => <TripEntry key={detail.startDate} tripDetails={detail} setSelect={setSelect} />)
        : renderSelected()}
    </div>
  )
};

export default Trips;