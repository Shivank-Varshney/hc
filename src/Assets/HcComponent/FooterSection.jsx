import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import logo from "../Image/logo.png"
import icon1 from "../Image/icons/icon-1.png";
import icon2 from "../Image/icons/icon-2.png";
import icon3 from "../Image/icons/icon-3.png";
import icon4 from "../Image/icons/icon-4.png";
import icon5 from "../Image/icons/icon-5.png";
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const FooterSection = () =>{
    return(
        <>
            <section className="container-fluid" id="footer">
                <div className="row">
                    <div className="col-lg-3 mb-5">
                        <img src={logo} className="img-fluid my-5" alt="Hard Cipher" width="200px" />
                        <p><RoomIcon /> Lorem ipsum dolor sit amet consectetur - India</p>
                        <p><PhoneIcon /> (123) 111-222-333-44</p>
                        <p><MailOutlineIcon /> info@yourdomain.com</p>
                    </div>
                    <div className="col-6 col-lg-2 col-sm-3  my-5">
                        <h4>Product</h4>
                        <ul>
                            <li><NavHashLink className="nav" to="/">Lorem Ipsum</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/">Lorem Ipsum</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/">Lorem Ipsum</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/">Lorem Ipsum</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/">Lorem Ipsum</NavHashLink></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 col-sm-3  my-5">
                    <h4>Quick Links</h4>
                        <ul>
                            <li><NavHashLink className="nav" to="/#">Home</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/ #aboutus">About Us</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/ #services">Services</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/ #work">Our Work</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/contact-us#">Contact Us</NavHashLink></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 col-sm-3 my-5">
                    <h4>Resources</h4>
                        <ul>
                            <li><NavHashLink className="nav" to="/">Blog</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/">F.A.Q</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/">Testimonial</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/">Site map</NavHashLink></li>
                            <li><NavHashLink className="nav" to="/">Active</NavHashLink></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3 col-sm-3  my-5">
                        <h4 className="text-center">Follow us</h4>
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group btn-group-lg" role="group" aria-label="First group">
                                <button type="button" className="btn-icon">
                                    <NavHashLink to="/">
                                        <img src={icon1} alt="twitter-icon" className="img-fluid" />
                                    </NavHashLink>
                                </button>
                                <button type="button" className="btn-icon">
                                    <NavHashLink to="/">
                                        <img src={icon2} alt="whatsapp-icon" className="img-fluid" />
                                    </NavHashLink>
                                </button>
                                <button type="button" className="btn-icon">
                                    <NavHashLink to="/">
                                        <img src={icon3} alt="linked-icon" className="img-fluid" />
                                    </NavHashLink>
                                </button>
                                <button type="button" className="btn-icon">
                                    <NavHashLink to="/">
                                        <img src={icon4} alt="facebook-icon" className="img-fluid" />
                                    </NavHashLink>
                                </button>
                                <button type="button" className="btn-icon">
                                    <NavHashLink to="/">
                                        <img src={icon5} alt="instagram" className="img-fluid" />
                                    </NavHashLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div><hr />
                <div className="row copyright">
                    <div className="col-md-6">
                        <p>© <NavHashLink to="/">example</NavHashLink> | Web Design India 2020. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <NavHashLink to="/" className="mx-3 nav">Terms of service </NavHashLink>|
                        <NavHashLink to="/" className="mx-3 nav"> Privacy Policy </NavHashLink>| 
                        <NavHashLink to="/" className="mx-3 nav"> Help</NavHashLink>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterSection;