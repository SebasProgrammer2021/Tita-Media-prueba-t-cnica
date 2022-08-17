import React from "react";

const PostsTable = ({ data }) => {
  return (
    <div className="postsContainerStyles">
      {data?.map((post, key) => (
        <div className="postStyles" key={key}>
          <img className="postImage" src={post.image} alt="" />
          <div className="postUserInfo">
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
            <div>
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
    </div>
  );
};

export default PostsTable;
