import React from "react";

const Home = ({ user }) => {
  return (
    <div>
      <div id="headerUserInfo">
        <img src={user?.picture} alt="user img" />
        <h2>{user?.name}</h2>
      </div>
    </div>
  );
};

export default Home;
