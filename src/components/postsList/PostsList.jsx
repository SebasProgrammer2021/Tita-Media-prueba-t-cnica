import React, { useState } from "react";
import useGetPostsList from "../../api/services/getPostsList";
import CommentsList from "../commentsList/CommentsList";
import ReusableModal from "../common/reusableModal/ReusableModal";
import UserInfo from "../userInfo/UserInfo";
import PostListTemplate from "./templates/postListTemplate";

const PostsList = ({ postTagData }) => {
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
      {postTagData?.length !== 0 ? (
        <PostListTemplate
          data={postTagData}
          functions={{
            handleShowComments: handleShowComments,
            handleShowUserInfo: handleShowUserInfo,
          }}
        />
      ) : (
        <PostListTemplate
          data={data?.data}
          functions={{
            handleShowComments: handleShowComments,
            handleShowUserInfo: handleShowUserInfo,
          }}
        />
      )}
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
