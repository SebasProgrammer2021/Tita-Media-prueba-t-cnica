import { useQuery } from "@tanstack/react-query";
import getPostsByTag from "../endpoints/getPostsByTag";

const usePostsByTag = (tagName) => {
  const { data, error, isLoading } = useQuery(
    ["GET_POSTS_BY_TAG", tagName],
    () => {
      return getPostsByTag(tagName);
    }
  );

  return { error, isLoading, postsTagData: data };
};

export default usePostsByTag;
