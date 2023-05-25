import React from 'react';
import './CommentList.scss';

function CommentList({ comment }) {
  return (
    <li>
      <div className="repl">
        <p className="comments">
          <strong className="bold">Feature/46-MinJ</strong>&nbsp;&nbsp;&nbsp;
          {comment}
        </p>
        <div className="delLike">
          <img src="../../../images/minjeong/emptyheart.png" alt="empty" />
          <button className="deletebtn" type="button">
            삭제
          </button>
        </div>
      </div>
    </li>
  );
}

export default CommentList;
