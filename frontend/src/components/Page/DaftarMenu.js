import React from 'react';
import FoodSection from '../FoodSection';
import Navbar from '../Navbar';
import Footer from '../Footer';

const DaftarMenu = () => {
    return (
        <>
            <Navbar />
            <div className='main-body'>           
                <FoodSection />
                <Footer />           
            </div>
        </>

    );
}

export default DaftarMenu;