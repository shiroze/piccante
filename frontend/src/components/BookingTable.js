import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const BookingTable = () => {
    const history = useNavigate();
    const [formData, updateFormData] = React.useState();
    const handleChange = (e) => {
      updateFormData({
        ...formData,

        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };

    const bookTable = async (e) => {
      e.preventDefault();

      try {
          await axios.post('http://localhost:5000/api/booking', {
          'nama': formData.nama,
          'nohp': formData.nohp,
          'email': formData.email,
          'orang': formData.orang,
          'tanggal': formData.tanggal
      });

      history('/');
      } catch (error) {
          console.log(error);
          // swal("Error", error, "error");
      }
    }

    return (
        <section className="book-section layout-padding">
            <div className="container mt-4">
                <div className="heading-container">
                    <h2>
                        Book Table
                    </h2>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="form-container">
                            <form method='POST' onSubmit={bookTable}>
                                <div>
                                    <input type="text" className="form-control" placeholder="Nama" name="nama" onChange={handleChange} />
                                </div>
                                <div>
                                    <input type="text" className="form-control" placeholder="Nomor Hp" maxLength={12} name="nohp" onChange={handleChange} />
                                </div>
                                <div>
                                    <input type="email" className="form-control" placeholder="Email" name="email" onChange={handleChange} />
                                </div>
                                <div>
                                    <select className="form-control" name="orang" defaultValue={-1} onChange={handleChange}>
                                      <option value="-1" disabled>Jumlah orang?</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="date" className="form-control" name="tanggal" onChange={handleChange} />
                                </div>
                                <div className="btn-box">
                                    <button>
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={"img/booking.png"} className="img-booking" alt="booking" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookingTable