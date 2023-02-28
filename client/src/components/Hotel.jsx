const Hotel = ({ hotel }) => {
  return (
    <div className="hotel-entry">
      <div className="hotel-left">
        <h3 className="hotel-name">{hotel.name}</h3>
        <p className="hotel-address">{hotel.address}</p>
      </div>
      <div className="hotel-right">
        {/* <h3 className="hotel-stay-title">Length of Stay</h3> */}
        <h4 className="hotel-stay">Check In <br /> <span>{hotel.checkIn}</span></h4>
        <h4 className="hotel-stay">Check Out <br /> <span>{hotel.checkOut}</span></h4>
      </div>
    </div>
  )
};

export default Hotel;