import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderCategoru() {

    let [allCatgeory, setAllCategroy] = useState([])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
    };

    async function getDataForCategorySlider() {
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
        setAllCategroy(data?.data)

    }
    useEffect(() => {
        getDataForCategorySlider()
    })
    return (
        <div className="container">
            <Slider {...settings}>
                {allCatgeory.map((cat, i) => <div key={i} className="item px-1">
                    <img src={cat.image} style={{ height: "120px" }} className='w-100 mx' />
                    <p>{cat.name}</p>
                </div>)}

            </Slider>
        </div>
    )
}
