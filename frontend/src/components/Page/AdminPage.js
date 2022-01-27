import React from 'react'
import Navbar from '../Admin/Navbar'
import Sidebar from '../Admin/Sidebar'
import TableCRUD from '../Admin/TableCRUD'
import Footer from '../Admin/Footer'


const AdminPage = () => {
    return (
        <>
          <div className='container-fluid' style={{ backgroundColor: "#ffe97f" }}>
            <Navbar />
            <div className='row' style={{ marginTop: "5.8em" }}>
              <Sidebar />
              <TableCRUD />
            </div>
          </div>
          <Footer />
        </>
    )
}

export default AdminPage