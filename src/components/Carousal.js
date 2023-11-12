import React, { useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Carousal() {
    useEffect(() => {
        const carouselElement = document.getElementById('carouselExample');

        const carousel = new window.bootstrap.Carousel(carouselElement, {
            interval: 5000, // Set the interval between slides to 3 seconds
            pause: 'hover', // Pause on mouseover
            wrap: true, // Enable continuous looping
        });

        const intervalId = setInterval(() => {
            carousel.next();
        }, 5000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div id="carouselExample" className="carousel slide py-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: '300px' }}>
                        <img
                            src="https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70"
                            className="d-block w-100 h-100"
                            alt="A"
                        />
                    </div>
                    <div className="carousel-item" style={{ height: '300px' }}>
                        <img src="https://i.postimg.cc/NfrNmW39/91-88878-02756-20210123-161741.jpg" className="d-block w-100" alt="B" />
                    </div>
                    <div className="carousel-item" style={{ height: '300px' }}>
                        <img src="https://i.postimg.cc/HL1ZzpPX/IMG20221221165736-removebg-preview.jpg" className="d-block w-100" alt="C" />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
