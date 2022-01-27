import React, { useContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { LoginContext } from './Context/LoginContext';

import AdminPage from './Page/AdminPage';
import ListBookingPage from './Page/ListBookingPage';
import ListDaftarMenu from './Page/ListDaftarMenu';
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';
import DaftarMenu from './Page/DaftarMenu';
import About from './Page/AboutPage';
import BookingTable from './Page/BookingPage';
import CartPage from './Page/CartPage';
import OrderPage from './Page/OrderPage';
import SuccessPage from './Page/SuccessPage';
import RegisterPage from './Page/RegisterPage';

const PrivateRoute = ({children}) => {
    const [auth, setAuth] = useContext(LoginContext);

    if (auth === false){
        return <Navigate to = "/login"/>
    } else {
        return children
    }
}

const LoginRoute = ({children}) => {
    const [auth, setAuth] = useContext(LoginContext);

    if (auth === false){
        return children
    } else {
        return <Navigate to = "/admin"/>
    }
}

const GuestRoute = ({children}) => {
    const [auth, setAuth] = useContext(LoginContext);

    if (auth === false){
        return children
    } else {
        return <Navigate to = "/admin"/>
    }
}

const MainLayout = () => {
    

    // const PrivateRoute = ({...props}) => {
    //     if(auth){
    //         return <Route {...props}/>
    //     } else {
    //         return <Navigate to = "/login"/>
    //     }
    // }
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<GuestRoute><MainPage /></GuestRoute>} />
                <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
                <Route path="/login" element={<LoginRoute><LoginPage /></LoginRoute>} />
                <Route path='/daftarmenu' element={<DaftarMenu/>} />
                <Route path='/listMenu' element={<ListDaftarMenu/>} />
                <Route path='/listBooking' element={<ListBookingPage/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/booking' element={<BookingTable/>} />
                <Route path='/cart' element={<CartPage/>} />
                <Route path='/order' element={<OrderPage/>} />
                <Route path='/success' element={<SuccessPage/>} />
                <Route path='/register' element={<LoginRoute><RegisterPage/></LoginRoute>} />
            </Routes>

        </Router>

    );
}

export default MainLayout