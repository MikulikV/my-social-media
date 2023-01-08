import React from "react";
import styles from "./ProfileInfo.module.css";
import wallImage from "../../../assets/images/main.jpg";
import userPhoto from "../../../assets/images/user.png";
import job from "../../../assets/images/looking_for_a_job.jpg";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

  const profileContacts = contacts => {
    let content = [];
    for (let key in contacts) {
      if (contacts[key]) {
        if (!contacts[key].startsWith("https://")) {
          contacts[key] = "https://" + contacts[key];
        } 
        content.push(<a href={contacts[key]} className={styles.contactLink} target="_blank" rel="noopener noreferrer">{key}</a>);
      }
    }
    return content;
  };

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div key={props.profile.userId}>
      <div className={styles.contentBackground}>
        <img src={wallImage} alt=""/>
      </div>
      <div className={styles.descriptionBlock}>
        <div className={styles.avatar}>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="ava" />
        </div>
        <div className={styles.description}>
          <h2 className={styles.name}>{props.profile.fullName}</h2>
          <h3 className={styles.about}>{props.profile.aboutMe}</h3>
          <div className={styles.lookForAJob}>
            <img className={styles.lookForAJobPicture} src={props.profile.lookingForAJob ? job : null} alt="" />
            <p>{props.profile.lookingForAJobDescription}</p>
          </div>
          <div className={styles.contacts}>{(profileContacts(props.profile.contacts).length > 0) ? "My contacts:" : null }{profileContacts(props.profile.contacts)}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
