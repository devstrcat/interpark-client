/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/header.css";

function Header() {
  // javaScript 코드 자리
  return (
    // html 코드 자리
    // <!-- 상단 영역 -->
    <header className="header">
      <div className="h-inner">
        <div className="h-top">
          <div className="h-top-left">
            <a href="#" className="logo"></a>
            <div className="h-search">
              <form className="search-f">
                <input type="text" className="search-word" />
                <input type="button" value="검색" className="search-bt" />
              </form>
            </div>
          </div>
          <div className="h-top-right">
            <ul className="mymenu">
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#" id="mypage-bt" className="mypage-bt">
                  마이페이지
                  <img src="./images/arrow.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-bottom">
          <ul className="h-bottom-cate">
            <li>
              <a href="#">
                <img src="./images/icon_tour.png" alt="" />
                투어
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/icon_ticket.png" alt="" />
                티켓
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/icon_shopping.png" alt="" />
                쇼핑
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/icon_book.png" alt="" />
                도서
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/icon_triple.png" alt="" />
                트리플
              </a>
            </li>
            <li>
              <a href="#" id="special-hot" className="special-hot">
                <img src="./images/icon_special.png" alt="" />
                여행초특가
              </a>
            </li>
          </ul>
          <ul className="h-today-menu">
            <li className="event">
              <a href="#">
                <img src="./images/icon_gnb_nol.png" alt="" />
                항공 즉시할인
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
