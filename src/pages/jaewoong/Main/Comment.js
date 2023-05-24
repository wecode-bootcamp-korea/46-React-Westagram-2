const Comment = ({ saveComments, info }) => {
  return (
    <div className="template" key={info.id}>
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

export default Comment;
