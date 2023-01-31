import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useUserAuth } from "../contexts/UserAuthContext";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import Select from "react-select";

export default function Booknow() {
  // const { user } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = localStorage.getItem("userModel");
  const userOb = JSON.parse(user);

  const pathId = window.location.pathname.split("/").pop();
  const [room, setRoom] = React.useState();

  // const options = [
  //   {id:'paymentType', name:'paymentType',value: 'CASH', label: 'Cash' },
  //   {id:'paymentType', name:'paymentType',value: 'DEBIT_CARDS', label: 'DebitCard' },
  //   {id:'paymentType', name:'paymentType',value: 'CREDIT_CARDS', label: 'CreditCard' },
  //   {id:'paymentType', name:'paymentType',value: 'MOBILE_PAYMENTS', label: 'MobilePayment' }
  // ]
  // console.log(options);

  const [credentials, setCredentials] = useState({
    checkin: undefined,
    checkout: undefined,
    customerId: userOb.id,
    roomId: pathId,
    NoOfPerson: undefined,
    fullName: undefined,
    phoneNumber: undefined,
    email: undefined,
    cititzenIdentification: undefined,
    paymentType: undefined
  });

  const handleChange = (e) =>{
    setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
  };

  React.useEffect(async () => {
    var res = await axios.get(`http://localhost:5200/api/v1/rooms/${pathId}`);
    setRoom(res.data.data);
  }, []);
  console.log(room);

  const submitBooking = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post(`http://localhost:5200/api/v1/bookings`, credentials).then(function (response) {
        if(response) {
          alert(response.data.message);
        }
        else{
          alert(response.data.message);
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  if(!room){
    return (
      <div className="container roomerror">
        <div className="row my-5">
          <div className="col-md-6 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4 error">
              <h1 className="text-center display-4">SORRY</h1>
              <h3>No such room could be found...</h3>
              <Link to="/rooms" className="btn btn-warning mt-4 ">
                Back to Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
            <div>
              <h1 className="display-4">Booking</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 my-auto">
                <img
                  src={room.thumbnailUrl}
                  className="img-fluid"
                  alt="selected room"
                />
              </div>
              <div className="col-md-6 col-12 my-auto">
                <h1>Rooms Details</h1>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>Room Type</th>
                      <td>{room.name}</td>
                    </tr>
                    <tr>
                      <th>Capacity</th>
                      <td>{room.capacity}</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>{room.size} sqft.</td>
                    </tr>
                    <tr>
                      <th>Breakfast</th>
                      {room.breakfast ? <td>Yes</td> :<td>No</td>}
                    </tr>
                    <tr>
                      <th>Pets</th>
                      {room.pet? <td>Allowed</td> : <td>Not Allowed</td>}
                    </tr>
                    <tr>
                      <th>Category</th>
                      <td>{room.roomCategory.name}</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>{room.status}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-12 col-12 my-auto">
                <div className="col-md-12 col-12 float-right">
                  <form>
                    <div className="form-group">
                    <label>Checkin</label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        name="checkin"
                        id="checkin"
                        placeholder="Checkin Time"
                        onChange={handleChange}
                        required
                      />
                      <label>Checkout</label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        name="checkout"
                        id="checkout"
                        placeholder="Checkin Time"
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="persons">No. of persons</label>
                      <input
                        type="number"

                        className="form-control"
                        id="noOfPerson"
                        placeholder="No. of persons"
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="fullName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Full name"
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="Enter phone number"
                        onChange={handleChange}
                      />
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={handleChange}
                        required
                      />
                       <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                      <label>Citizen identification number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cititzenIdentification"
                        aria-describedby="citizenIdentification"
                        placeholder="Enter citizen identification"
                        onChange={handleChange}
                        required
                      />
                      <label>Payment type</label>
                      <input
                        type="text"
                        className="form-control"
                        id="PaymentType"
                        aria-describedby="PaymentType"
                        placeholder="Enter CASH or INTERNETBANKING"
                        onChange={handleChange}
                        required
                      />
                      {/* <Select
                        options={options}
                        id=''
                        name=''
                        inputValue={options.values.value}
                        onChange={()=>{}}
                        required
                      /> */}
                      
                    </div>
  
                    <div className="form-group form-check"></div>
                  </form>
                  <button
                    className="btn btn-block btn-outline-primary"
                    onClick={submitBooking}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
