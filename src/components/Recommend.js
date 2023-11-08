/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/recommend.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BtSlidePrev, BtSlideNext } from "../components/ui/buttons";
import { BtCate } from "../components/ui/buttons";
import { InnerArea, SectionTag } from "./layout/layout";

function Recommend() {
  // js 코드 자리
  const swiperRef = useRef();

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const axiosJsonData = function () {
    axios
      .get("json/recommend1.json")
      .then(function (res) {
        // console.log(res);
        const result = res.data;
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["recommend_" + (i + 1)];
          arr[i] = obj;
        }
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let [htmlTag, setHtmlTag] = useState([]);

  useEffect(() => {
    axiosJsonData();
    return () => {};
  }, []);

  return (
    <SectionTag pt={30} pb={60}>
      <InnerArea h={405}>
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
                <BtCate focus={true}>쎈딜</BtCate>
              </li>
              <li>
                <BtCate>베스트</BtCate>
              </li>
              <li>
                <BtCate>블프데이</BtCate>
              </li>
              <li>
                <BtCate>디지털프라자</BtCate>
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
                      <div className="recommend-slide-item-btnmore">
                        <div className="recommend-slide-item-btnmore">
                          <a href={item.url} className="recommend-link">
                            <i></i>
                            <h2>전체보기</h2>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="recommend-slide-item">
                        <a href={item.url} className="recommend-link">
                          <div className="recommend-img">
                            <img src={item.file} alt={item.url} />
                          </div>
                          <div className="recommend-info">
                            <ul className="recommend-good-list">
                              <li>
                                <span className="recommend-good-info-price">
                                  <b>
                                    {item.discount === 0
                                      ? ""
                                      : item.discount + "%"}
                                  </b>
                                  <em>{numberWithCommas(item.price)}</em>원~
                                </span>
                              </li>
                              <li>
                                <p className="recommend-good-info-desc">
                                  {item.p}
                                </p>
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
          <BtSlidePrev className="recommend-slide-prev"></BtSlidePrev>
          <BtSlideNext className="recommend-slide-next"></BtSlideNext>
        </div>
        <div className="recommend-go c-go">
          <button className="go-home">쇼핑 홈 바로가기</button>
        </div>
      </InnerArea>
    </SectionTag>
  );
}
export default Recommend;
