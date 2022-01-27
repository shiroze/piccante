import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
    return (
        <div className="slider-section mt-4 mb-4">
            <div className="container">
                <div className="slider-inner">
                    <div className="row">
                        <div className="col-md-12">
                        <Carousel fade nextLabel={<span aria-hidden="true"/>} prevLabel={<span aria-hidden="true"/>}>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="img/testing banner 1.png"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="img/testing banner 2.png"
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="img/testing banner 3.png"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            </Carousel>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Slider