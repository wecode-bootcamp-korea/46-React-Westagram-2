import React from 'react';

function Comment({
  feedinfoList,
  setFeedInfoList,
  commentName1,
  comment1,
  commentName2,
  comment2,
}) {
  return (
    <>
      <div className="repl">
        <p className="comments">
          <strong className="bold">{commentName1}</strong>
          {comment1}
        </p>
        <div className="delLike">
          <img src="../../../images/minjeong/emptyheart.png" alt="empty" />
          <button className="deletebtn" type="button">
            삭제
          </button>
        </div>
      </div>

      <div className="repl">
        <p className="comments">
          <strong className="bold">{commentName2}</strong>
          {comment2}
        </p>
        <div className="delLike">
          <img src="../../../images/minjeong/emptyheart.png" alt="empty" />
          <button className="deletebtn" type="button">
            삭제
          </button>
        </div>
      </div>
    </>
  );
}

export default Comment;
