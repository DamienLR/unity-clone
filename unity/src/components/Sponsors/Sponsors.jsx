import { logos } from "../../data/sponsors";
import styles from "./Sponsors.module.scss";

export default function Sponsors() {
  const renderedLogos = logos.map((logo, index) => {
    return (
      <a key={index} href="/">
        <img className={styles.logo} src={logo} alt="" />
      </a>
    );
  });

  return (
    <div className="padding_container">
      <div className="width_container">
        <h3 className={styles.header}>Deliver incredible possibilities</h3>
        <p className={styles.paragraph}>
          Create once, deploy across 25+ leading platforms and technologies to
          reach the largest possible audience.
        </p>
        <div className={styles.grid_container}>{renderedLogos}</div>
      </div>
    </div>
  );
}
