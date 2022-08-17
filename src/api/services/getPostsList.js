import { useQuery } from "@tanstack/react-query";
import getPostsList from "../endpoints/getPostsList";

const useGetPostsList = () => {
  const { isLoading, error, data } = useQuery(["GET_POSTS_LIST"], getPostsList);

  return { error, isLoading, data };
};

export default useGetPostsList;
