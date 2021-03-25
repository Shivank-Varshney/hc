import React from "react";
import Sectionwave from "./Svg";
import Img1 from "../Image/s1.png";
import Img2 from "../Image/s2.png";
import Img3 from "../Image/s3.png";

const SupportPage = () =>{
    return(
        <>
           <section className="container-fluid" id="support-page">
                <div className="row">
                    <div className="col-md-7 my-5">
                        <div className="support">
                            <div className="row">
                                <div className="col-4">
                                    <img src={Img1} alt="get support" className="img-fluid" />
                                </div>
                                <div className="offset-1 col-7">
                                    <h2>Get Support</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tenetur itaque, modi nemo odio nostrum?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 offset-md-5 my-5">
                        <div className="support">
                            <div className="row">
                                <div className="col-7">
                                    <h2>Our Community</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tenetur itaque, modi nemo odio nostrum?</p>
                                </div>
                                <div className="col-4 offset-1">
                                    <img src={Img2} alt="get support" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 my-5">
                        <div className="support">
                            <div className="row">
                                <div className="col-4">
                                    <img src={Img3} alt="get support" className="img-fluid" />
                                </div>
                                <div className="offset-1 col-7">
                                    <h2>F.A.Q</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tenetur itaque, modi nemo odio nostrum?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Sectionwave />
        </>
    );
}

export default SupportPage;