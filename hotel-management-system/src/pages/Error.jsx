import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import {FaRegMeh} from 'react-icons/fa';

export default function Error() {
    return (
        <>
        <Hero hero="roomsError" />
        <Banner title="Error! An error occurred. Please try again later">
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner>
        </>
    )
}
