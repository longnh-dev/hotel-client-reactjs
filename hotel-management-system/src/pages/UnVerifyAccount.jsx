import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';

export default function VerifyAccount() {
    return (
        <>
        <Hero hero="roomsError" />
        <Banner title="ĐĂNG NHẬP THẤT BẠI" subtitle="TÀI KHOẢN CỦA BẠN CHƯA ĐƯỢC KÍCH HOẠT">
                
                <Link to="/signin" className="btn btn-success">
                      TRỞ VỀ ĐĂNG NHẬP
                </Link>
        </Banner>
        </>
    )
}
