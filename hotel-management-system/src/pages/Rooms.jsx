import React,{useEffect, useState} from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../Components/RoomsContainer";
import axios from "axios";
import RoomsList from "../Components/RoomsList";

import { Pagination, Input, Space } from "antd";


const Rooms = () => {
  const page = 1;
  const size = 20;
  const filter = "%7B%7D";
  const sort = "-CreatedOnDate";
  
  const [rooms, setRooms] = useState([]);
  const { Search } = Input;
  const token = localStorage.getItem("tokenString");
  

  useEffect(async () => {
    var res = await axios.get(`http://localhost:5200/api/v1/rooms?size=${size}&page=${page}&filter=${filter}&sort=${sort}`,{ headers: {"Authorization" : `Bearer ${token}`}});
    if(res.data.data.content){
      setRooms(res.data.data.content);
    }
    
  }, []);

  const onShowSizeChange = async (current, pageSize) => {
    var res = await axios.get(`http://localhost:5200/api/v1/rooms?size=${pageSize}&page=${current}&filter=${filter}&sort=${sort}`);
    if(res.data.data.content){
      setRooms(res.data.data.content);
    }
  };

  const filterVipRoom = "%7B%22category%22%3A%22VIP%22%7D"
  const handleFilterVipRoom = async (current, pageSize) => {
    var res = await axios.get(`http://localhost:5200/api/v1/rooms?size=${20}&page=${1}&filter=${filterVipRoom}&sort=${sort}`);
    if(res.data.data.content){
      setRooms(res.data.data.content);
    }
  };

  const filterVipExtraRoom = "%7B%22category%22%3A%22VIP-EXTRA%22%7D"
  const handleFilterVipExtraRoom = async (current, pageSize) => {
    var res = await axios.get(`http://localhost:5200/api/v1/rooms?size=${20}&page=${1}&filter=${filterVipExtraRoom}&sort=${sort}`);
    if(res.data.data.content){
      setRooms(res.data.data.content);
    }
  };

  const filterPresidentRoom = "%7B%22category%22%3A%22PRESIDENT%22%7D"

  const handleFilterPresidentRoom = async (current, pageSize) => {
    var res = await axios.get(`http://localhost:5200/api/v1/rooms?size=${20}&page=${1}&filter=${filterPresidentRoom}&sort=${sort}`);
    if(res.data.data.content){
      setRooms(res.data.data.content);
    }
  };

  const filterAvailableStatus = "%7B%22status%22%3A%22AVAILABLE%22%7D"
  const handleFilterAvailableRoom = async () => {
    var res = await axios.get(`http://localhost:5200/api/v1/rooms?size=${20}&page=${1}&filter=${filterAvailableStatus}&sort=${sort}`);
    if(res.data.data.content){
      setRooms(res.data.data.content);
    }
  };

  const filterUnAvailableStatus = "%7B%22status%22%3A%22UNAVAILABLE%22%7D"
  const handleFilterUnAvailableRoom = async () => {
    var res = await axios.get(`http://localhost:5200/api/v1/rooms?size=${20}&page=${1}&filter=${filterUnAvailableStatus}&sort=${sort}`);
    if(res.data.data.content){
      setRooms(res.data.data.content);
    }
  };

  const onSearch  = async (e) => {
    const filterFullTextSearch = `%7B%22fullTextSearch%22%3A%22${e.target.value}%22%7D`;
    var res = await axios.get(`http://localhost:5200/api/v1/rooms?size=${20}&page=${1}&filter=${filterFullTextSearch}&sort=${sort}`);
    if(res.data.data.content){
      setRooms(res.data.data.content);
    }
  };

  
  return (
    <div>
      <Hero hero="roomsHero"></Hero>
      <Banner title="Available Rooms" subtitle="Best in Class Room">
        <Link to="/" className="btn btn-warning">
          RETURN HOME
        </Link>
      </Banner>

    
    <div className="d-flex justify-content-center">
      <button type="button" class="btn btn-outline-primary mt-4 mr-4 d-flex" onClick={handleFilterVipRoom}>VIP Room</button>
      <button type="button" class="btn btn-outline-primary mt-4 mr-4 d-flex" onClick={handleFilterVipExtraRoom}>VIP Extra Room</button>
      <button type="button" class="btn btn-outline-primary mt-4 mr-4  d-flex" onClick={handleFilterPresidentRoom}>President Room</button>
      <button type="button" class="btn btn-outline-primary mt-4 mr-4 d-flex" onClick={handleFilterAvailableRoom}>Available Room</button>
      <button type="button" class="btn btn-outline-primary mt-4  d-flex" onClick={handleFilterUnAvailableRoom}>Unavailable Room</button>
    </div>
    <div className="text-center">
      <Search
        className="justify-content-center mt-4 w-25"
        placeholder="input search text"
        allowClear
        id="valueSearch"
        enterButton="Search"
        size="large"
        onClick={onSearch}
      />
    </div>
    
    <RoomsList rooms={rooms}/>
    <Pagination
      showSizeChanger
      className="mt-4 d-flex justify-content-center"
      onShowSizeChange={onShowSizeChange}
      onClick={onShowSizeChange}
      onChange={onShowSizeChange}
      defaultCurrent={1}
      total={50}
      />
    </div>
  );
};

export default Rooms;
