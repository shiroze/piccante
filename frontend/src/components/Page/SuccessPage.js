import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Order from '../Order';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import swal from 'sweetalert';

const SuccessPage = () => {
    const history = useNavigate();
    
    useEffect(() => {
      swal("Sukses", "Orderan berhasil terkirim", "success");
    });

    return (
        <>
            <Navbar />
            <div className='main-body'>           
              <div className="col-md-12" style={{ marginTop: "1em", marginBottom: "1em", minHeight: "50vh" }}> 
                <div className="container">
                  <div className="d-flex align-items-center justify-content-center shadow flex-column mt-2 mb-2 p-3" style={{ borderRadius: "10px", backgroundColor: "#fff", minHeight: "50vh" }}>
                    <div className="box box-info">
                      <div className="box-header with-border">
                        <h3 className="box-title ml-1 text-info">Terima kasih sudah memesan</h3>
                      </div>
                      <div className="box-body d-flex justify-content-center">
                        <button type='button' className='btn btn-info' onClick={() => { history('/daftarMenu') }}>
                            Order Again
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />   
            </div>
        </>

    );
}

export default withCookies(SuccessPage);