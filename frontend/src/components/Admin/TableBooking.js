import React, { useState, useEffect } from 'react'
import { orderData } from './data-order'
import axios from 'axios'

const TableBooking = () => {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        getAllBooks()
    }, []) // [] untuk agar dijalankan hanya saat unmounted


    const getAllBooks = async () => {
        const response = await axios.get('http://localhost:5000/api/booking')
        setBooks(response.data)
    }

    const handleDelete = async(id) => {
        let newList = books.filter(el => el.id !== id)
        await axios.delete(`http://localhost:5000/api/booking/${id}`)
        setBooks([...newList])
    }

    return (
        <div className="col-md-9" style={{ marginTop: "1em" }}>
            <h5 style={{ color: "#003048fa" }}> <i className="bi bi-speedometer2 mt-2 ml-3 mr-2"></i> BOOKING </h5>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        {/* <div className="row justify-content-end mr-1">
                            <a href="#" className="btn btn-sm btn-primary shadow font-weight-bold"> <i className="bi bi-download mr-2"></i> Cetak Laporan</a>
                        </div> */}
                        <div className="d-flex shadow flex-column mt-2 p-3" style={{ borderRadius: "10px", backgroundColor: "#fff" }}>
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title ml-1 text-info">Riwayat Booking Terakhir</h3>
                                </div>
                                <div className="box-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover no-margin">
                                            <thead>
                                                <tr style={{ color: "#003048fa" }}>
                                                    <th>Nama</th>
                                                    <th>No HP</th>
                                                    <th>Email</th>
                                                    <th>Orang</th>
                                                    <th>Tanggal</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    books.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <a href="#" className="text-decoration-none" style={{ color: "#003048fa" }}>
                                                                        {item.nama}
                                                                    </a>
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.nohp}
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.email}
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.orang}
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.tanggal}
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

export default TableBooking