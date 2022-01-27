import React from 'react';
import Navbar from '../Navbar';
import Cart from '../Cart';
import Footer from '../Footer';

const CartPage = () => {
    return (
        <>
            <Navbar />
            <div className='main-body'>           
                <Cart />
                <Footer />   
            </div>
        </>

    );
}

export default CartPage;