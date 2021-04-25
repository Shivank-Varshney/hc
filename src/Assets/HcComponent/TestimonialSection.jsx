import React from "react";
import Testimonial, {Tdata} from "./Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };
    return(
        <>
            <div className="row">
                    <div className="col-lg-6 mx-auto mb-5">
                        <Slider {...settings}>
                                {
                                    Tdata.map((val,index)=>{
                                        return(
                                            <Testimonial
                                                key = {index}
                                                comment = {val.comment}
                                                name = {val.name}
                                            />
                                        );
                                    })
                                }
                        </Slider>
                    </div>
                </div>
        </>
    );
}

export default TestimonialSection;