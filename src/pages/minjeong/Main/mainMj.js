/* eslint-disable */
import React, { useEffect, useState } from 'react';
import CommentList from '../../../components/Nav/CommentList';
import { WESTAGRAM_ASIDE_LIST } from '../../../uiData';

import './mainMj.scss';

function MainMj() {
  const [comment, setComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  const [feedinfoList, setFeedInfoList] = useState([]);

  useEffect(() => {
    fetch('/data/feedList.json')
      .then(response => response.json())
      .then(result => setFeedInfoList(result));
  }, []);

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

              <div className="story">
                <img
                  className="profileImg"
                  src="../../../images/minjeong/rabbit.png"
                  alt="rabbit"
                />
                <div className="storyText">
                  <p className="bold">Rabbit.floor</p>
                  <p className="lightcolor">33분 전</p>
                </div>
              </div>

              <div className="story">
                <img
                  className="profileImg"
                  src="../../../images/minjeong/babyy.png"
                  alt="babies"
                />
                <div className="storyText">
                  <p className="bold">Baby_rocket</p>
                  <p className="lightcolor">45분 전</p>
                </div>
              </div>

              <div className="story">
                <img
                  className="profileImg"
                  src="../../../images/minjeong/수달스.png"
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
                <img
                  className="profileImg"
                  src="../../../images/minjeong/puppy.png"
                />
                <div className="storyText">
                  <p className="bold">dogggy_DOG</p>
                  <p className="lightcolor">Rabbit.floor님 외 2명이...</p>
                </div>
                <button className="follow">팔로우</button>
              </div>

              <div className="recomend">
                <img
                  className="profileImg"
                  src="../../../images/minjeong/dogrun.png"
                />
                <div className="storyText">
                  <p className="bold">Run.joaaaa</p>
                  <p className="lightcolor">Baby_rocket님 외 4명이...</p>
                </div>
                <button className="follow">팔로우</button>
              </div>

              <div className="recomend">
                <img
                  className="profileImg"
                  src="../../../images/minjeong/manja-vitolic-gKXKBY-C-Dk-unsplash.png"
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
