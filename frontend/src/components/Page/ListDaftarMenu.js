import React from 'react'
import Navbar from '../Admin/Navbar'
import Sidebar from '../Admin/Sidebar'
import Footer from '../Admin/Footer'
import TableMenu from '../Admin/TableMenu'


const ListDaftarMenu = () => {
    return (
        <>
          <div className='container-fluid' style={{ backgroundColor: "#ffe97f" }}>
            <Navbar />
            <div className='row' style={{ marginTop: "5.8em" }}>
              <Sidebar />
              <TableMenu />
            </div>
          </div>
          <Footer />
        </>
    )
}

export default ListDaftarMenu