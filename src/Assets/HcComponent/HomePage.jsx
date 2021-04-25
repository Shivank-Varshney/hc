import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import Clients, {Cdata} from "./Clients";
import TestimonialSection from "./TestimonialSection";
import {Carouselcard, Cardata} from "./PortfolioPage";
import ServiceSection from "./ServiceSection";
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import GetAppIcon from '@material-ui/icons/GetApp';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Homebanner from "../Image/hcheaderillustration.svg";
import About from "../Image/hcaboutillustration.svg";
import Work1 from "../Image/hcworkillustration.svg";
import Work2 from "../Image/hcworkillustration.png";
import backillustration from "../Image/backillustration.svg";
import Card1 from "../Image/s1.png";
import Card2 from "../Image/s2.png";
import Card3 from "../Image/s3.png";
import Sectionwave from "./Svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomePage = () =>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        className: "slider",
        responsive: [
            {
              breakpoint: 1024,
              settings: { slidesToShow: 3}
            },
            {
              breakpoint: 600,
              settings: { slidesToShow: 2}
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 1}
            }
          ]
    };

    return(
        <>
            <img src={backillustration} alt="backillustration" className="img-fluid backillustration" />
            {/* header section start */}
            <section className="container-fluid" id="header">
                <div className="row">
                    <div className="col-lg-6 my-auto">  
                        <h1 className="header-heading">Where Your Imagination meets our Creativity</h1>
                        <p className="header-text py-4">As an <strong>IT service provider</strong> we believe in the power of online presence of a brand. We have a set of employees who are best in their respective fields and work with utmost dedication. We make sure that your experience with us is good enough to bring you back to us for your future projects.</p>
                        {/* <button className="play-btn mr-4 mt-3"><PlayArrowIcon /> Video tour</button>
                        <button className="download-btn"><GetAppIcon /> Download</button> */}
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-5">  
                       <img src={Homebanner} alt="it service provider" className="img-fluid" />
                    </div>
                </div>
            </section>
            <Sectionwave />
            {/* header section end */}


            {/* service section start */}
            <section className="container-fluid section-gap" id="services">
                <div className="row">
                    <div className="col-md-7 mx-auto text-center mb-5">
                        <h2>services</h2>
                        <p>We are a bunch of creative and imaginative people who work according to your requirement and aims at delivering the best we can. We provide authentic work that focuses on converting your customers into clients. We are a team of experienced workers who are known to give 100% results.</p>
                    </div>
                </div>
                  
               <ServiceSection />
            </section>
            {/* service section end */}


            {/* about section start */}
            <section className="container-fluid section-gap" id="aboutus">
                <div className="row">
                    <div className="col-md-4 mx-auto mb-md-0 mb-5">
                        <img src={About} alt="about banner" className="img-fluid" />
                    </div>
                    <div className="col-md-6 offset-md-2 my-auto">
                        <h2>
                            about hardCipher
                        </h2>
                        <p>We at hardCipher, are known to be one of the topmost, inventive and above all customer cordial advanced specialist organizations in the market. we work for the fulﬁllment of our customers need and providing high grade quality. We invest heavily in our work portfolio of profoundly satisﬁed customers, hence consistently thriving advancement........</p>
                        <div className=" d-flex justify-content-end">
                            <NavHashLink to="/about-us#" className="read-more">Read more</NavHashLink>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section end */}


             {/* work section start */}
             <section className="container-fluid section-gap" id="work">
                <div className="row">
                    <div className="col pb-sm-5">
                        <h2>How we work</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 offset-3 d-sm-block d-none">
                        <img src={Work1} alt="how we work" className="img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col d-sm-none">
                        <img src={Work2} alt="how we work" className="img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col my-5">
                        <h2>Output</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Slider {...settings}>
                                {
                                    Cardata.map((val,index)=>{
                                        return(
                                            <Carouselcard
                                                key = {index}
                                                imgsrc = {val.imgsrc}
                                            />
                                        );
                                    })
                                }
                        </Slider>
                    </div>
                </div>
            </section>
            {/* work section end */}


             {/* subscribe section start */}
             <section className="container-fluid section-gap" id="subscribe">
                <div className="row pt-5">
                    <div className="col-md-12">
                        <h2>Subscribe to our newsletter</h2>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-8 mx-auto">
                        <fieldset>
                            <form name="Subscribe" action="#">
                                <input type="text" className="form-control" placeholder="Enter your email address" />
                                <button type="button" className="btn-subscribe">Subscribe <ArrowRightAltIcon /></button>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </section>
            {/* subscribe section end */}


             {/* Testimonials section start */}
             <section className="container-fluid" id="testimonials">
                <div className="row">
                    <div className="col-md-7 mx-auto text-center mb-5">
                        <h2>user testimonial</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mx-auto mb-5">
                        <TestimonialSection />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 my-5">
                        <div className="clients-list mb-5">
                        <Slider {...settings}>
                                {
                                    Cdata.map((val,index)=>{
                                        return(
                                            <Clients
                                                key = {index}
                                                imgsrc = {val.imgsrc}
                                            />
                                        );
                                    })
                                }
                        </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <Sectionwave />
            {/* Testimonials section end */}



            {/* Support section start */}
            <section className="container-fluid" id="card">
                <div className="row p-md-5 py-5 mt-5">
                    <Card 
                        imgsrc = {Card1}
                        heading = "Get Support"
                        text = "Let us know your doubts and we will provide our support in every manner. Call us or mail us your queries and we will reach out to you as soon as possible. We at HardCipher believe in providing full support to our customers."
                        linkname = "Go to support"
                    />
                    <Card 
                        imgsrc = {Card2}
                        heading = "Our community"
                        text = "We are a dedicated team of developers who puts in their heart and soul in providing 100% satisfaction to our clients. We believe in taking our clients onboard as we work through so they get what they want and are pleased to see the results."
                        linkname = "Go to community"
                    />
                    <Card 
                        imgsrc = {Card3}
                        heading = "F.A.Q"
                        text = "The questions you have in your mind related to our company and the services we provide have all been answered here for your better understanding."
                        linkname = "Go to F.A.Q"
                    />
                </div>
            </section>
            {/* Support section end */}
        </>
    );
}

const Card = (props) =>{
    return(
        <>
            <div className="col-lg-4">
                <div className="card my-lg-0 my-4">
                    <div className="row no-gutters">
                        <div className="col-sm-3 text-center">
                            <img src={props.imgsrc} alt="card1" className="img-fluid" />
                            </div>
                            <div className="col-sm-9">
                            <div className="card-body">
                                <h5 className="card-title">{props.heading}</h5>
                                <p className="card-text my-4">{props.text}</p>
                                <NavHashLink to="/support#" className="mt-auto">{props.linkname} <ArrowRightAltIcon /></NavHashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;