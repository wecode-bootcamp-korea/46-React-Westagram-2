import React from 'react';

const Comment = ({ comment, commentArray }) => {
  const showCommentList = commentArray.map((comment, index) => (
    <li className="showCommentList" key={index}>
      <span>{comment}</span>
      <span>
        <span className="commentLike">❤️</span>
        <button className="commentDelete">X</button>
      </span>
    </li>
  ));
  return showCommentList;
};
export default Comment;
