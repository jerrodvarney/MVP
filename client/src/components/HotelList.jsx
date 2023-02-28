import Hotel from './Hotel.jsx';

const HotelList = ({ hotels }) => {
  return (
    <div className="hotel-list">
      <h3 className="content-title">Hotels / Accomodations</h3>
      {hotels.length
        ? hotels.map(hotel => <Hotel hotel={hotel} key={hotel.name} />)
        : <div className="content-placeholder" />}
    </div>
  )
};

export default HotelList;