import React from "react";

const PostListTemplate = ({ data, functions }) => {
  return (
    <>
      {data?.map((post) => (
        <div className="postStyles" key={post.id}>
          <img className="postImage" src={post.image} alt="" />
          <div
            className="postUserInfo"
            role={"button"}
            onClick={() => {
              functions?.handleShowUserInfo(post.owner);
            }}
          >
            <img src={post.owner.picture} alt="" />
            <p>
              {post.owner.firstName}&nbsp;{post.owner.lastName}
            </p>
          </div>
          <div className="postTags">
            {post.tags.map((tag, index) => (
              <div className="tag" key={index}>
                {tag}
              </div>
            ))}
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
                functions?.handleShowComments(post.id);
              }}
            >
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/000000/comments--v1.png"
                alt="comments"
              />
            </div>
          </div>
          <p id="postText">{post.text}</p>
        </div>
      ))}
    </>
  );
};

export default PostListTemplate;
