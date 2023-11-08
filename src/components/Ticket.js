/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/ticket.css";
import { useEffect, useRef, useState } from "react";

function Ticket() {
  // js 코드 자리
  const swiperRef = useRef();

  const getJsonData = () => {
    fetch("json/ticket1.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // console.log("result : ", result);
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["ticket_" + (i + 1)];
          arr[i] = obj;
        }
        // console.log(arr);
        setHtmlTag(arr);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  let [htmlTag, setHtmlTag] = useState([]);

  useEffect(() => {
    getJsonData();
    return () => {};
  }, []);

  return (
    <section className="ticket common">
      <div className="ticket-inner c-inner">
        <div className="ticket-header c-header">
          <h2 className="ticket-title c-title">티켓 랭킹</h2>
          <span className="ticket-txt c-txt">오늘 뭐볼까? 지금 HOT한 공연</span>
        </div>
        <div className="ticket-main c-main">
          <div className="ticket-cate c-cate">
            <ul className="ticket-list c-list">
              <li>
                <button className="cate-bt cate-bt-active">뮤지컬</button>
              </li>
              <li>
                <button className="cate-bt">콘서트</button>
              </li>
              <li>
                <button className="cate-bt">스포츠</button>
              </li>
              <li>
                <button className="cate-bt">전시/행사</button>
              </li>
              <li>
                <button className="cate-bt">클래식/무용</button>
              </li>
              <li>
                <button className="cate-bt">아동/가족</button>
              </li>
              <li>
                <button className="cate-bt">연극</button>
              </li>
              <li>
                <button className="cate-bt">래저/캠핑</button>
              </li>
            </ul>
          </div>
          <div className="ticket-slide-wrap">
            <Swiper
              slidesPerView={4}
              slidesPerGroup={4}
              spaceBetween={28}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".ticket-slide-next",
                prevEl: ".ticket-slide-prev",
              }}
              className="ticket-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {index === htmlTag.length - 1 ? (
                      <div className="ticket-slide-item-btnmore">
                        <a href={item.url} className="ticket-link">
                          <i></i>
                          <p>전체보기</p>
                        </a>
                      </div>
                    ) : (
                      <div className="ticket-slide-item">
                        <a href={item.url} className="ticket-link">
                          <div className="ticket-img">
                            <img src={item.file} alt={item.url} />
                          </div>
                          <div className="ticket-info">
                            <div className="ticket-count">{item.count}</div>
                            <ul className="ticket-good-list">
                              <li className="ticket-good-info-title">
                                <span>{item.title}</span>
                              </li>
                              <li className="ticket-good-info-place">
                                <span>{item.place}</span>
                              </li>
                              <li className="ticket-good-info-duration">
                                <span>{item.duration}</span>
                              </li>
                              <li className="ticket-good-info-tag">
                                <span className={item.class}>{item.txt}</span>
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
          <button className="ticket-slide-prev c-slide-prev"></button>
          <button className="ticket-slide-next c-slide-next"></button>
        </div>
        <div className="ticket-go c-go">
          <button className="go-home">티켓 홈 바로가기</button>
        </div>
      </div>
    </section>
  );
}
export default Ticket;
