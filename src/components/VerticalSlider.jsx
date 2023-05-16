import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Slider.css";
import test1 from "../images/test1.png";
import test2 from "../images/test2.png";
import test3 from "../images/test3.png";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const VerticalSlider = () => {
  return (
    <>
      <div className="swipe">
        <Swiper
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          direction="vertical"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper swiper-container"
          breakpoints={{
            292: {
              direction: "horizontal",
              slidesPerView: 1,
            },
            768: {
              direction: "horizontal",
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              direction: "vertical",
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="slidercard">
              <img src={test1} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Shrawan Parsai</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slidercard">
              <img src={test2} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Shrawan Parsai</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slidercard">
              <img src={test3} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Shrawan Parsai</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slidercard">
              <img src={test2} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Shrawan Parsai</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slidercard">
              <img src={test3} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Shrawan Parsai</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slidercard">
              <img src={test2} alt="" />
              <div className="slidecard_caption">
                <div className="slider_caption_title">
                  <p>Shrawan Parsai</p>
                  <div className="">
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                    <span className="bi bi-star-fill checked"></span>
                  </div>
                </div>
                <p>
                  <em>
                    <q>
                      This is the amazing website to find a right partner in
                      meantime
                    </q>
                    .
                  </em>{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default VerticalSlider;
