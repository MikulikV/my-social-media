import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.contentBackground}>
        <img src="https://thumbs.dreamstime.com/b/%D0%B7%D0%B0%D0%BA%D0%B0%D1%82-%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BB%D1%8F%D0%B6%D0%B0-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-%D1%81-156258928.jpg" alt=""/>
      </div>
      <div className={s.descriptionBlock}>
      ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
