import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { withCookies, useCookies } from 'react-cookie';
import swal from 'sweetalert';

const TableCRUD = (props) => {
    const history = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies('cart');
    const cart = cookies.cart || [];

    let grandtotal = 0;

    const [no_order, setNomor] = useState(0);
    const [formData, updateFormData] = useState({data: cart});
    const handleChange = (e) => {
      updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };

    const createOrder = async (e) => {
      e.preventDefault();

      console.log(formData);

      try {
          await axios.post('http://localhost:5000/api/orders', {formData})
          .then(res => {
            // console.log(res);
            removeCookie('cart');

            history('/success');
          })
      } catch (error) {
          console.log('Gagal');
          swal("Gagal", "Cek KOneksi", "error");
      }
    }

    const buangOrder = (index) => {
      let newArr = cart.filter((e, i) => i !== index);

      setCookies('cart', newArr, {path : '/'});
      
      window.location.reload();
    }

    useEffect(() => {
      if(no_order == 0) {
        axios.get('http://localhost:5000/api/genorder')
        .then(res => {
          updateFormData({
            ...formData,
      
            // Trimming any whitespace
            no_order: res.data
          });

          setNomor(res.data);
        })
      }
    }, [formData, no_order]);

    return (
        <div className="col-md-12" style={{ marginTop: "1em" }}> 
          <div className="container">
          <h5 style={{ color: "#580e0dff" }}> <i className="bi bi-cart mt-2 ml-3 mr-2"></i> Keranjang </h5>
            <div className="row">
              <div className="col-lg-12 mb-4">
                <div className="d-flex shadow flex-column mt-2 p-3" style={{ borderRadius: "10px", backgroundColor: "#fff" }}>
                  <div className="box box-info">
                    <div className="box-header with-border">
                      <h3 className="box-title ml-1 text-info">List Keranjang</h3>
                    </div>
                    <div className="box-body">
                      <div className="table-responsive">
                        <form className="form-container" method="POST" onSubmit={createOrder}>
                          <div className="form-group">
                            <label>Nama</label>
                            <input name="nama" className="form-control" placeholder="Nama Customer" onChange={handleChange} required />
                          </div>
                          <div className="form-group">
                            <label>Alamat</label>
                            <input name="alamat" className="form-control" placeholder="Alamat" onChange={handleChange} required />
                          </div>
                          <div className="form-group">
                            <label>No HP</label>
                            <input name="nohp" className="form-control" placeholder="Nomor Handphone" onChange={handleChange} maxLength={12} required />
                          </div>
                          <table className="table table-striped no-margin">
                            <thead>
                              <tr style={{ color: "#003048fa" }}>
                                <th>Jenis Makanan</th>
                                <th>Nama Makanan</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cart.length > 0 && cart.map((item, index) => {
                                  grandtotal += item.harga * item.qty;
                                  return (
                                    <tr key={index}>
                                      <td>
                                        {item.jenis}
                                        <input type="hidden" name="jenis[]" value={item.jenis} />
                                      </td>
                                      <td>
                                        {item.nama}
                                        <input type="hidden" name="nama[]" value={item.nama} />
                                      </td>
                                      <td>
                                        {item.qty}
                                        <input type="hidden" name="qty[]" value={item.qty} />
                                      </td>
                                      <td>
                                        {item.total}
                                        <input type="hidden" name="total[]" value={item.total} />
                                      </td>
                                      <td>
                                        <button type="button" className="btn btn-danger" style={{ marginTop: 0 }} onClick={() => buangOrder(index)}><i className="bi bi-trash"></i></button>
                                      </td>
                                    </tr>
                                  );
                              })}
                            </tbody>
                          </table>
                          <div className="form-group">
                              <label>Total</label>
                              <input type="text" className="form-control" placeholder="Total" readOnly value={grandtotal}/>
                          </div>
                          <div className="btn-box">
                              <button type='submit'>
                                  Order Now
                              </button>
                          </div>
                        </form>
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

export default withCookies(TableCRUD);