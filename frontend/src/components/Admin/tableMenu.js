import React, { useState, useEffect } from 'react'
import { orderData } from './data-order'
import { jenisMenu, daftarMenu } from '../../data-menu';
import axios from 'axios'
import { Link } from 'react-router-dom';

const TableMenu = () => {
    const [menus, setMenus] = useState([])
    
    useEffect(() => {
        getAllMenus()
    }, []) // [] untuk agar dijalankan hanya saat unmounted


    const getAllMenus = async () => {
        const response = await axios.get('http://localhost:5000/api/menu')
        setMenus(response.data)
    }

    const handleDelete = async(id) => {
        let newList = menus.filter(el => el.id !== id)
        await axios.delete(`http://localhost:5000/api/menu/${id}`)
        setMenus([...newList])
    }

    return (
        <div className="col-md-9" style={{ marginTop: "1em" }}>
            <h5 style={{ color: "#003048fa" }}> <i className="bi bi-speedometer2 mt-2 ml-3 mr-2"></i> DAFTAR MENU </h5>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        {/* <div className="row justify-content-end mr-1">
                            <a href="#" className="btn btn-sm btn-primary shadow font-weight-bold"> <i className="bi bi-download mr-2"></i> Cetak Laporan</a>
                        </div> */}
                        <div className="d-flex shadow flex-column mt-2 p-3" style={{ borderRadius: "10px", backgroundColor: "#fff" }}>
                            <div className="box box-info">
                                <div className="box-header with-border row">
                                    <div className="col-lg-9">
                                      <h3 className="box-title ml-1 text-info">Daftar Menu</h3>
                                    </div>
                                    <div className="col-lg-3 d-flex justify-content-end">
                                      <Link className="btn btn-success" to={"/tambahMenu"}><i className="bi bi-plus"></i> Tambah Menu</Link>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover no-margin">
                                            <thead>
                                                <tr style={{ color: "#003048fa" }}>
                                                    <th>Jenis Makanan</th>
                                                    <th>Nama Makanan</th>
                                                    <th>Deskripsi</th>
                                                    <th>Harga</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    menus.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <a href="#" className="text-decoration-none" style={{ color: "#003048fa" }}>
                                                                        {jenisMenu[item.jenis].jenis}
                                                                    </a>
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.nama}
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.deskripsi}
                                                                </td>
                                                                <td style={{ color: "#003048fa" }}>
                                                                    {item.harga}
                                                                </td>
                                                                <td>
                                                                    <Link className="btn btn-sm btn-primary" to={`/ubahMenu/${item.id}`}><i className="bi bi-pen"></i></Link>
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

export default TableMenu