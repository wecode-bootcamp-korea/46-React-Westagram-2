/* eslint-disable */
import React from 'react';
import './mainMj.scss';

function MainMj() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="image/instagram.png" alt="로고" />
            <h3 className="westagramLogo">Westagram</h3>
          </div>

          <div className="searchBar">
            <img src="image/search.png" alt="돋보기" />
            <input type={'text'} placeholder="검색" />
          </div>

          <div className="icons">
            <img
              className="serching"
              alt="탐색"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />

            <img
              className="heart"
              alt="하트"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />

            <img
              className="mypage"
              alt="마이페이지"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </nav>
      </header>
      <div className="page">
        <section className="feedLeft">
          <div className="top">
            <div className="feedtop">
              <img
                className="profile"
                src="image/circe-denyer-W_8Tivmufmo-unsplash.png"
              />
              <p>rocket.racoon</p>
            </div>

            <img className="threeDots" src="image/more.png" alt="dots" />
          </div>

          <div className="feedImg">
            <img src="image/racoon.png" />
          </div>

          <div className="underLike">
            <div className="likeLeft">
              <img src="image/tree.png" alt="tree" />
              <p>
                <strong>groot.IAM</strong>님 외 <strong>20</strong>명이
                좋아합니다.
              </p>
            </div>
            <div className="CommentWrap">
              <div className="feedText">
                <div className="repl">
                  <p className="comments">
                    <strong>Star_Lord_Quill</strong> 귀엽네...
                  </p>
                  <div className="delLike">
                    <img src="image/emptyheart.png" alt="empty" />
                    <button className="deletebtn" type="button">
                      삭제
                    </button>
                  </div>
                </div>

                <div className="repl">
                  <p className="comments">
                    <strong>DraxDoesntDance</strong> 아주 귀여워..
                  </p>
                  <div className="delLike">
                    <img src="image/emptyheart.png" alt="empty" />
                    <button className="deletebtn" type="button">
                      삭제
                    </button>
                  </div>
                </div>

                <ul id="comment-wrapper"></ul>
              </div>
              <p className="timeline">42분 전</p>
            </div>

            <div className="send">
              <input
                type={'text'}
                className="comment"
                placeholder="댓글 달기..."
                required
              />
              <button className="submit">게시</button>
            </div>
          </div>
        </section>

        <section className="feedRight">
          <div className="side-right">
            <div className="wecode">
              <img src="image/computer.png" alt="computer" />
              <div className="wecodeId">
                <p className="bold"> wecode_bootcamp</p>
                <p className="lightcolor">
                  WeCode<span>위코드</span>
                </p>
              </div>
            </div>
          </div>

          <div className="storyWrap">
            <div className="storyTop">
              <p className="Light">스토리</p>
              <p>모두보기</p>
            </div>

            <div className="story">
              <img className="profileImg" src="image/rabbit.png" alt="rabbit" />
              <div className="storyText">
                <p className="bold">Rabbit.floor</p>
                <p className="lightcolor">33분 전</p>
              </div>
            </div>

            <div className="story">
              <img className="profileImg" src="image/babyy.png" alt="babies" />
              <div className="storyText">
                <p className="bold">Baby_rocket</p>
                <p className="lightcolor">45분 전</p>
              </div>
            </div>

            <div className="story">
              <img
                className="profileImg"
                src="image/수달스.png"
                alt="otters"
              />
              <div className="storyText">
                <p className="bold">otter._.bros</p>
                <p className="lightcolor">1시간 전</p>
              </div>
            </div>
          </div>

          <div className="sideDown">
            <div className="storyTop">
              <p className="Light">회원님을 위한 추천</p>
              <p>모두 보기</p>
            </div>

            <div className="recomend">
              <img className="profileImg" src="image/puppy.png" />
              <div className="storyText">
                <p className="bold">dogggy_DOG</p>
                <p className="lightcolor">Rabbit.floor님 외 2명이...</p>
              </div>
              <button className="follow">팔로우</button>
            </div>

            <div className="recomend">
              <img className="profileImg" src="image/dogrun.png" />
              <div className="storyText">
                <p className="bold">Run.joaaaa</p>
                <p className="lightcolor">Baby_rocket님 외 4명이...</p>
              </div>
              <button className="follow">팔로우</button>
            </div>

            <div className="recomend">
              <img
                className="profileImg"
                src="image/manja-vitolic-gKXKBY-C-Dk-unsplash.png"
              />
              <div className="storyText">
                <p className="bold">kittyTheCat</p>
                <p className="lightcolor">otter._.bros님 외 1명이...</p>
              </div>
              <button className="follow">팔로우</button>
            </div>
          </div>
          <footer className="footerWrap">
            <div className="info">
              <p>Instagram 정보 · 지원 · 홍보센터 · API · </p>
              <p>채용정보 개인정보처리방침 · 약관 ·</p>
              <p>디렉터리 · 프로필 · 해시태그 · 언어</p>
            </div>
            <p>ⓒ 2023 WESTAGRAM</p>
          </footer>
        </section>
      </div>
    </>
  );
}

export default MainMj;
