import { useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';

const AddHotel = ({ setHotels, hotels }) => {
  // STATE DATA
  const [name, setName] = useState(null);
  const [line1, setLine1] = useState(null);
  const [line2, setLine2] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zip, setZip] = useState(null);
  const [country, setCountry] = useState(null);
  const [phone, setPhone] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [confirmation, setConfirm] = useState(null);
  const [submit, setSubmit] = useState(false);

  // HELPER FUNCTIONS
  const makeAddress = () => {
    const address = `${line1}, ${line2}, ${city}, ${state} ${zip}`;
    return address;
  };

  // EVENT HANDLERS
  const handleSubmit = () => {
    const hotel = {
      name: name,
      address: makeAddress(),
      checkIn: checkIn,
      checkOut: checkOut,
      phone: phone,
      confirmation: confirmation
    }
    setSubmit(true);
    setHotels([...hotels, hotel]);
  };

  return (
    <div className="add-hotel-form">
      <div className="hotel-form-name">
        <label>Name:
          <input className="hotel-input" type="text" onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>Phone Number:
          <input className="hotel-input" type="tel" onChange={(e) => setPhone(e.target.value)}/>
        </label>
        <label>Confirmation:
          <input className="hotel-input" type="text" onChange={(e) => setConfirm(e.target.value)}/>
        </label>
      </div>
      <div className="hotel-form-address">
        <label>Line 1:
          <input className="hotel-input" type="text" onChange={(e) => setLine1(e.target.value)}/>
        </label>
        <label>Line 2:
          <input className="hotel-input" type="text" onChange={(e) => setLine2(e.target.value)}/>
        </label>
        <label>City:
          <input className="hotel-input" type="text" onChange={(e) => setCity(e.target.value)}/>
        </label>
        <label>State:
          <input className="hotel-input" type="text" onChange={(e) => setState(e.target.value)}/>
        </label>
        <label>Zip:
          <input className="hotel-input" type="number" onChange={(e) => setZip(e.target.value)}/>
        </label>
        <label>Country:
          <input className="hotel-input" type="text" onChange={(e) => setCountry(e.target.value)}/>
        </label>
      </div>
      <div className="form-check-in-out">
        <label>Check In:
          <input type="datetime-local" onChange={(e) => setCheckIn(e.target.value)}/>
        </label>
        <label>Check Out:
          <input className="hotel-input" type="datetime-local" onChange={(e) => setCheckOut(e.target.value)}/>
        </label>
      </div>
      {!submit
        ? <button className="submit-hotel" onClick={handleSubmit}>
            <BsCheck2 />
          </button>
        : null}
    </div>
  )
};

export default AddHotel;