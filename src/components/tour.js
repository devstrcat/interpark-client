import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/tour.css";

function Tour() {
  const swiperRef = useRef();

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getJsonData = () => {
    fetch("tour.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("result : ", result);
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["tour_" + (i + 1)];
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
    <section class="tour common">
      <div class="tour-inner c-inner">
        <div class="tour-header c-header">
          <h2 class="tour-title c-title">투어 특가</h2>
          <span class="tour-txt c-txt">해외여행은 인터파크다</span>
        </div>
        <div class="tour-main c-main">
          <div class="tour-cate c-cate">
            <ul class="tour-list c-list">
              <li>
                <button class="cate-bt cate-bt-active">망설이면 품절</button>
              </li>
              <li>
                <button class="cate-bt">패키지</button>
              </li>
              <li>
                <button class="cate-bt">국내숙소</button>
              </li>
              <li>
                <button class="cate-bt">해외숙소</button>
              </li>
            </ul>
          </div>
          <div class="tour-slide-wrap">
            <Swiper
              slidesPerView={3}
              slidesPerGroup={3}
              spaceBetween={26}
              modules={[Navigation]}
              navigation={{
                nextEl: ".tour-slide-next",
                prevEl: ".tour-slide-prev",
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="tour-slide-item">
                      <a href={item.url} className="tour-link">
                        <div className="tour-img">
                          <img src={item.file} alt={item.url} />
                        </div>
                        <div className="tour-info">
                          <ul className="tour-good-list">
                            <li>
                              <span className="tour-box">{item.box}</span>
                            </li>
                            <li>
                              <p className="tour-p-blue">{item.blue}</p>
                            </li>
                            <li>
                              <p>{item.p}</p>
                            </li>
                            <li>
                              <span className="tour-good-info-price">
                                <em>{numberWithCommas(item.price)}</em>원~
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <button class="tour-slide-prev c-slide-prev"></button>
          <button class="tour-slide-next c-slide-next"></button>
        </div>
        <div class="tour-go c-go">
          <button class="go-home">투어 홈 바로가기</button>
        </div>
      </div>
    </section>
  );
}
export default Tour;
