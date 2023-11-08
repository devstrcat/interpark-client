import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/book.css";
import { useEffect, useRef, useState } from "react";

function Book() {
  // js 코드 자리
  const swiperRef = useRef();

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getJsonData = () => {
    fetch("json/book1.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // console.log("result : ", result);
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["book_" + (i + 1)];
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
    <section className="book common">
      <div className="book-inner c-inner">
        <div className="book-header c-header">
          <h2 className="book-title c-title">오늘의 도서</h2>
          <span className="book-txt c-txt">
            지금 읽기 딱 좋은 책, 놓치지 마세요!
          </span>
        </div>
        <div className="book-main c-main">
          <div className="book-cate c-cate">
            <ul className="book-list c-list">
              <li>
                <button className="cate-bt cate-bt-active">MD`s Pick</button>
              </li>
              <li>
                <button className="cate-bt">배스트셀러</button>
              </li>
              <li>
                <button className="cate-bt">신간추천</button>
              </li>
              <li>
                <button className="cate-bt">특가할인</button>
              </li>
            </ul>
          </div>
          <div className="book-slide-wrap">
            <Swiper
              slidesPerView={5}
              slidesPerGroup={5}
              spaceBetween={27}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".book-slide-next",
                prevEl: ".book-slide-prev",
              }}
              className="book-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="book-slide-item">
                      <a href={item.url} className="book-link">
                        <div className="book-img">
                          <img src={item.file} alt={item.url} />
                        </div>
                        <div className="book-info">
                          <ul className="book-good-list">
                            <li>
                              <span className="book-good-info-title">
                                {item.title}
                              </span>
                            </li>
                            <li>
                              <p className="book-good-info-price">
                                <em>{numberWithCommas(item.price)}</em>원
                              </p>
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
          <button className="book-slide-prev c-slide-prev"></button>
          <button className="book-slide-next c-slide-next"></button>
        </div>
        <div className="book-go c-go">
          <button className="go-home">도서 홈 바로가기</button>
        </div>
      </div>
    </section>
  );
}
export default Book;
