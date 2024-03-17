import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, SERVICES, SERVICES_PATHS } from "../consts";

class MobileMenu extends Component {
  state = {
    active: false,
  };

  toggleMobileMenu = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  componentDidMount() {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
  }

  render() {
    return (
      <div>
        {/*=======  offcanvas mobile menu  =======*/}
        <div
          className={`offcanvas-mobile-menu ${
            this.state.active ? "active" : ""
          } `}
          id="mobile-menu-overlay"
        >
          <a
            href="#/"
            className="offcanvas-menu-close"
            id="mobile-menu-close-trigger"
            onClick={this.toggleMobileMenu}
          >
            <i className="ion-android-close" />
          </a>
          <div className="offcanvas-wrapper">
            <div className="offcanvas-inner-content">
              <nav className="offcanvas-navigation" id="offcanvas-navigation">
                <ul>
                  <li>
                    <Link to={`${BASE_URL}/`}>HOME</Link>
                  </li>
                  {/* <li>
                    <Link to={`${BASE_URL}/about-us`}>ABOUT</Link>
                  </li> */}
                  <li className="menu-item-has-children">
                    <Link to={`${BASE_URL}/services`}>SERVICES</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={`${BASE_URL}/services`}>Services</Link>
                      </li>
                      <li>
                        <Link
                          to={`${BASE_URL}/services/${SERVICES_PATHS.AERATION}`}
                        >
                          {SERVICES.AERATION}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${BASE_URL}/services/${SERVICES_PATHS.DETHATCHING}`}
                        >
                          {SERVICES.DETHATCHING}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${BASE_URL}/services/${SERVICES_PATHS.WINDOW_CLEANING}`}
                        >
                          {SERVICES.WINDOW_CLEANING}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={`${BASE_URL}/contact-us`}>CONTACT</Link>{" "}
                  </li>
                </ul>
              </nav>
              <div className="offcanvas-widget-area">
                <div className="off-canvas-contact-widget">
                  <div className="header-contact-info">
                    <ul className="header-contact-info__list">
                      <li>
                        <i className="ion-android-phone-portrait" />{" "}
                        <a href="tel:6472295873">(647) 229 5873 </a>
                      </li>
                      <li>
                        <i className="ion-android-mail" />{" "}
                        <a href="mailto:isaac_palomi@outlook.com">
                          isaac_palomi@outlook.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Off Canvas Widget Social Start*/}
                <div className="off-canvas-widget-social">
                  <a
                    href="https://www.facebook.com/highlyhandyLawnCare"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="zmdi zmdi-facebook" />
                  </a>

                  <a
                    href="https://www.instagram.com/highlyhandyhomeservices/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="zmdi zmdi-instagram" />
                  </a>
                </div>
                {/*Off Canvas Widget Social End*/}
              </div>
            </div>
          </div>
        </div>
        {/*=======  End of offcanvas mobile menu  =======*/}
      </div>
    );
  }
}

export default MobileMenu;
