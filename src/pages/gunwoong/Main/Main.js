import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import ASIDE_INFO from './mainFooterData';
import './Main.scss';
import '../../../styles/common.scss';

const Main = () => {
  const [feedsData, setFeedsData] = useState([]);

  useEffect(() => {
    fetch('/data/feedsData.json')
      .then(res => res.json())
      .then(data => setFeedsData(data));
  }, []);

  return (
    <>
      <nav id="main-nav">
        <div className="logo-wrap nav-width">
          <img
            className="logo-wrap__logo"
            src="./images/gunwoong/instagram.png"
            alt="인스타그램 로고 사진"
          />
          <div className="logo-wrap__vertical-line" />
          <div className="logo-wrap__text">westagram</div>
        </div>
        <div className="search-bar-wrap nav-width">
          <input type="text" placeholder="검색" />
        </div>
        <div className="icons-wrap nav-width">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="탐색아이콘"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="하트아이콘"
          />
          <img
            id="profile-img"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="프로필아이콘"
          />
        </div>
      </nav>
      <div className="horizontal-line" />
      <div id="container">
        <div className="feed-wrap">
          {feedsData.map(feed => (
            <Feed key={feed.id} feed={feed} />
          ))}
        </div>
        <aside className="main-aside">
          <div className="main-aside__header-wrap">
            <img
              className="profile-img-gradient"
              src="./images/gunwoong/IMG_3734.JPG"
              alt="프로필사진"
            />
            <div className="main-aside__header-wrap__contents">
              <span>wecode_bootcamp</span>
              <span>WeCode | 위코드</span>
            </div>
          </div>
          <section className="main-aside__story-section">
            <div className="main-aside__story-section__text">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>
            <ul className="main-aside__story-section__profile-list">
              <li>
                <img
                  className="profile-img-gradient"
                  src="./images/gunwoong/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>_yum_s</span>
                  <span>16분전</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img-gradient"
                  src="./images/gunwoong/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>o30fjj</span>
                  <span>36분전</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img-gradient"
                  src="./images/gunwoong/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>_soso_me_</span>
                  <span>46분전</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img-gradient"
                  src="./images/gunwoong/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>_kkk_kkk00</span>
                  <span>1시간전</span>
                </div>
              </li>
            </ul>
          </section>
          <section className="main-aside__story-section">
            <div className="main-aside__story-section__text">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <ul className="main-aside__story-section__profile-list">
              <li>
                <img
                  className="profile-img"
                  src="./images/gunwoong/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>joahyeeeeee</span>
                  <span>_legend_a님 외 2명이 ...</span>
                </div>
                <div className="main-aside__story-section__profile-list__follow">
                  <span>팔로우</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img"
                  src="./images/gunwoong/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>o30fjj</span>
                  <span>_legend_a님 외 2명이 ...</span>
                </div>
                <div className="main-aside__story-section__profile-list__follow">
                  <span>팔로우</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img"
                  src="./images/gunwoong/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>_soso_me_</span>
                  <span>_legend_a님 외 2명이 ...</span>
                </div>
                <div className="main-aside__story-section__profile-list__follow">
                  <span>팔로우</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img"
                  src="./images/gunwoong/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>_kkk_kkk00</span>
                  <span>_legend_a님 외 2명이 ...</span>
                </div>
                <div className="main-aside__story-section__profile-list__follow">
                  <span>팔로우</span>
                </div>
              </li>
            </ul>
          </section>
          <footer>
            {ASIDE_INFO.map(info => (
              <div className="footer-info" key={info.id}>
                <span className='className="footer-info"'>{info.first}</span>
                <br />
                <br />
                <br />
                <span className="footer-info">{info.second}</span>
              </div>
            ))}
          </footer>
        </aside>
      </div>
    </>
  );
};

export default Main;
