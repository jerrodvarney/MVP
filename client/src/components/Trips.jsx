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
    <>
    {allTrips && !selected
      ? (
        <div id="trips">
          {allTrips.map((detail, index) => <TripEntry key={index} tripDetails={detail} setSelect={setSelect} />)}
        </div>
      )
      : renderSelected()}
    </>
  )
};

export default Trips;