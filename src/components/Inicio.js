<<<<<<< HEAD
import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import ModalLogin from "./ModalLogin"
=======
import React from "react";
>>>>>>> 430b8567dafdf7d57c5bdaffaa0fd07eb44cb266


const Inicio = () => {

    return (
        <div className="App">
<<<<<<< HEAD
<ModalLogin/>
            <h1 className="container">  BIENVENIDOS </h1>
            <p className="container"> Podras visitar nuestros productos </p>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src={`${process.env.PUBLIC_URL}/productos/CCAST.jpg`}
                        alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src={`${process.env.PUBLIC_URL}/productos/GPU115.jpg`}
                        alt="Second slide"
                        />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-50"
                        src={`${process.env.PUBLIC_URL}/productos/thnvanspiemader.jpg`}
                        alt="Third slide"
                        />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
=======
            <h1 className="container">  BIENVENIDOS </h1>
            <p className="container"> Podras visitar nuestros productos </p>
>>>>>>> 430b8567dafdf7d57c5bdaffaa0fd07eb44cb266
        </div>
    )

}

export default Inicio;