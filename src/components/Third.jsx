import React from "react";
import "../App.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import s1 from "../images/second_c.png";
import s2 from "../images/third_c.png";
import s3 from "../images/second_c.png";
const Third = () => {
  return (
    <>
      <div className="third">
        <div className="container-fluid px-0">
          <div className="row">
            <OwlCarousel
              className="owl-theme"
              items={1}
              autoplay
              autoplaySpeed={0.3}
              dots
              loop
            >
              <div className="item">
                <img src={s1} alt="cover1" />
              </div>
              <div className="item">
                <img src={s2} alt="cover2" />
              </div>
              <div className="item">
                <img src={s3} alt="cover3" />
              </div>
              <div className="item">
                <img src={s2} alt="cover4" />
              </div>
            </OwlCarousel>

            <div className="third_cover"></div>
            <div className="third_caption">
              <h3>people who got match</h3>
              <h2>We helped them find a partner</h2>
              <h4>Online</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
