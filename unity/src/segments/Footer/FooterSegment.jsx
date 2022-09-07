import FooterLanguages from "../../components/FooterLanguages/FooterLanguages";
import FooterIcons from "../../components/FooterIcons/FooterIcons";
import FooterMainLinks from "../../components/FooterMainLinks/FooterMainLinks";
import Copyright from "../../components/Copyright/Copyright";
import styles from "./FooterSegment.module.scss";

export default function FooterSegment() {
  return (
    <div className={`padding_container ${styles.segment}`}>
      <div className="width_container">
        <div className={styles.flex_container}>
          <FooterLanguages />
          <FooterIcons />
        </div>
        <hr />
        <FooterMainLinks />
        <Copyright />
      </div>
    </div>
  );
}
