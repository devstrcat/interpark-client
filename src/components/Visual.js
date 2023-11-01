import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/visual.css";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function Visual() {
  // js 코드 자리
  return (
    <section className="visual">
      <div className="visual-inner">
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          loop={true}
          speed={500}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".visual-slide-next",
            prevEl: ".visual-slide-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="visual-slide"
        >
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img
                  src={process.env.PUBLIC_URL + "/images/v1.png"}
                  alt="a.html"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img
                  src={`${process.env.PUBLIC_URL}/images/v2.jpg`}
                  alt="a.html"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="/images/v3.jpg" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="images/v4.jpg" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img
                  src={process.env.PUBLIC_URL + "/images/v5.jpg"}
                  alt="a.html"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="images/v6.png" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper visual-slide">
          <div className="swiper-wrapper"></div>
        </div>
        <button className="visual-slide-prev c-slide-prev"></button>
        <button className="visual-slide-next c-slide-next"></button>
      </div>
    </section>
  );
}
export default Visual;
