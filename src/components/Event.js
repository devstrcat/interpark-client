import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/event.css";
import { useEffect, useRef, useState } from "react";

function Event() {
  // js 코드 자리
  const swiperRef = useRef();

  const getJsonData = () => {
    fetch("event.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("result : ", result);
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["event_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let [htmlTag, setHtmlTag] = useState([]);

  useEffect(() => {
    getJsonData();
    return () => {};
  }, []);

  return (
    <section class="event common">
      <div class="event-inner c-inner">
        <div class="event-header c-header">
          <h2 class="event-title c-title">이벤트</h2>
          <span class="event-txt c-txt">
            인터파크에서 할인혜택을 꼭 챙기세요.
          </span>
        </div>
        <div class="event-main c-main">
          <div class="swiper event-slide">
            <div class="swiper-wrapper">
              <Swiper
                slidesPerView={4}
                slidesPerGroup={4}
                spaceBetween={24}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                loop={true}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                navigation={{
                  nextEl: ".event-slide-next",
                  prevEl: ".event-slide-prev",
                }}
                className="event-slide"
              >
                {htmlTag.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div class="event-slide-item">
                        <a href={item.url}>
                          <img src={item.file} alt={item.url} />
                        </a>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <button class="event-slide-prev c-slide-prev"></button>
          <button class="event-slide-next c-slide-next"></button>
        </div>
      </div>
    </section>
  );
}
export default Event;
