import React from "react";
import "../styles/home.css";
import useGetPostsList from "../api/services/getPostsList";
import PostsTable from "../components/PostsTable";

const Home = ({ user }) => {
  const { data } = useGetPostsList();

  console.log(data?.data, "home");
  return (
    <div>
      <div id="headerUserInfo">
        <img src={user?.picture} alt="user img" />
        <h2>{user?.name}</h2>
      </div>
      <PostsTable data={data?.data} />
    </div>
  );
};

export default Home;
