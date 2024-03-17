import React from "react";
import { Link, useParams } from "react-router-dom";

import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import NavBar from "../components/NavBar";
import { BASE_URL } from "../consts";
import ServiceGallery from "./components/ServiceGallery";
import Sidebar from "./components/Sidebar";
import { SERVICE_DATA, SERVICE_PATH_TO_SERVICE_MAP } from "./serviceData";

const ServiceDetailsLeftSidebar = () => {
  const { service } = useParams();

  const serviceData = SERVICE_DATA[SERVICE_PATH_TO_SERVICE_MAP[service]];

  return (
    <div>
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
                <h1 className="text-capitalize">{serviceData.title}</h1>
                <ul className="page-breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to={`${BASE_URL}/services`}>Services</Link>
                  </li>
                  <li>
                    <span className="text-capitalize">{serviceData.title}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of breadcrumb area  ====================*/}

      <div className="page-wrapper section-space--inner--120">
        {/*Service section start*/}
        <div className="service-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 order-1 order-lg-2">
                <div className="service-details">
                  {/* service gallery */}
                  {serviceData.imgs && (
                    <ServiceGallery imgs={serviceData.imgs} />
                  )}

                  <div className="content section-space--top--30">
                    <div className="row">
                      <div className="col-12">
                        <h2>{serviceData?.title}</h2>
                        {serviceData?.summary}
                      </div>
                      <div className="col-lg-6 col-12 section-space--top--30">
                        <h3>Benefits</h3>
                        {serviceData?.benefits}
                      </div>

                      <div className="col-lg-6 col-12 section-space--top--30">
                        <h3>Overview</h3>
                        {serviceData?.overview}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 order-2 order-lg-1">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
        {/*Service section end*/}
      </div>

      {/* Brand logo */}
      {/* <BrandLogoSlider background="grey-bg" /> */}

      {/* Footer */}
      <Footer />

      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
};

export default ServiceDetailsLeftSidebar;
