import React, { useState, useEffect } from 'react'
import { orderData } from './data-order'
import axios from 'axios'

const tableMenu = () => {
    const [menus, setMenus] = useState([])
    
    useEffect(() => {
        getAllMenus()
    }, []) // [] untuk agar dijalankan hanya saat unmounted


    const getAllMenus = async () => {
        const response = await axios.get('http://localhost:5000/api/menus')
        setMenus(response.data)
    }

    const handleDelete = async(id) => {
        let newList = menus.filter(el => el.id !== id)
        await axios.delete(`http://localhost:5000/api/menus/${id}`)
        setMenus([...newList])
    }

    return (
        <div className="col-md-9" style={{ marginTop: "1em" }}>
            <h5 style={{ color: "#003048fa" }}> <i className="bi bi-speedometer2 mt-2 ml-3 mr-2"></i> DASHBOARD </h5>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        {/* <div className="row justify-content-end mr-1">
                            <a href="#" className="btn btn-sm btn-primary shadow font-weight-bold"> <i className="bi bi-download mr-2"></i> Cetak Laporan</a>
                        </div> */}
                        <div className="d-flex shadow flex-column mt-2 p-3" style={{ borderRadius: "10px", backgroundColor: "#fff" }}>
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title ml-1 text-info">Riwayat Order Terakhir</h3>
                                </div>
                                <div className="box-body">
                                    <div className="table-responsive">
                                        <table className="table table-borderless no-margin">
                                            <thead>
                                                <tr style={{ color: "#003048fa" }}>
                                                    <th>Order ID</th>
                                                    <th>Jenis Makanan</th>
                                                    <th>Nama Makanan</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    menus.map((item) => {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    <a href="#" className="text-decoration-none" style={{ color: "#003048fa" }}>
                                                                        {item.no_order}
                                                                    </a>
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.jenisMakanan}
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.namaMakanan}
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.quantity}
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.total}
                                                                </td>
                                                                <td>
                                                                    <button type="button" className="btn btn-sm btn-danger" onClick={(e) => { handleDelete(item.id)}}><i className="bi bi-trash-fill"></i></button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default tableMenu