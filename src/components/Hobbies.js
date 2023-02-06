

import React from 'react'
import '../styles/Hobbies.scss'
import { Carousel } from 'react-bootstrap';
import kepem1 from '../assets/kepem1.jpeg'
import kepem2 from '../assets/kepem2.jpg'
import kepem3 from '../assets/kepem3.jpg'
import gitar from '../assets/guitars.jpg'
import piano from '../assets/instrument1.jpg'
import sheet from '../assets/instrument2.jpg'

function Hobbies() {
    return (
        <div className="hobbi-container">
            <hr className="hobbiLine" />
            <h1>Hobbik amiket szívesen csinálok</h1>
            <div className="hobbi-box">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 hobbiImg"
                            src={kepem1}
                            alt="kep1"
                        />
                        <Carousel.Caption>
                            <h3>Fotózás</h3>
                            <p>A fényképek készítése már jó pár éve érdekel</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 hobbiImg"
                            src={kepem2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Nyaraláskor, kiránduláskor</h3>
                            <p>Legközelebb a szívemhez a természet/város fotózás áll</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 hobbiImg"
                            src={kepem3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Szép pillanatok megörökítése</h3>
                    
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>



            <div className="hobbi-box">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 hobbiImg"
                            src={gitar}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Zene</h3>
                            <p>8 éve gitározom, leginkább fingerstyle stílusban akusztikus gitárral, de van elektromos gitárom és ukulelém</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 hobbiImg"
                            src={piano}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Zongora</h3>
                            <p>Bár nem régóta, de zongorán játszani is elkezdtem</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 hobbiImg"
                            src={sheet}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>DAW használata 'Digital audio workstation'</h3>
                            <p>
                                Zenei alapok és kész zene készítésére alkalmas programok
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Hobbies;