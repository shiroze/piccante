import React from 'react';
import Navbar from '../Navbar';
import Order from '../Order';
import Footer from '../Footer';

const OrderPage = () => {
    return (
        <>
            <Navbar />
            <div className='main-body'>           
                <Order />
                <Footer />   
            </div>
        </>

    );
}

export default OrderPage;