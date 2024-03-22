import React, { Component } from "react";
import { BsBricks } from "react-icons/bs";
import { GiFamilyHouse, GiHighGrass, GiRake } from "react-icons/gi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Head from "../components/Head";
import MobileMenu from "../components/MobileMenu";
import NavBar from "../components/NavBar";
import { BASE_URL, SERVICES, SERVICES_PATHS } from "../consts";

class Services extends Component {
  render() {
    let data = [
      {
        pageLink: SERVICES_PATHS.AERATION,
        img: "aeration-370x247.png",
        icon: GiHighGrass,
        serviceTitle: SERVICES.AERATION,
        serviceSubtitle:
          "Aeration opens up the grass in order for the grass seeds, topsoil, and fertilizer to penetrate the ground rather than have it sit on top.",
      },
      {
        pageLink: SERVICES_PATHS.DETHATCHING,
        img: "detatcher-370x247.jpg",
        icon: GiRake,
        serviceTitle: SERVICES.DETHATCHING,
        serviceSubtitle:
          "Dethatching is the first thing you need to do for your lawn to get the best results. It helps remove all the dead grass to allow water and sun to get an uninterrupted source of nutrients.",
      },
      {
        pageLink: SERVICES_PATHS.WINDOW_CLEANING,
        img: "window-cleaning-785x460.jpg",
        icon: GiFamilyHouse,
        serviceTitle: SERVICES.WINDOW_CLEANING,
        serviceSubtitle:
          "We have been cleaning windows for 10+ years and we have taken all our clients concerns and came up with a solution.",
      },
      {
        pageLink: SERVICES_PATHS.WINDOW_CLEANING,
        img: "interlock-247x247.jpeg",
        icon: BsBricks,
        serviceTitle: SERVICES.INTERLOCK_CLEANING,
        serviceSubtitle:
          "Revitalize your outdoor area with our specialized interlock cleaning service, which includes meticulous weed removal. Our expert team ensures a pristine finish, leaving your space looking clean, fresh, and inviting.",
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="service-grid-item">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <Link to={`${BASE_URL}/services/${val.pageLink}`}>
                  <img
                    src={`/assets/img/services/${val.img}`}
                    className="img-fluid object-fit-cover"
                    style={{ maxHeight: "197px" }}
                    alt={val.serviceTitle}
                  />
                </Link>
              </div>
              <div className="icon">
                <val.icon size="3em" color="white" />
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <Link to={`${BASE_URL}/services/${val.pageLink}`}>
                  {val.serviceTitle}
                </Link>
              </h3>
              <p className="subtitle">{val.serviceSubtitle}</p>
              <Link
                to={`${BASE_URL}/services/${val.pageLink}`}
                className="see-more-link"
              >
                SEE MORE
              </Link>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Head title="Services" />
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(/assets/img/services/grass-top-view.jpg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Services</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  service page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-item-wrapper">
                    <div className="row">{Datalist}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>

        {/*====================  End of service page content  ====================*/}

        {/* Brand logo */}
        {/* <BrandLogoSlider background="grey-bg" /> */}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Services;
