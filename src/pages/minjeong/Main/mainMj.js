/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { WESTAGRAM_ASIDE_LIST } from '../../../uiData';
import CommentList from '../../../components/Nav/CommentList';
import './mainMj.scss';

function MainMj() {
  const [comment, setComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  const [feedinfoList, setFeedInfoList] = useState([]);
  const [recomend, setRecomend] = useState([]);
  const [storyList, setStoryList] = useState([]);

  useEffect(() => {
    fetch('/data/feedList.json')
      .then(response => response.json())
      .then(result => setFeedInfoList(result));
  }, []);

  useEffect(() => {
    fetch('/data/recomendList.json')
      .then(response => response.json())
      .then(result => setRecomend(result));
  }, []);

  useEffect(() => {
    fetch('data/storyList.json')
      .then(response => response.json())
      .then(result => setStoryList(result));
  });

  const commentInput = event => {
    setComment(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArr([...commentArr, comment]);
    setComment('');
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      onSubmit(event);
    }
  };

  return (
    <>
      <header>
        <nav className="navBar">
          <div className="logo">
            <img
              className="westagramImg"
              src="../../../images/minjeong/instagram.png"
              alt="로고"
            />
            <h3 className="westagramLogo">Westagram</h3>
          </div>

          <div className="searchBar">
            <img src="../../../images/minjeong/search.png" alt="돋보기" />
            <input type={'text'} placeholder="검색" />
          </div>

          <div className="icons">
            {ICON_LIST.map(iconinfo => {
              return (
                <img
                  className={iconinfo.name}
                  alt={iconinfo.alt}
                  src={iconinfo.src}
                />
              );
            })}
          </div>
        </nav>
      </header>
      <div className="page">
        <div>
          {feedinfoList.map(feedinfo => {
            return (
              <div className="feedWrap">
                <section className="feedLeft">
                  <div className="top">
                    <div className="feedtop">
                      <img className="profile" src={feedinfo.profile} />
                      <p>{feedinfo.name}</p>
                    </div>

                    <img
                      className="threeDots"
                      src="../../../images/minjeong/more.png"
                      alt="dots"
                    />
                  </div>

                  <div className="feedImg">
                    <img src={feedinfo.feedImg} />
                  </div>

                  <div className="underLike">
                    <div className="likeLeft">
                      <img src={feedinfo.likeImg} alt="tree" />
                      <p>
                        <strong className="bold">{feedinfo.likeId}</strong>님 외{' '}
                        <strong>20</strong>명이 좋아합니다.
                      </p>
                    </div>
                    <div className="CommentWrap">
                      <div className="feedText">
                        <div className="repl">
                          <p className="comments">
                            <strong className="bold">
                              {feedinfo.commentName1}
                            </strong>
                            {feedinfo.comment1}
                          </p>
                          <div className="delLike">
                            <img
                              src="../../../images/minjeong/emptyheart.png"
                              alt="empty"
                            />
                            <button className="deletebtn" type="button">
                              삭제
                            </button>
                          </div>
                        </div>

                        <div className="repl">
                          <p className="comments">
                            <strong className="bold">
                              {feedinfo.commentName2}
                            </strong>
                            {feedinfo.comment2}
                          </p>
                          <div className="delLike">
                            <img
                              src="../../../images/minjeong/emptyheart.png"
                              alt="empty"
                            />
                            <button className="deletebtn" type="button">
                              삭제
                            </button>
                          </div>
                        </div>

                        <ul>
                          {commentArr.map((comment, i) => (
                            <CommentList key={i} comment={comment} />
                          ))}
                        </ul>
                      </div>
                      <p className="timeline">42분 전</p>
                    </div>

                    <div className="send">
                      <input
                        type={'text'}
                        className="comment"
                        placeholder="댓글 달기..."
                        onChange={commentInput}
                        onKeyDown={onKeyPress}
                        value={comment}
                      />
                      <button className="submit" onClick={onSubmit}>
                        게시
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>

        <section className="feedRight">
          <div className="rightright">
            <div className="side-right">
              <div className="wecode">
                <img
                  src="../../../images/minjeong/computer.png"
                  alt="computer"
                />
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

              {storyList.map(stotyInfo => {
                return (
                  <div className="story">
                    <img
                      className="profileImg"
                      src={stotyInfo.src}
                      alt={stotyInfo.alt}
                    />
                    <div className="storyText">
                      <p className="bold">{stotyInfo.name}</p>
                      <p className="lightcolor">{stotyInfo.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="sideDown">
              <div className="storyTop">
                <p className="Light">회원님을 위한 추천</p>
                <p>모두 보기</p>
              </div>

              {recomend.map(recomend => {
                return (
                  <div className="recomend">
                    <img className="profileImg" src={recomend.src} />
                    <div className="storyText">
                      <p className="bold">{recomend.name}</p>
                      <p className="lightcolor">{recomend.recomend}</p>
                    </div>
                    <button className="follow">팔로우</button>
                  </div>
                );
              })}
            </div>
            <footer className="footerWrap">
              <div className="info">
                {WESTAGRAM_ASIDE_LIST.map(asideList => {
                  return <span key={asideList.id}>{asideList.text}</span>;
                })}
              </div>
              <p>ⓒ 2023 WESTAGRAM</p>
            </footer>
          </div>
        </section>
      </div>
    </>
  );
}

export default MainMj;

const ICON_LIST = [
  {
    id: 1,
    className: 'serching',
    alt: '탐색',
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png',
  },
  {
    id: 2,
    className: 'serching',
    alt: '하트',
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png',
  },
  {
    id: 3,
    className: 'serching',
    alt: '마이페이지',
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png',
  },
];
