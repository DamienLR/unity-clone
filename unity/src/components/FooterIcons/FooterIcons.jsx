import styles from "./FooterIcons.module.scss";

import logoYouTube from "../../assets/svg/YouTube.svg";
import logoLinkedIn from "../../assets/svg/LinkedIn.svg";
import logoTwitter from "../../assets/svg/Twitter.svg";
import logoFacebook from "../../assets/svg/Facebook.svg";
import logoInstagram from "../../assets/svg/Instagram.svg";

export default function FooterIcons() {
  return (
    <div className={styles.component}>
      <h4 className={styles.header}>Social</h4>
      <img className={styles.icon} src={logoYouTube} alt="" />
      <img className={styles.icon} src={logoLinkedIn} alt="" />
      <img className={styles.icon} src={logoTwitter} alt="" />
      <img className={styles.icon} src={logoFacebook} alt="" />
      <img className={styles.icon} src={logoInstagram} alt="" />
    </div>
  );
}
