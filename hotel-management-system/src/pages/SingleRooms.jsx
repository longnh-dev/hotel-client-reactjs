import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Banner from "../Components/Banner";
import StyledHero from "../Components/StyledHero";
import axios from "axios";

const SingleRooms = () => {
  const pathId = window.location.pathname.split("/").pop();
  const [room, setRoom] = React.useState();
  
  React.useEffect(async () => {
    var res = await axios.get(`http://localhost:5200/api/v1/rooms/${pathId}`);
    setRoom(res.data.data);
  }, []);

  const defaultBcg = "https://i.pinimg.com/564x/7a/a1/94/7aa19415266b8ad0ad570b7d2ecc3e8e.jpg";

  return (
    <>
      <StyledHero img={"https://i.pinimg.com/564x/7a/a1/94/7aa19415266b8ad0ad570b7d2ecc3e8e.jpg"}>
        <Banner title={`${room && room.name} room`}>
          <Link to="/rooms" className="btn btn-primary">
            Back To Rooms
          </Link>
        </Banner>
      </StyledHero>

      {room ? (
        <>
          <section className="single-room container">
            <div className="row">
              <div className="col-md-4 col-12 mx-auto">
                <div className="card border-0 shadow-lg">
                  <img
                    src={room.thumbnailUrl}
                    alt={room.name}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="single-room-info">

            <article className="info">
                <h3>Info</h3>
                <h6>Name: {room.name}</h6>
                <h6>price : USD {room.price}</h6>
                <h6>
                  Max capacity : 4 people
                </h6>
                <h6>No pets allowed</h6>
                <h6>Free breakfast included</h6>
              </article>
              <article className="desc">
                <h3>Details</h3>
                <p>{room.description}</p>
              </article>
            </div>
            <div className="p-4 clearfix">
              <div className="row">
                <div className="col-md-3 col-12 ml-auto">
                  <Link
                    to={`/booknow/${room.id}`}
                    q
                    className="btn btn-outline-primary btn-block btn-lg float-right "
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
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
      )}
    </>
  );
};

export default SingleRooms;
