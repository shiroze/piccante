import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 footer-col">
                        <div className="footer-contact">
                            <h4>
                                Hubungi Kami
                            </h4>
                            <div className="contact-link-box">
                                <a href="#">
                                    <i className="bi bi-telephone-fill"></i>
                                    (121) 1234 5678
                                </a>
                                <a href="#">
                                    <i className="bi bi-envelope-fill mr-1 ml-2"></i>
                                    support.piccante@gmail.com
                                </a>
                                <a href="#">
                                    <i className="bi bi-whatsapp mr-1 ml-2"></i>
                                    +62822-7639-4439
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <div className="footer-detail">
                            <a href="#" className="footer-logo">
                                Piccante
                            </a>
                            <p className="mt-3">
                                Kunjungi media sosial kami di :
                            </p>
                            <div className="footer-social">
                                <a href="#">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="#">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-col">
                        <h4>
                            Buka
                        </h4>
                        <p>
                            Senin - Sabtu
                        </p>
                        <p>
                            09.00 WIB - 22.00 WIB
                        </p>
                    </div>
                </div>
                <div className="footer-info">
                    <p>
                        &copy; All Rights Reserved By Piccante
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer