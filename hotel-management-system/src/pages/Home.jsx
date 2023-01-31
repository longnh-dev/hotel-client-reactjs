import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import Rooms from "../pages/Rooms";
import RoomsList from "../Components/RoomsList";
import Room from "../Components/Room";


const Home = () => {
  return (
    <>
      <Hero hero="defaultHero"></Hero>
      <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at Rs. 5000/=">
        <Link to="/rooms" className="btn btn-primary">
          Our Rooms
        </Link>
      </Banner>
      <Services />
      <RoomsList/>
    </>
  );
};

export default Home;
