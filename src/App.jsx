import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import NavbarSection from "./Assets/HcComponent/NavbarSection";
import HomePage from "./Assets/HcComponent/HomePage";
import AboutPage from "./Assets/HcComponent/AboutPage";
import ServicePage from "./Assets/HcComponent/ServicePage";
import PortfolioPage from "./Assets/HcComponent/PortfolioPage";
import ContactPage from "./Assets/HcComponent/ContactPage";
import SupportPage from "./Assets/HcComponent/SupportPage";
import Template1 from "./Assets/HcComponent/Template1";
import Template2 from "./Assets/HcComponent/Template2";
import Template3 from "./Assets/HcComponent/Template3";
import PolicyPage from "./Assets/HcComponent/PolicyPage";
import BlogPage from "./Assets/HcComponent/BlogPage";
import FooterSection from "./Assets/HcComponent/FooterSection";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavbarSection />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about-us" component={AboutPage} />
        <Route exact path="/services" component={ServicePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact-us" component={ContactPage} />
        <Route exact path="/support" component={SupportPage} />
        <Route exact path="/privacy-policy" component={PolicyPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/template1" component={Template1} />
        <Route exact path="/template2" component={Template2} />
        <Route exact path="/template3" component={Template3} />
        <Redirect to="/" />
      </Switch>
      <FooterSection />
    </>
  );
}

export default App;
