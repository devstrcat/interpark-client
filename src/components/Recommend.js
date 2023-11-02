/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/recommend.css";

function Recommend() {
  // js 코드 자리
  const swiperRef = useRef();
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
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div class="recommend-img">
                      <img src="images/r1.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>27%</b>
                            <em>7,600</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            [스포츠파크] 노스페이스 겨울 구스다운 패딩 슬립온
                            NS93M50
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div className="recommend-img">
                      <img src="images/r2.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>38%</b>
                            <em>12,500</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            서울우유 멸균 초코/딸기/흰우유 24팩/48팩 외
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div class="recommend-img">
                      <img src="images/r3.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b></b>
                            <em>15,500</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            [최종가 10,850원] 17~18브릭스 미니 꿀사과 엔비사과
                            2kg (5-9과/가정용/펜시등급)
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div className="recommend-img">
                      <img src="images/r4.png" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>22%</b>
                            <em>6,900</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            [I*POP] 아이팝 스파클링 워터 플레인 / 아이팝 탄산수
                            / 강탄산 / 진짜 먹는 샘물로 만든 탄산수
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div class="recommend-img">
                      <img src="images/r5.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>24%</b>
                            <em>7,820</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            큐라이프 니트릴장갑 200매 (색상 블랙, 화이트 /
                            사이즈 S, M, L 선택)
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div className="recommend-img">
                      <img src="images/r6.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>22%</b>
                            <em>6,400</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            아모스 04 스타일 컬링 2X 에센스 150ml
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div class="recommend-img">
                      <img src="images/r1.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>52%</b>
                            <em>32,900</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            [김혜자 세제] 프로쉬 공식몰 독일 식기세척기세제
                            그린레몬 50개입 2개+주방세제 1개+펌프 1개 증정
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div className="recommend-img">
                      <img src="images/r8.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>28%</b>
                            <em>39,00</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            [스포츠파크 타임딜] 크록스 바야 라인드 퍼즈 스트랩
                            클로그 3종 택 1
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div class="recommend-img">
                      <img src="images/r9.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>16%</b>
                            <em>11,210</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            윙잇 고른 토핑가득 부대찌개 800g*2개
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div className="recommend-img">
                      <img src="images/r10.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>34%</b>
                            <em>5,900</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            [만원의행복] 호두앤 토핑호두과자 오리지널 40알 외
                            앙버터/누텔라/블루베리 혼합 골라담기
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div class="recommend-img">
                      <img src="images/r11.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>38%</b>
                            <em>19,800</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            [스포츠파크] 불스원샷 7만키로(70000km) X 2개입
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="recommend-slide-item">
                  <a href="a.html" className="recommend-link">
                    <div className="recommend-img">
                      <img src="images/r1.jpg" alt="a.html" />
                    </div>
                    <div className="recommend-info">
                      <ul className="recommend-good-list">
                        <li>
                          <span className="recommend-good-info-price">
                            <b>27%</b>
                            <em>7,600</em>원~
                          </span>
                        </li>
                        <li>
                          <p className="recommend-good-info-desc">
                            [스포츠파크] 노스페이스 겨울 구스다운 패딩 슬립온
                            NS93M50
                          </p>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
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
