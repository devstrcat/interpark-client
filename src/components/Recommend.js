/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/recommend.css";

function Recommend() {
  // js 코드 자리
  return (
    <section class="recommend common">
      <div class="recommend-inner c-inner">
        <div class="recommend-header c-header">
          <h2 class="recommend-title c-title">쇼핑 추천</h2>
          <span class="recommend-txt c-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>
        <div class="recommend-main c-main">
          <div class="recommend-cate c-cate">
            <ul class="recommend-list c-list">
              <li>
                <button class="cate-bt cate-bt-active">쎈딜</button>
              </li>
              <li>
                <button class="cate-bt">베스트</button>
              </li>
              <li>
                <button class="cate-bt">블프데이</button>
              </li>
              <li>
                <button class="cate-bt">디지털프라자</button>
              </li>
              <li>
                <a href="#" class="cate-bt">
                  소담상회
                </a>
              </li>
            </ul>
          </div>
          <div class="recommend-slide-wrap">
            <div class="swiper recommend-slide">
              <div class="swiper-wrapper"></div>
            </div>
          </div>
          <button class="recommend-slide-prev c-slide-prev"></button>
          <button class="recommend-slide-next c-slide-next"></button>
        </div>
        <div class="recommend-go c-go">
          <button class="go-home">쇼핑 홈 바로가기</button>
        </div>
      </div>
    </section>
  );
}
export default Recommend;
