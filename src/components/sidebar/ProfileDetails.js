import React from "react";

import img from "../../assets/pic.png";

import "./ProfileDetails.scss";


const ProfileDetails = () => {
  return (
    <>
      <div className="profile">
        <div className="image">
          <img src={img} />
        </div>
        <div className="details">
          <div className="name">Dan Anderson</div>
          <div className="date">11th, Mon 12:15pm UTC</div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
