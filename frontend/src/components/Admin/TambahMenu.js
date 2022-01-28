import React, { useState, useEffect } from 'react'
import { orderData } from './data-order'
import { jenisMenu } from '../../data-menu';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

import Navbar from '../Admin/Navbar'
import Sidebar from '../Admin/Sidebar'
import Footer from '../Admin/Footer'

const MenuForm = () => {
    const history = useNavigate();
    const [formData, updateFormData] = useState();

    useEffect(() => {
    }, []) // [] untuk agar dijalankan hanya saat unmounted

    const handleChange = (e) => {
      updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };

    const uploadFile = (e) => {
      updateFormData({
        ...formData,

        gambar: e.target.files[0]
      });
    }

    const createMenu = async (e) => {
      e.preventDefault();

      console.log(formData);

      try {
          await axios.post('http://localhost:5000/api/menu', {formData})
          .then(res => {
            console.log(res);
            // history('/listMenu');
          })
      } catch (error) {
          console.log('Gagal');
          swal("Gagal", "Cek KOneksi", "error");
      }
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
                                <div className="box-header with-border">
                                    <h3 className="box-title ml-1 text-info">Daftar Menu</h3>
                                </div>
                                <div className="box-body">
                                    <form method="POST" encType="multipart/form-data" onSubmit={createMenu}>
                                      <div className="form-group">
                                        <label>Jenis Makanan</label>
                                        <select className="form-control" name="jenis" onChange={handleChange}>
                                          {jenisMenu.map((value, index) => {
                                            return (
                                              <option value={value.id} key={index}>{value.jenis}</option>
                                            )
                                          })}
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <label>Nama</label>
                                        <input type={"text"} className="form-control" name="nama" onChange={handleChange} />
                                      </div>
                                      <div className="form-group">
                                        <label>Deskripsi</label>
                                        <textarea className="form-control" rows={5} name="deskripsi" onChange={handleChange}></textarea>
                                      </div>
                                      <div className="form-group">
                                        <label>Harga</label>
                                        <input type={"text"} className="form-control" name="harga" onChange={handleChange} maxLength={20} />
                                      </div>
                                      <div className="form-group">
                                        <label>Gambar</label>
                                        <input type={"file"} accept="image/*" className="form-control" name="gambar" onChange={uploadFile} />
                                      </div>
                                      <button className="btn btn-success mt-3">
                                        Tambah Menu
                                      </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TambahMenu = () => {
  return (
      <>
        <div className='container-fluid' style={{ backgroundColor: "#ffe97f" }}>
          <Navbar />
          <div className='row' style={{ marginTop: "5.8em" }}>
            <Sidebar />
            <MenuForm />
          </div>
        </div>
        <Footer />
      </>
  )
}

export default TambahMenu