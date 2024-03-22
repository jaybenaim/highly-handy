import React, { Component } from "react";
import Footer from "../components/Footer";
import Head from "../components/Head";
import MobileMenu from "../components/MobileMenu";
import NavBar from "../components/NavBar";
class Contact extends Component {
  state = {
    name: "",
    message: "",
  };

  render() {
    return (
      <div>
        <Head title={`Contact`} />

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
                  <h1>Contact Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  content page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Contact section start*/}
          <div className="conact-section">
            <div className="container">
              <div className="row section-space--bottom--50">
                <div className="col">
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92092.78788021083!2d-79.64834157495791!3d43.83717922399449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b268883243a77%3A0xdd95317585aa054b!2sVaughan%2C%20ON!5e0!3m2!1sen!2sca!4v1710544088055!5m2!1sen!2sca"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      title="google-map"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="contact-information">
                    <h3>Contact Information</h3>
                    <ul>
                      <li className="align-items-center">
                        <span className="icon">
                          <i className="ion-android-map" />
                        </span>
                        <span className="text">Vaughan, Ontario</span>
                      </li>
                      <li className="align-items-center">
                        <span className="icon">
                          <i className="ion-ios-telephone-outline" />
                        </span>
                        <span className="text">
                          <a href="tel:6472295873">(647) 229 5873</a>
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="icon">
                          <i className="ion-ios-email-outline" />
                        </span>
                        <span className="text">
                          <a href="mailto:isaac_palomi@outlook.com">
                            isaac_palomi@outlook.com
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="contact-form">
                    <h3>Leave Your Message</h3>
                    <form id="contact-form">
                      <div className="row row-10">
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_name"
                            type="text"
                            placeholder="Your Name"
                            onChange={({ target: { value } }) =>
                              this.setState({
                                name: value,
                              })
                            }
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="con_message"
                            placeholder="Your Message"
                            defaultValue={""}
                            onChange={({ target: { value } }) =>
                              this.setState({
                                message: value,
                              })
                            }
                          />
                        </div>
                        <div className="col-12">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = `mailto:${encodeURI(
                                `isaac_palomi@outlook.com?subject=${`Inquiry - ${this.state.name}`}&body=${
                                  this.state.message
                                }`
                              )}`;
                            }}
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Contact section end*/}
        </div>
        {/*====================  End of content page content  ====================*/}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Contact;
