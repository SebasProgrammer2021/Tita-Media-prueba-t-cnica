import React, { useEffect, useState } from "react";
import useGetCommentsByPost from "../../api/services/getCommentsByPost";
import "../../styles/commentsList.css";

const CommentsList = ({ postId }) => {
  const { commentsData } = useGetCommentsByPost(postId);
  const [commenData, setCommenData] = useState(false);

  useEffect(() => {
    if (commentsData?.data?.length !== 0) {
      setCommenData(true);
    } else {
      setCommenData(false);
    }
  }, [commenData, commentsData]);

  return (
    <div>
      <h2>All comments</h2>
      {commenData ? (
        <div className="commentsContainer">
          {commentsData?.data?.map((comment) => (
            <div className="commentUserInfo" key={comment.id}>
              <picture>
                <img src={comment.owner.picture} alt="" />
              </picture>
              <div>
                <p className="commentMessage">{comment.message}</p>
                <p>
                  {comment.owner.firstName}&nbsp;{comment.owner.lastName}
                </p>
                <p>{comment.publishDate.split("T")[0]}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>There is not comments for this post</h3>
      )}
    </div>
  );
};

export default CommentsList;
