import React from 'react'

const About = () => {
    return (
        <section className="about-section layout-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mb-5">
                        <div className="img-box">
                            <img src={"img/cheff-about.png"} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="detail-box">
                            <div className="heading-container">
                                <h2>
                                    We Are Feane
                                </h2>
                            </div>
                            <p>
                                Piccante adalah restoran cepat saji yang memiliki khas dari Italia. Piccante didirikan
                                pada 01 Desember 2021. Piccante
                                sendiri memiliki arti dalam bahasa Italia "Lezat" dimana akan memberikan pelayanan
                                makanan yang tentunya sesuai dengan arti
                                nama tersebut.
                            </p>
                            <a href="#">
                                Baca Selengkapnya
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About