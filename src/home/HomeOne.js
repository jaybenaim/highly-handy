import React, { Component } from "react";
import Footer from "../components/Footer";
import Funfact from "../components/Funfact";
import HeroSliderOne from "../components/HeroSliderOne";
import NavBar from "../components/NavBar";
import ServiceGridSlider from "../components/ServiceGridSlider";
import ServiceTab from "../components/ServiceTab";
import TestimonialSlider from "../components/TestimonialSlider";

class HomeOne extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* Hero slider */}
        <HeroSliderOne />

        {/* Service Tab */}
        <ServiceTab />

        {/* Fun fact */}
        <Funfact />

        {/* Video CTA */}
        {/* <VideoCta /> */}

        {/* Project Slider */}
        {/* <ProjectSlider /> */}

        {/* Team job */}
        {/* <TeamJob /> */}
        {/* Blog grid */}
        {/* <BlogGrid background="grey-bg" /> */}

        {/* Service grid slider */}
        <ServiceGridSlider />

        {/* Testimonial Slider */}
        <TestimonialSlider />

        {/* Brand logo */}
        {/* <BrandLogoSlider /> */}

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default HomeOne;
