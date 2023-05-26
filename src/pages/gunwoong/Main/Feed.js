import React, { useState } from 'react';
import Comment from './Comment';

const Feed = ({ feed }) => {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const onChangeInput = e => {
    setComment(e.target.value);
  };

  const createComment = e => {
    if (comment.trim() !== '') {
      let newCommentArray = [...commentArray];
      newCommentArray.push(comment);
      setCommentArray(newCommentArray);
      setComment('');
    }
  };

  return (
    <article className="feeds">
      <div className="feeds__header">
        <img className="profile-img-gradient" src={feed.img} alt="프로필사진" />
        <div className="feeds__header__contents">
          <span>{feed.userId}</span>
          <span>{feed.place}</span>
        </div>
        <i className="fa-solid fa-ellipsis" />
      </div>
      <img className="feeds__img" src={feed.feedsImg} alt="피드이미지" />
      <div className="feeds__bottom-icons">
        <i className="fa-solid fa-heart" />
        <i className="fa-solid fa-comment" />
        <i className="fa-solid fa-arrow-up-from-bracket" />
        <i className="fa-solid fa-bookmark" />
      </div>
      <div className="feeds__likes-wrap">
        <div>
          <img
            className="feeds__likes-wrap__image"
            src={feed.img}
            alt="프로필사진"
          />
        </div>
        <div className="feeds__likes-wrap__text">
          <span>님 외 9명이 좋아합니다.</span>
        </div>
      </div>
      <div className="feeds__comment">
        <ul className="feeds__comment-wrap">
          <Comment comment={comment} commentArray={commentArray} />
        </ul>
        <form
          onClick={e => {
            e.preventDefault();
          }}
        >
          <input
            className="feeds__comment__input"
            type="text"
            placeholder="댓글 달기..."
            value={comment}
            onChange={onChangeInput}
          />
          <button
            className="feeds__comment__button"
            hidden
            onClick={createComment}
          />
        </form>
      </div>
    </article>
  );
};
export default Feed;
