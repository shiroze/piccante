import React from 'react'
import Navbar from '../Admin/Navbar'
import Sidebar from '../Admin/Sidebar'
import Footer from '../Admin/Footer'
import TableBooking from '../Admin/TableBooking'


const ListBookingPage = () => {
    return (
        <>
          <div className='container-fluid' style={{ backgroundColor: "#ffe97f" }}>
            <Navbar />
            <div className='row' style={{ marginTop: "5.8em" }}>
              <Sidebar />
              <TableBooking />
            </div>
          </div>
          <Footer />
        </>
    )
}

export default ListBookingPage