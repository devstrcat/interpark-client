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
    fetch("book.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("result : ", result);
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["book_" + (i + 1)];
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
    <section class="book common">
      <div class="book-inner c-inner">
        <div class="book-header c-header">
          <h2 class="book-title c-title">오늘의 도서</h2>
          <span class="book-txt c-txt">
            지금 읽기 딱 좋은 책, 놓치지 마세요!
          </span>
        </div>
        <div class="book-main c-main">
          <div class="book-cate c-cate">
            <ul class="book-list c-list">
              <li>
                <button class="cate-bt cate-bt-active">MD`s Pick</button>
              </li>
              <li>
                <button class="cate-bt">배스트셀러</button>
              </li>
              <li>
                <button class="cate-bt">신간추천</button>
              </li>
              <li>
                <button class="cate-bt">특가할인</button>
              </li>
            </ul>
          </div>
          <div class="book-slide-wrap">
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
                    <div class="book-slide-item">
                      <a href={item.url} class="book-link">
                        <div class="book-img">
                          <img src={item.file} alt={item.url} />
                        </div>
                        <div class="book-info">
                          <ul class="book-good-list">
                            <li>
                              <span class="book-good-info-title">
                                {item.title}
                              </span>
                            </li>
                            <li>
                              <p class="book-good-info-price">
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
          <button class="book-slide-prev c-slide-prev"></button>
          <button class="book-slide-next c-slide-next"></button>
        </div>
        <div class="book-go c-go">
          <button class="go-home">도서 홈 바로가기</button>
        </div>
      </div>
    </section>
  );
}
export default Book;
