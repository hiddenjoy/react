import { useEffect, useState } from "react";
import { getUser, updateComment } from "../../apis/api";

const CommentElement = (props) => {
  const { comment, handleCommentDelete } = props;
  const [content, setContent] = useState(comment.content);
  const [editContent, setEditContent] = useState(comment.content);
  const [isEdit, setIsEdit] = useState(false);

  const [user, setUser] = useState(null);

  const date = new Date(comment.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  const handleEditComment = () => {
    updateComment(comment.id, { content: editContent });
  };

  useEffect(() => {
    // access_token이 있으면 유저 정보 가져옴
    if (localStorage.getItem("access_token")) {
      const getUserAPI = async () => {
        const user = await getUser();
        setUser(user);
      };
      getUserAPI();
    }
  }, []);

  return (
    <div className="w-full flex justify-between gap-1 mb-2">
      <div className="w-3/4">
        {isEdit ? (
          <input
            className="input mr-4"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
        ) : (
          <p className="text-lg mr-4">{content}</p>
        )}
        <span className="text-base mr-1 text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>
      {user?.id === comment.author ? (
        <div className="w-1/4 flex flex-row-reverse items-center">
          {!isEdit && (
            <button onClick={() => handleCommentDelete(comment.id)}>Del</button>
          )}
          {isEdit ? (
            <>
              <button className="mr-3" onClick={handleEditComment}>
                Done
              </button>
              <button
                className="mr-3"
                onClick={() => {
                  setIsEdit(!isEdit);
                  setEditContent(content);
                }}
              >
                Back
              </button>
            </>
          ) : (
            <button className="mr-3" onClick={() => setIsEdit(!isEdit)}>
              Edit
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};
export default CommentElement;
