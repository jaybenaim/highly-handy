import React, { Component } from "react";
import SwiperSlider, { SwiperSlide } from "../../components/swiper";

class ServiceGallery extends Component {
  render() {
    const { imgs } = this.props;

    /* service image gallery slider params*/

    const params = {
      slidesPerView: 1,
      loop: true,
      navigation: true,
    };

    /* service image gallery data */

    let imageGalleryData = imgs;
    // [
    //   { img: "aeration-785x460.png" },
    //   //   { img: "service-details-2.jpg" },
    //   //   { img: "service-details-3.jpg" },
    //   //   { img: "service-details-4.jpg" },
    //   //   { img: "service-details-5.jpg" },
    //   //   { img: "service-details-6.jpg" },
    // ];

    /* service image gallery component */

    let ImageGalleryDataList = imageGalleryData.map((val, i) => {
      return (
        <SwiperSlide className="service-gallery__single-slide" key={i}>
          <div className="item">
            <img
              src={`/assets/img/services/${val.img}`}
              className="img-fluid"
              alt={val.alt}
            />
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div>
        <div className="service-gallery">
          <SwiperSlider options={params}>{ImageGalleryDataList}</SwiperSlider>
        </div>
      </div>
    );
  }
}

export default ServiceGallery;
