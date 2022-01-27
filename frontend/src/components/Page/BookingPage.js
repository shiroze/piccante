import React from 'react';
import BookingTable from '../BookingTable';
import Navbar from '../Navbar';
import Footer from '../Footer';

const DaftarMenu = () => {
    return (
        <>
            <Navbar />
            <div className='main-body'>           
                <BookingTable />
                <Footer />            
            </div>
        </>

    );
}

export default DaftarMenu;