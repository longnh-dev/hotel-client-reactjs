import React,{useEffect, useState, useRef} from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import axios from "axios";
import HistoryList from "../Components/HistoryList";

const Histories = () => {

  const user = localStorage.getItem("userModel");
  const userOb = JSON.parse(user);
    const [history, setHistory] = useState([]);
    const page = 1;
    const size = 20;
    const filter = "%7B%22customerId%22%3A%22"+ userOb.id +"%22%7D";
    console.log(filter);
    const sort = "-CreatedOnDate";
  
    useEffect(async () => {
      var res = await axios.get(`http://localhost:5200/api/v1/history?size=${size}&page=${page}&filter=${filter}&sort=${sort}`);
      console.log(res.data);
      if(res.data.data.content){
        setHistory(res.data.data.content);
      }
    }, []);
  
    return (
      <div>
        <HistoryList history={history}/>
      </div>
    );
  };
  
export default Histories;