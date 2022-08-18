import React from "react";

const UserInfo = ({ data }) => {
  return (
    <div>
      <div className="userInfoHeaderContainer">
        <img src={data?.picture} alt="user" />
        <p>
          {data?.title}.&nbsp;{data?.firstName}&nbsp;{data?.lastName}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
