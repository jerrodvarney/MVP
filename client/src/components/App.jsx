import { useState, useEffect } from 'react';
import Home from './Home.jsx';
import Trips from './Trips.jsx';
import NewTrip from './NewTrip.jsx';
import { GiPineTree } from 'react-icons/gi';
import axios from 'axios';

const App = () => {
  // STATE DATA
  const [home, showHome] = useState(true);
  const [displayTrips, showTrips] = useState(false);
  const [newTrip, showNew] = useState(false);
  const [selected, setSelect] = useState(false);
  const [allTrips, setAllTrips] = useState([]);

  // SECTION RENDER FUNCTIONS
  const displayHome = () => {
    if (home) return;
    showNew(false);
    showTrips(false);
    setSelect(false);
    showHome(true);
  }

  const renderTrips = () => {
    if (displayTrips) return;
    showHome(false);
    showNew(false);
    setSelect(false);
    showTrips(true);
  }

  const displayNew = () => {
    if (newTrip) return;
    showHome(false);
    showTrips(false);
    setSelect(false);
    showNew(true);
  }

  // HTTP REQUEST HANDLERS
  const fetchTrips = () => {
    axios.get('http://localhost:3000/trips')
      .then(({ data }) => setAllTrips(data))
      .catch(err => console.error('error fetching all trips: ', err));
  }

  // INITIALIZATION
  useEffect(() => {
    fetchTrips()
  }, []);

  return (
  <div id="app">
    <div id="header" onClick={displayHome}>
      <h1 id="logo">
        nomad
        {" "}
        <GiPineTree size=".9em" />
      </h1>
    </div>
    <div id="content">
      <Home
        home={home}
        renderTrips={renderTrips}
        displayNew={displayNew}
      />
      <Trips
        displayTrips={displayTrips}
        allTrips={allTrips}
        selected={selected}
        setSelect={setSelect}
      />
      <NewTrip
        newTrip={newTrip}
        displayHome={displayHome}
        fetchTrips={fetchTrips}
      />
    </div>
  </div>
  )
}

export default App;