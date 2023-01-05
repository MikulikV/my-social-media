import React from "react";
import s from "./ProfileInfo.module.css";
import wallImage from "../../../assets/images/main.jpg"

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.contentBackground}>
        <img src={wallImage} alt="Image"/>
      </div>
      <div className={s.descriptionBlock}>
      ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
