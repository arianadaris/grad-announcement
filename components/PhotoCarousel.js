import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default class PhotoCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel-wrapper" showStatus={false} autoPlay interval={3000} infiniteLoop showThumbs={false} useKeyboardArrows dynamicHeight={false} >
                <div>
                    <Image src={require('../public/images/Ari_3.jpg')} className="lg:mt-[-15vh] xs:mt-[-17.5vh] md:mt-[-29vh]" />
                </div>
                <div>
                    <Image src={require('../public/images/Ari_1.jpg')} className="lg:mt-[-20vh] xs:mt-[-20vh] md:mt-[-40vh]" />
                </div>
                <div>
                    <Image src={require('../public/images/Ari_2.jpg')} className="lg:mt-[-15vh] xs:mt-[-25vh] md:mt-[-26vh]" />
                </div>
                <div>
                    <Image src={require('../public/images/Ari_4.jpg')} className="lg:mt-[-20vh] xs:mt-[-15vh] md:mt-[-28vh]" />
                </div>
                <div>
                    <Image src={require('../public/images/Ari_5.jpg')} className="lg:mt-[-15vh] xs:mt-[-15vh] md:mt-[-30vh]" />
                </div>
                <div>
                    <Image src={require('../public/images/Ari_6.jpg')} className="lg:mt-[-15vh] xs:mt-[-20vh] md:mt-[-26vh]" />
                </div>
                <div>
                    <Image src={require('../public/images/Ari_7.jpg')} className="lg:mt-[-10vh] xs:mt-[-10vh] md:mt-[-20vh]" />
                </div>
            </Carousel>
        )
    }
}