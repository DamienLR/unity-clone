import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import PeopleIcon from "@mui/icons-material/People";
import styles from "./SocialStats.module.scss";

export default function SocialStats() {
  const iconStyles = {
    fill: "#3ac561",
    fontSize: "20px",
  };

  return (
    <div className="width_container">
      <div className={styles.component}>
        <div className={styles.container}>
          <div className={styles.flex_container}>
            <div className={styles.icon_bg}>
              <CheckCircleIcon style={iconStyles} />
            </div>
            <p className={styles.paragraph}>
              <span className={styles.bold}>Royalty-free</span> — you keep
              everything you earn
            </p>
          </div>
          <div className={styles.flex_container}>
            <div className={styles.icon_bg}>
              <DeviceHubIcon style={iconStyles} />
            </div>
            <p className={styles.paragraph}>
              <span className={styles.bold}>20+ different platforms</span> run
              Unity creations
            </p>
          </div>
          <div className={styles.flex_container}>
            <div className={styles.icon_bg}>
              <PeopleIcon style={iconStyles} />
            </div>
            <p className={styles.paragraph}>
              Trusted by
              <span className={styles.bold}> 1.5 million active creators </span>
              monthly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
