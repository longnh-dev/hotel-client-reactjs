import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function VerifyAccount() {
    var param = window.location.search.split(/(email=.*&)/);
    // console.log();
    const email = param[1].replace("email=", "").replace("&","");
    const token = param[2].replace("token=", "");


    useEffect(async () => {
       var req = await axios.put(`http://localhost:5200/api/v1/users/verify-email?email=${email}&token=${token}`,{headers: {"Authorization" : `Bearer ${token}`}}) 
       alert(req.message);
    }, []);

    return (
        <>
        <Hero hero="roomsError" />
        <Banner title="KÍCH HOẠT THÀNH CÔNG" subtitle="TÀI KHOẢN CỦA BẠN ĐÃ ĐƯỢC KÍCH HOẠT">
                
                <Link to="/signin" className="btn btn-success">
                      TRỞ VỀ ĐĂNG NHẬP
                </Link>
        </Banner>
        </>
    )
}
