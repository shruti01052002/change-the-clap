import React from "react";
import Navbar from "./Navbar";
import Carousal from "./Carousal";
import About from "./About";
import Footer from './Footer';

const LandingPage = () => {
    return (
        <>
            <Navbar/>
            <Carousal/>
            <About/>
            <Footer/>
        </>
    );
}
export default LandingPage;