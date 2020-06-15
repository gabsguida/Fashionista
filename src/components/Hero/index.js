import React from 'react';
import './Hero.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';   

const Hero = () => {
    return (
        <div className="hero__container" data-testid="hero">
            <Carousel showThumbs={false} showStatus={false} useKeyboardArrows>
                <div>
                    <img src="/img/1.jpg" alt="Home"/>
                </div>
                <div>
                    <img src="/img/3.jpg" alt="Home"/>
                </div>
            </Carousel>
        </div>
    )
}


export default Hero;