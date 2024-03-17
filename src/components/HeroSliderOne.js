import React, { Component } from "react";
import { BASE_URL } from "../consts";
import SwiperSlider, { SwiperSlide } from "./swiper";

class HeroSliderOne extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      navigation: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
    };

    let data = [
      {
        bgImg: "garden.jpg",
        sliderTitle: "Welcome Home: Expert Care for Your Lawn",
        sliderSubtitle:
          "Get a Gorgeous Green Lawn That's the Envy of the Neighborhood",
        btnLink: "contact-us",
      },
      {
        bgImg: "garden2.jpg",
        sliderTitle: "Your Home, Our Priority: Tailored Home Care Services",
        sliderSubtitle:
          "Bring Life Back to Your Yard with Easy Garden Restoration",
        btnLink: "contact-us",
      },
      {
        bgImg: "front-lawn.jpg",
        sliderTitle: "Build Your Dream With Passion",
        sliderSubtitle:
          "See Clearly Through Sparkling Windows That Brighten Your Home",
        btnLink: "contact-us",
      },
    ];

    let DataList = data.map((val, i) => {
      return (
        <SwiperSlide key={i}>
          <div
            className="hero-slider__single-item"
            style={{
              backgroundImage: `url(/assets/img/services/${val.bgImg})`,
            }}
          >
            <div className="bg-black opacity-50 position-absolute w-100 h-100" />
            <div className="hero-slider__content-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-slider__content">
                      <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                      <p className="hero-slider__text">{val.sliderSubtitle}</p>
                      <a
                        className="hero-slider__btn"
                        href={`${BASE_URL}/${val.btnLink}`}
                      >
                        {" "}
                        GET STARTED
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div>
        {/*====================  hero slider area ====================*/}
        <div className="hero-alider-area">
          <SwiperSlider options={params}>{DataList}</SwiperSlider>
        </div>
        {/*====================  End of hero slider area  ====================*/}
      </div>
    );
  }
}

export default HeroSliderOne;
