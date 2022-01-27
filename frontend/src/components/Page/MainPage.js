import React, { useState } from 'react'
import About from '../About';
import BookingTable from '../BookingTable';
import FoodSection from '../FoodSection';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Slider from '../Slider';
import '../../App.css'

const MainPage = () => {
    return (
        <>
            <Navbar />
            <div className='main-body'>
                <Slider />
                <FoodSection />
            </div>
            <About />
            <BookingTable />
            <Footer />
        </>

    );
}

export default MainPage;
