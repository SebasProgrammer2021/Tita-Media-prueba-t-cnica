import { useQuery } from "@tanstack/react-query";
import getCommentsByPost from "../endpoints/getCommentsByPost";

const useGetCommentsByPost = (postId) => {
  const { data, error, isLoading } = useQuery(
    ["GET_POST_COMMENTS", postId],
    () => {
        return getCommentsByPost(postId);
    }
  );

  return { error, isLoading, commentsData:data };
};

export default useGetCommentsByPost;
