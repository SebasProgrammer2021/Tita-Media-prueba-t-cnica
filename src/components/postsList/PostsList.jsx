import React, { useState } from "react";
import useGetPostsList from "../../api/services/getPostsList";
import CommentsList from "../commentsList/CommentsList";
import ReusableModal from "../common/reusableModal/ReusableModal";
import UserInfo from "../userInfo/UserInfo";

const PostsList = () => {
  const { data } = useGetPostsList();
  const [postId, setPostId] = useState();
  const [open, setOpen] = useState("");
  const [ownerInfo, setOwnerInfo] = useState();

  const handleShowComments = (id) => {
    setPostId(id);
    setOpen("comments");
  };

  const handleShowUserInfo = (owner) => {
    setOpen("user");
    setOwnerInfo(owner);
  };

  return (
    <div className="postsContainerStyles">
      {data?.data?.map((post, key) => (
        <div className="postStyles" key={key}>
          <img className="postImage" src={post.image} alt="" />
          <div
            className="postUserInfo"
            role={"button"}
            onClick={() => {
              handleShowUserInfo(post.owner);
            }}
          >
            <img src={post.owner.picture} alt="" />
            <p>
              {post.owner.firstName}&nbsp;{post.owner.lastName}
            </p>
          </div>
          <div className="postStatistics">
            <div className="postLikes">
              <img
                id="likeHeart"
                src="https://img.icons8.com/fluency/48/000000/like.png"
                alt="heart like"
              />
              <span>{post.likes}</span>
            </div>
            <div
              className="postCommentsBtn"
              role={"button"}
              onClick={() => {
                handleShowComments(post.id);
              }}
            >
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/000000/comments--v1.png"
                alt="comments"
              />
              <span>{post.likes}</span>
            </div>
          </div>
          <p id="postText">{post.text}</p>
        </div>
      ))}
      <ReusableModal open={open === "comments"} setOpen={setOpen}>
        <CommentsList postId={postId} />
      </ReusableModal>
      <ReusableModal open={open === "user"} setOpen={setOpen}>
        <UserInfo data={ownerInfo} />
      </ReusableModal>
    </div>
  );
};

export default PostsList;
