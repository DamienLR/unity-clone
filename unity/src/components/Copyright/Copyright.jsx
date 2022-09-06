import { copyrightLinks } from "../../data/footer";
import styles from "./Copyright.module.scss";

export default function Copyright() {
  const renderCopyrightLinks = copyrightLinks.map((link, index) => {
    return (
      <li className={styles.list_item} key={index}>
        <a href="/">{link}</a>
      </li>
    );
  });

  return (
    <div className={styles.component}>
      <p className={styles.text_top}>
        Copyright &copy; 2022 Unity Technologies
      </p>
      <ul className={styles.list}>{renderCopyrightLinks}</ul>
      <p className={styles.text_bottom}>
        "Unity", Unity logos, and other Unity trademarks are trademarks or
        registered trademarks of Unity Technologies or its affiliates in the
        U.S. and elsewhere (<a href="/">more info here</a>). Other names or
        brands are trademarks of their respective owners.
      </p>
    </div>
  );
}
