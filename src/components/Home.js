import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonial from "./Testimonial";
import About from "./AboutUs";
import Footer from "./Footer";

function Home () {
    return (
        <>
        <Header />
        <Hero />
        <Specials />
        <Testimonial />
        <About />
        <Footer />
        </>
    )
}

export default Home;