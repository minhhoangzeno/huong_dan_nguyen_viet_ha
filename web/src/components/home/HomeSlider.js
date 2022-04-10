import React from 'react';
import Slider from 'react-slick/lib/slider';
import img1 from '../../assets/home/img1.jpg'
import img2 from '../../assets/home/img2.jpg'
import img3 from '../../assets/home/img3.jpg'
import img4 from '../../assets/home/img4.jpg'

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
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
            </Slider>
        </>
    )
}