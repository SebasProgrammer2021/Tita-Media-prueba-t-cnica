import React, { useState } from "react";
import "../styles/home.css";
import PostsList from "../components/postsList/PostsList";
import usePostsByTag from "../api/services/getPostsByTag";

const Home = ({ user }) => {
  const [tagName, setTagName] = useState();
  const { postsTagData } = usePostsByTag(tagName);

  const handleChange = (e) => {
    if (e.target.value !== "") setTagName(e.target.value);
  };

  return (
    <div>
      <div id="headerUserInfo">
        <img src={user?.picture} alt="user img" />
        <div>
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
        </div>
      </div>
      <form>
        <label htmlFor="tagFilter">Filter by tag: </label>
        <input
          id="tagFilter"
          name="tagFilter"
          onChange={handleChange}
          placeholder="Tag name"
        />
      </form>
      <PostsList postTagData={postsTagData?.data} />
    </div>
  );
};

export default Home;
