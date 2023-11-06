/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/recommend.css";
import { useEffect, useRef, useState } from "react";

function Recommend() {
  // js 코드 자리
  const swiperRef = useRef();

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getJsonData = () => {
    fetch("recommend.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("result : ", result);
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["recommend_" + (i + 1)];
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
    <section className="recommend common">
      <div className="recommend-inner c-inner">
        <div className="recommend-header c-header">
          <h2 className="recommend-title c-title">쇼핑 추천</h2>
          <span className="recommend-txt c-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>
        <div className="recommend-main c-main">
          <div className="recommend-cate c-cate">
            <ul className="recommend-list c-list">
              <li>
                <button className="cate-bt cate-bt-active">쎈딜</button>
              </li>
              <li>
                <button className="cate-bt">베스트</button>
              </li>
              <li>
                <button className="cate-bt">블프데이</button>
              </li>
              <li>
                <button className="cate-bt">디지털프라자</button>
              </li>
              <li>
                <a href="#" className="cate-bt">
                  소담상회
                </a>
              </li>
            </ul>
          </div>
          <div className="recommend-slide-wrap">
            <Swiper
              slidesPerView={4}
              slidesPerGroup={4}
              spaceBetween={26}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".recommend-slide-next",
                prevEl: ".recommend-slide-prev",
              }}
              className="recommend-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {index === htmlTag.length - 1 ? (
                      <div class="recommend-slide-item-btnmore">
                        <div class="recommend-slide-item-btnmore">
                          <a href={item.url} class="recommend-link">
                            <i></i>
                            <g>전체보기</g>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div class="recommend-slide-item">
                        <a href={item.url} class="recommend-link">
                          <div class="recommend-img">
                            <img src={item.file} alt={item.url} />
                          </div>
                          <div class="recommend-info">
                            <ul class="recommend-good-list">
                              <li>
                                <span class="recommend-good-info-price">
                                  <b>
                                    {item.discount === 0
                                      ? ""
                                      : item.discount + "%"}
                                  </b>
                                  <em>{numberWithCommas(item.price)}</em>원~
                                </span>
                              </li>
                              <li>
                                <p class="recommend-good-info-desc">{item.p}</p>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <button className="recommend-slide-prev c-slide-prev"></button>
          <button className="recommend-slide-next c-slide-next"></button>
        </div>
        <div className="recommend-go c-go">
          <button className="go-home">쇼핑 홈 바로가기</button>
        </div>
      </div>
    </section>
  );
}
export default Recommend;
