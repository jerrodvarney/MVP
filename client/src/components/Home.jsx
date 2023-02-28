const Home = ({
  home,
  renderTrips,
  displayNew,
}) => {

  if (!home) return null;
  return (
    <div id="home">
      <div className="home-left">
        <h1 className="home-title">Get{'\n'}<span>Lost.</span></h1>
      </div>
      <div className="home-right">
        <button className="home-btn my-trips" onClick={renderTrips}>my trips</button>
        <button className="home-btn plan-trip" onClick={displayNew}>something new</button>
      </div>
    </div>
  )
};

export default Home;