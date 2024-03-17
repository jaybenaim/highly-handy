import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, SERVICES_PATHS } from "../consts";
import MobileMenu from "./MobileMenu";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);

    this.mobileMenuElement = React.createRef();
  }

  activeMobileMenu = () => {
    this.mobileMenuElement.current.toggleMobileMenu();
  };

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    return (
      <div>
        {/*====================  header area ====================*/}
        <div
          className={`header-area header-sticky header-sticky--default ${
            this.state.scroll > this.state.top ? "is-sticky" : ""
          }`}
        >
          <div className="header-area__desktop header-area__desktop--default">
            {/*=======  header top bar  =======*/}
            <div className="header-top-bar">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    {/* top bar left */}
                    <div className="top-bar-left-wrapper">
                      <div className="social-links social-links--white-topbar d-inline-block">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/highlyhandyLawnCare">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/highlyhandy_lawn_care_/">
                              <i className="zmdi zmdi-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    {/* top bar right */}
                    <div className="top-bar-right-wrapper">
                      <a
                        href={`${BASE_URL}/contact-us`}
                        className="ht-btn ht-btn--default d-inline-block"
                      >
                        GET A QUOTE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header top bar  =======*/}
            {/*=======  header info area  =======*/}
            <div className="header-info-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="header-info-wrapper align-items-center">
                      {/* logo */}
                      <div className="logo">
                        <Link to={`${BASE_URL}/`}>
                          <img
                            src="/assets/img/logo/logo.png"
                            className="img-fluid w-50"
                            alt="Logo"
                          />
                        </Link>
                      </div>
                      {/* header contact info */}
                      <div className="header-contact-info">
                        <div className="header-info-single-item">
                          <div className="header-info-single-item__icon">
                            <a href="tel:6472295873">
                              <i className="zmdi zmdi-smartphone-android" />
                            </a>
                          </div>
                          <div className="header-info-single-item__content">
                            <h6 className="header-info-single-item__title">
                              Phone
                            </h6>
                            <p className="header-info-single-item__subtitle">
                              <a href="tel:6472295873">647 229 5873</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* mobile menu */}
                      <div
                        className="mobile-navigation-icon"
                        id="mobile-menu-trigger"
                        onClick={this.activeMobileMenu}
                      >
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header info area =======*/}
            {/*=======  header navigation area  =======*/}
            <div className="header-navigation-area default-bg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* header navigation */}
                    <div className="header-navigation header-navigation--header-default position-relative">
                      <div className="header-navigation__nav position-static">
                        <nav>
                          <ul>
                            <li>
                              <Link to={`${BASE_URL}/`}> HOME </Link>
                            </li>
                            <li className="has-children has-children--multilevel-submenu">
                              <Link to={`${BASE_URL}/services`}>SERVICES</Link>
                              <ul className="submenu">
                                <li>
                                  <Link to={`${BASE_URL}/services`}>
                                    Services
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${BASE_URL}/services/${SERVICES_PATHS.AERATION}`}
                                  >
                                    Aeration
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${BASE_URL}/services/${SERVICES_PATHS.DETHATCHING}`}
                                  >
                                    Dethatching
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${BASE_URL}/services/${SERVICES_PATHS.WINDOW_CLEANING}`}
                                  >
                                    Window Cleaning
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            {/* <li>
                              <Link to={`${BASE_URL}/about-us`}>ABOUT</Link>
                            </li> */}
                            {/* region */}
                            {/* <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`${BASE_URL}/projects`}
                                >
                                  PROJECT
                                </Link>
                                <ul className="submenu">
                                  <li>
                                    <Link
                                      to={`${BASE_URL}/projects`}
                                    >
                                      Project Page
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={`${BASE_URL}/project-details`}
                                    >
                                      Project Details
                                    </Link>
                                  </li>
                                </ul>
                              </li> */}
                            {/* <li className="has-children has-children--multilevel-submenu">
                                <Link
                                  to={`${BASE_URL}/blog-left-sidebar`}
                                >
                                  BLOG
                                </Link>
                                <ul className="submenu">
                                  <li>
                                    <Link
                                      to={`${BASE_URL}/blog-left-sidebar`}
                                    >
                                      Blog Left Sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={`${BASE_URL}/blog-right-sidebar`}
                                    >
                                      Blog Right Sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={`${BASE_URL}/blog-details-left-sidebar`}
                                    >
                                      Blog Details Left Sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to={`${BASE_URL}/blog-details-right-sidebar`}
                                    >
                                      Blog Details Right Sidebar
                                    </Link>
                                  </li>
                                </ul>
                              </li> */}
                            {/* endregion */}
                            <li>
                              <Link to={`${BASE_URL}/contact-us`}>CONTACT</Link>{" "}
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header navigation area =======*/}
          </div>
        </div>
        {/*====================  End of header area  ====================*/}

        {/* Mobile Menu */}
        <MobileMenu ref={this.mobileMenuElement} />
      </div>
    );
  }
}

export default NavBar;
