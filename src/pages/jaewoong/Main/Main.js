import { useState } from 'react';
import { ASIDE_INFO_LIST } from './data';
import './Main.scss';
import '../../../styles/common.scss';

function MainJw() {
  let [comment, setComment] = useState('');
  let [saveComments, setSaveComments] = useState([]);
  function createComment(e) {
    if (e.key === 'Enter') {
      if (comment === '') {
        e.preventDefault();
      } else {
        let copy = [...saveComments];
        copy.push(comment);
        setSaveComments(copy);
        setComment('');
      }
    }
  }
  return (
    <>
      <nav>
        <div className="flex-nav">
          <div className="border-right">
            <img
              src="/images/jaewoong/instagram.png"
              alt="instagram-img"
              className="img"
            />
          </div>
          <div>
            <p className="westa-font">Westagram</p>
          </div>
          <div style={{ flexGrow: '2' }}>
            <input type="text" placeholder="검색" className="search" />
          </div>
          <button className="nav-button">
            <img
              src="/images/jaewoong/explore.png"
              alt="explore-img"
              className="img"
            />
          </button>
          <button className="nav-button">
            <img
              src="/images/jaewoong/heart.png"
              alt="heart-img"
              className="img"
            />
          </button>
          <div className="nav-profile">
            <button className="nav-button">
              <img
                src="/images/jaewoong/profile.png"
                alt="profile-img"
                className="img"
              />
            </button>
            <div className="nav-menu bubble show">
              <div className="menu">
                <p>
                  <i className="fa-regular fa-user" />
                  &nbsp;&nbsp;&nbsp;프로필
                </p>
                <p>
                  <i className="fa-regular fa-bookmark" />
                  &nbsp;&nbsp;&nbsp;저장됨
                </p>
                <p>
                  <i className="fa-solid fa-gear" />
                  &nbsp;&nbsp;&nbsp;설정
                </p>
              </div>
              <div className="logout">
                <p>로그아웃</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="speech-bubble search-result show" />
      <main>
        <div className="main-left">
          <div className="profile">
            <div className="profile-img">
              <img
                src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
                alt="profile-img"
              />
            </div>
            <span>Jaewoong</span>
          </div>

          <div className="feed-img">
            <img
              src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
              alt="profile-img"
            />
          </div>

          <div className="feed-content">
            <div className="content-menu">
              <div className="left">
                <i className="fa-solid fa-heart" />
                <i className="fa-regular fa-comment" />
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </div>
              <div className="right">
                <i className="fa-regular fa-bookmark" />
              </div>
            </div>

            <div className="content-like">
              <div>
                <img
                  src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
                  alt="feed-img"
                  className="img"
                />
              </div>
              <div>
                <span>Awer</span>님 외<span>10</span>명이 좋아합니다
              </div>
            </div>

            <div className="content-reply">
              {saveComments.map((comment, i) => {
                return <Comment key={i} saveComments={comment} />;
              })}
            </div>
            <p className="time">
              <span>42</span>분 전
            </p>
          </div>

          <div className="reply-box">
            <input
              type="text"
              placeholder="댓글 달기..."
              className="reply"
              value={comment}
              onChange={e => {
                setComment(e.target.value);
              }}
              onKeyPress={e => {
                createComment(e);
              }}
            />
            <button
              className="btn upload"
              onClick={e => {
                if (comment === '') {
                  e.preventDefault();
                } else {
                  let copy = [...saveComments];
                  copy.push(comment);
                  setSaveComments(copy);
                  setComment('');
                }
              }}
            >
              게시
            </button>
          </div>
        </div>

        <div className="main-right">
          <div className="wecode-profile">
            <div className="wecode-img">
              <img
                src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
                alt="profile-img"
              />
            </div>
            <div className="wecode-content">
              <p>wecode_bootcamp</p>
              <p>WeCode | 위코드</p>
            </div>
          </div>

          <div className="story-box">
            <div className="story-nav">
              <p>스토리</p>
              <p>모두 보기</p>
            </div>

            <div className="story-content">
              <div className="story-time">
                <div className="story-img">
                  <img
                    src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
                    alt="profile-img"
                  />
                </div>
                <div>
                  <p>_yum_s</p>
                  <p>16분전</p>
                </div>
              </div>

              <div className="story-time">
                <div className="story-img">
                  <img
                    src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
                    alt="profile-img"
                  />
                </div>
                <div>
                  <p>_yum_s</p>
                  <p>16분전</p>
                </div>
              </div>

              <div className="story-time">
                <div className="story-img">
                  <img
                    src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
                    alt="profile-img"
                  />
                </div>
                <div>
                  <p>_yum_s</p>
                  <p>16분전</p>
                </div>
              </div>

              <div className="story-time">
                <div className="story-img">
                  <img
                    src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
                    alt="profile-img"
                  />
                </div>
                <div>
                  <p>_yum_s</p>
                  <p>16분전</p>
                </div>
              </div>
            </div>
          </div>

          <div className="story-box">
            <div className="story-nav">
              <p>회원님을 위한 추천</p>
              <p>모두 보기</p>
            </div>
            <div className="story-time">
              <div className="story-img">
                <img
                  src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
                  alt="profile-img"
                />
              </div>
              <div style={{ flexGrow: '3' }}>
                <p>_yum_s</p>
                <p>_leasifjsad님 외 ..</p>
              </div>
              <div>
                <button className="follow">팔로우</button>
              </div>
            </div>
            <div className="story-time">
              <div className="story-img">
                <img
                  src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
                  alt="profile-img"
                />
              </div>
              <div style={{ flexGrow: '3' }}>
                <p>_yum_s</p>
                <p>_leasifjsad님 외 ..</p>
              </div>
              <div>
                <button className="follow">팔로우</button>
              </div>
            </div>
            <div className="story-time">
              <div className="story-img">
                <img
                  src="/images/jaewoong/alex-shuper-Xw5goPB4yws-unsplash.jpg"
                  alt="profile-img"
                />
              </div>
              <div style={{ flexGrow: '3' }}>
                <p>_yum_s</p>
                <p>_leasifjsad님 외 ..</p>
              </div>
              <div>
                <button className="follow">팔로우</button>
              </div>
            </div>
          </div>
          <div className="infor">
            {ASIDE_INFO_LIST.map(info => (
              <span key={info.id}>{info.text}</span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

const Comment = ({ saveComments }) => {
  return (
    <div className="template">
      <p>{saveComments}</p>
      <div>
        <button className="setting-reply heart">
          <i className="fa-solid fa-heart" />
        </button>
        <button className="setting-reply delete">삭제</button>
      </div>
    </div>
  );
};

export default MainJw;
