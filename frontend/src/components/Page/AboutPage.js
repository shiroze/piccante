import React from 'react';
import About from '../About';
import Navbar from '../Navbar';
import Footer from '../Footer';

const DaftarMenu = () => {
    return (
        <>
            <Navbar />
            <div className='main-body'>           
                <About />
                <Footer />           
            </div>
        </>

    );
}

export default DaftarMenu;