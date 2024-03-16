import React, { Component } from "react";
import { GiFamilyHouse, GiHighGrass, GiRake } from "react-icons/gi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

class ServiceTabExample extends Component {
  render() {
    /* service tab menu */
    const serviceTabMenuData = [
      { icon: GiHighGrass, tabMenuName: "Aeration" },
      {
        icon: GiRake,
        tabMenuName: "Dethatching",
      },
      { icon: GiFamilyHouse, tabMenuName: "Window Cleaning" },
    ];

    const serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon p-2">
            <val.icon size="1.25em" />
          </span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    const serviceTabContentData = [
      {
        bgUrl: "aeration-785x460.png",
        contentTitle: "Aeration",
        contentDesc:
          "Aeration opens up the grass in order for the grass seeds, topsoil, and fertilizer to penetrate the ground rather than have it sit on top.",
        serviceLink: "aeration",
      },
      {
        bgUrl: "detatcher-785x460.jpg",
        contentTitle: "Dethatching",
        contentDesc:
          "Dethatching is the first thing you need to do for your lawn to get the best results. It helps remove all the dead grass to allow water and sun to get an uninterrupted source of nutrients.",
        serviceLink: "dethatching",
      },
      {
        bgUrl: "service-tab1.png",
        contentTitle: "Window Cleaning",
        contentDesc:
          "We have been cleaning windows for 10+ years and we have taken all our clients concerns and came up with a solution.",
        serviceLink: "window-cleaning",
      },
    ];

    const serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(assets/img/services/${val.bgUrl})`,
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              <a
                href={`${process.env.REACT_APP_PUBLIC_URL}/${val.serviceLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area section-space--inner--120">
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
                {/* service tab wrapper */}

                <div className="service-tab-wrapper">
                  <Tabs>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <TabList>
                          <div className="service-tab__link-wrapper">
                            {serviceTabMenuDatalist}
                          </div>
                        </TabList>
                      </div>

                      <div className="col-md-8">
                        {serviceTabContentDatalist}
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ServiceTabExample;
