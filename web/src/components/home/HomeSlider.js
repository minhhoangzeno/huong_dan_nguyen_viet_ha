import React from 'react';
import Slider from 'react-slick/lib/slider';
import img from '../../img/Delight/redv.jpg';

export default function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider {...settings} >
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </Slider>
        </>
    )
}