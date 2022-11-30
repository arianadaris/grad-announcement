import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default class PhotoCarousel extends Component {
    render() {
        return (
            <Carousel className="carousel-wrapper" showStatus={false} autoPlay interval={3000} infiniteLoop showThumbs={false} useKeyboardArrows dynamicHeight={false} >
                <div>
                    <Image src={require('../public/images/Ari_3.jpg')} className="mt-[-15vh]" />
                </div>
                <div>
                    <Image src={require('../public/images/Ari_1.jpg')} className="mt-[-20vh]" />
                </div>
                <div>
                    <Image src={require('../public/images/Ari_4.jpg')} className="mt-[-20vh]" />
                </div>
                <div>
                    <Image src={require('../public/images/Ari_5.jpg')} className="mt-[-15vh]" />
                </div>
                <div>
                    <Image src={require('../public/images/Ari_6.jpg')} className="mt-[-15vh]" />
                </div>
            </Carousel>
        )
    }
}