import preloader from "../../../assets/images/preloader.gif";
import styles from "../common.module.css";

const Preloader = (props) => {
  return <img className={styles.preloader} src={preloader} alt="Loading" />;
};

export default Preloader;
