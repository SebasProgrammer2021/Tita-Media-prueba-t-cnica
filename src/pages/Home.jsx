import React from "react";
import "../styles/home.css";
import PostsList from "../components/postsList/PostsList";

const Home = ({ user }) => {
  return (
    <div>
      <div id="headerUserInfo">
        <img src={user?.picture} alt="user img" />
        <h2>{user?.name}</h2>
      </div>
      <PostsList />
    </div>
  );
};

export default Home;
