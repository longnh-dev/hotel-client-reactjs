import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button} from 'antd';

export default function History({ history }) {
  const { name,id, price, status,thumbnailUrl,booking } = history;
  console.log(history);
  const [error, setError] = useState("");

  const handlePay = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.put(`http://localhost:5200/api/v1/bookings/status/${history.booking.id}`)
      .then(function (response) {
        if(response) {
          alert(response.data.message);
        }
      });
      window.location.reload(false);
    } catch (err) {
      if(err){
        alert(err.response.data.message);
      }
    }
  };
  console.log(history.booking.id);

  return (
    <>
      <tr>
        <td>{history.booking.fullName}</td>
        <td>{history.booking.email}</td>
        <td>{history.booking.phoneNumber}</td>
        <td>{history.booking.checkin}</td>
        <td>{history.booking.checkout}</td>
        <td>{history.booking.paymentType}</td>
        <td>{history.booking.paymentStatus}</td>
        <button type="button" class="btn btn-outline-primary" onClick={handlePay}>Pay</button>
      </tr>
      
    </>
  );
}

