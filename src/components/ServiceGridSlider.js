import React, { Component } from "react";
import { GiFamilyHouse, GiHighGrass, GiRake } from "react-icons/gi";
import { BASE_URL, SERVICES_PATHS } from "../consts";
import SwiperSlider, { SwiperSlide } from "./swiper";

class ServiceGridSlider extends Component {
  render() {
    const params = {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      // Responsive breakpoints
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    };
    let data = [
      {
        img: "aeration-370x247.png",
        icon: GiHighGrass,
        serviceTitle: "Aeration",
        serviceExcerpt:
          "Aeration opens up the grass in order for the grass seeds, topsoil, and fertilizer to penetrate the ground rather than have it sit on top.",
        serviceUrl: SERVICES_PATHS.AERATION,
      },
      {
        img: "detatcher-370x247.jpg",
        icon: GiRake,
        serviceTitle: "Dethatching",
        serviceExcerpt:
          "Dethatching is the first thing you need to do for your lawn to get the best results. It helps remove all the dead grass to allow water and sun to get an uninterrupted source of nutrients.",
        serviceUrl: SERVICES_PATHS.DETHATCHING,
      },
      {
        img: "service1.jpg",
        icon: GiFamilyHouse,
        serviceTitle: "Window Cleaning",
        serviceExcerpt:
          "We have been cleaning windows for 10+ years and we have taken all our clients concerns and came up with a solution.",
        serviceUrl: SERVICES_PATHS.WINDOW_CLEANING,
      },
    ];

    let DataList = data.map((val, i) => {
      return (
        <SwiperSlide key={i}>
          <div className="swiper-slide">
            <div className="service-grid-item">
              <div className="service-grid-item__image">
                <div className="service-grid-item__image-wrapper">
                  <a href={`${BASE_URL}/services/${val.serviceUrl}`}>
                    <img
                      src={`/assets/img/services/${val.img}`}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="icon">
                  <val.icon size="3em" color="white" />
                </div>
              </div>
              <div className="service-grid-item__content">
                <h3 className="title">
                  <a href={`${BASE_URL}/services/${val.serviceUrl}`}>
                    {val.serviceTitle}
                  </a>
                </h3>
                <p className="subtitle">{val.serviceExcerpt}</p>
                <a
                  href={`${BASE_URL}/services/${val.serviceUrl}`}
                  className="see-more-link"
                >
                  SEE MORE
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
    return (
      <div>
        {/*====================  service grid slider area ====================*/}
        <div className="service-grid-slider-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Our Services <span className="title-icon" />
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="service-slider">
                  <SwiperSlider options={params}>{DataList}</SwiperSlider>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service grid slider area  ====================*/}
      </div>
    );
  }
}

export default ServiceGridSlider;
