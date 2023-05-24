import { useState } from 'react';
import Comment from './Comment';

const Feed = ({ info }) => {
  let [comment, setComment] = useState('');
  let [saveComments, setSaveComments] = useState([]);
  function createComment(e) {
    if (e.key === 'Enter') {
      if (comment === '') {
        e.preventDefault();
      } else {
        saveComments.push(comment);
        setSaveComments(saveComments);
        setComment('');
      }
    }
  }
  return (
    <div className="main-left" key={info.id}>
      <div className="profile">
        <div className="profile-img">
          <img src={info.profileImg} alt="profile-img" />
        </div>
        <span>{info.name}</span>
      </div>

      <div className="feed-img">
        <img src={info.feedImg} alt="profile-img" />
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
            <img src={info.likeImg} alt="feed-img" className="img" />
          </div>
          <div>
            <span>{info.likeId}</span>님 외<span>10</span>명이 좋아합니다
          </div>
        </div>
        <div className="content-reply">
          <div className="template">
            <p>
              {info.commentName1} {info.comment1}
            </p>
            <div>
              <button className="setting-reply heart">
                <i className="fa-solid fa-heart" />
              </button>
              <button className="setting-reply delete">삭제</button>
            </div>
          </div>
        </div>
        <div className="content-reply">
          <div className="template">
            <p>
              {info.commentName2} {info.comment2}
            </p>
            <div>
              <button className="setting-reply heart">
                <i className="fa-solid fa-heart" />
              </button>
              <button className="setting-reply delete">삭제</button>
            </div>
          </div>
        </div>
        <div className="content-reply">
          {saveComments.map(comment => {
            return (
              <Comment
                key={info.id}
                id={comment.id}
                saveComments={comment}
                info={info}
              />
            );
          })}
        </div>
        <p className="time">
          <span>42</span>분 전
        </p>
      </div>

      <div className="reply-box">
        <input
          key={info.id}
          id={info.id}
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
  );
};

export default Feed;
