import LinkList from "../LinkList/LinkList";
import { languageLinks } from "../../data/footer";
import styles from "./FooterLanguages.module.scss";

export default function FooterLanguages() {
  return (
    <div className={styles.component}>
      <LinkList
        header="Language"
        links={languageLinks}
        styleClass={styles.link_list}
      />
    </div>
  );
}
