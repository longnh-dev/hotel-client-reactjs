import axios from "axios";
import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

export default function Room({ room }) {
  const { name,id, price, status,thumbnailUrl,categoryRoom,capacity } = room;
  console.log(room); 

  return (
    <div className="col-md-4 col-12 mx-auto p-2">
      <div className="card shadow-lg border-0 room">
        <img
          src={thumbnailUrl}
          alt="single room"
          className="img-fluid"
        />

        <div className="price-top">
          <h6>{status}</h6>
          <p></p>
        </div>
        {status === 'AVAILABLE' &&  <Link
          to={`/rooms/${id}`}
          className="btn-warning room-link text-center"
        >
          WATCH THIS
        </Link>}
      
        
        <p className="room-info">Name: <small>{name}</small></p>
        <p className="room-info">Price: <small>{price} USD</small></p>
        <p className="room-info">Capacity: <small>{capacity} Pers</small></p>
        <p className="room-info">Category: <small>{categoryRoom}</small></p>

      </div>
    </div>
  );
}

