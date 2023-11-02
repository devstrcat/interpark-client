import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/tour.css";

function Tour() {
  // js 코드 자리
  //jsx 에 작성된 html 태그를 React 에서 참조
  // 1. swiper 슬라이드 태그를 참조한다.
  const swiperRef = useRef();

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
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="a.html" class="tour-link">
                    <div class="tour-img">
                      <img src="images/tour1.jpg" alt="a.html" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <span class="tour-box">국적기직항</span>
                        </li>
                        <li>
                          <p class="tour-p-blue">
                            인솔자 동행, 선택관광 All 포함
                          </p>
                        </li>
                        <li>
                          <p>
                            [스페인 포르투갈10일]2대 야경,3대 자유시간,포루투
                            완전정복
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>3,999,000</em>원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="a.html" class="tour-link">
                    <div class="tour-img">
                      <img src="images/tour2.jpg" alt="a.html" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <span class="tour-box">베스트셀러</span>
                        </li>
                        <li>
                          <p class="tour-p-blue">소아 동반 인기상품</p>
                        </li>
                        <li>
                          <p>[푸꾸옥 자유 3박5일] 5성급 노보텔리조트 숙박</p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>619,000</em>원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="a.html" class="tour-link">
                    <div class="tour-img">
                      <img src="images/tour3.jpg" alt="a.html" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <span class="tour-box">방콕</span>
                        </li>
                        <li>
                          <p class="tour-p-blue">
                            2022년 오픈한 신상 럭셔리 호텔
                          </p>
                        </li>
                        <li>
                          <p>차트리움 그랜드 방콕</p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>285,389</em>원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="a.html" class="tour-link">
                    <div class="tour-img">
                      <img src="images/tour4.jpg" alt="a.html" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <span class="tour-box">NO쇼핑</span>
                        </li>
                        <li>
                          <p class="tour-p-blue">2인이상 출발, 가이드팁포함</p>
                        </li>
                        <li>
                          <p>
                            [하와이/시내관광+자유일정] 와이키키 리조트 6일/7일
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>2,040,000</em>원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="a.html" class="tour-link">
                    <div class="tour-img">
                      <img src="images/tour5.jpg" alt="a.html" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <span class="tour-box">올인클루시브</span>
                        </li>
                        <li>
                          <p class="tour-p-blue">
                            얼리 체크인 or 레이트 체크아웃 포함
                          </p>
                        </li>
                        <li>
                          <p>[스완도르 깜란/올인클루시브] 나트랑 자유여행</p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>560,000</em>원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="a.html" class="tour-link">
                    <div class="tour-img">
                      <img src="images/tour6.jpg" alt="a.html" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <span class="tour-box">기획특가</span>
                        </li>
                        <li>
                          <p class="tour-p-blue">F/W 시즌 패키지</p>
                        </li>
                        <li>
                          <p>
                            [서유럽10일]프랑스/스위스/이탈리아,루브르박물관,
                            바티칸, 융프라우,핀에어
                          </p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>2,599,000</em>원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="a.html" class="tour-link">
                    <div class="tour-img">
                      <img src="images/tour7.jpg" alt="a.html" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <span class="tour-box">코타키나발루</span>
                        </li>
                        <li>
                          <p class="tour-p-blue">
                            5성급, 선셋 명소 탄중아루 해변 위치
                          </p>
                        </li>
                        <li>
                          <p>샹그릴라 탄중아루 리조트 앤드 소파</p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>219,234</em>원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="a.html" class="tour-link">
                    <div class="tour-img">
                      <img src="images/tour8.jpg" alt="a.html" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <span class="tour-box">파리</span>
                        </li>
                        <li>
                          <p class="tour-p-blue">파리15구, 위치&가성비</p>
                        </li>
                        <li>
                          <p>호텔 투어리즘 애비뉴</p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>277,820</em>원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="tour-slide-item">
                  <a href="a.html" class="tour-link">
                    <div class="tour-img">
                      <img src="images/tour9.jpg" alt="a.html" />
                    </div>
                    <div class="tour-info">
                      <ul class="tour-good-list">
                        <li>
                          <span class="tour-box">강력특가</span>
                        </li>
                        <li>
                          <p class="tour-p-blue">슈페리어 더블, 시티뷰</p>
                        </li>
                        <li>
                          <p>SL호텔 강릉</p>
                        </li>
                        <li>
                          <span class="tour-good-info-price">
                            <em>68,600</em>원~
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
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
