import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import NavbarSection from "./Assets/HcComponent/NavbarSection";
import HomePage from "./Assets/HcComponent/HomePage";
import AboutPage from "./Assets/HcComponent/AboutPage";
import ServicePage from "./Assets/HcComponent/ServicePage";
import PortfolioPage from "./Assets/HcComponent/PortfolioPage";
import ContactPage from "./Assets/HcComponent/ContactPage";
import SupportPage from "./Assets/HcComponent/SupportPage";
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
        <Redirect to="/" />
      </Switch>
      <FooterSection />
    </>
  );
}

export default App;
