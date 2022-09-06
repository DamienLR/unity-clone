import LinkList from "../LinkList/LinkList";
import { mainLinks } from "../../data/footer";
import styles from "./FooterMainLinks.module.scss";

export default function FooterMainLinks() {
  const renderList = (header, links, styleClass) => {
    return <LinkList header={header} links={links} styleClass={styleClass} />;
  };

  return (
    <div className={styles.lists}>
      {renderList("Purchase", mainLinks.purchase, styles.link_list)}
      {renderList("Education", mainLinks.education, styles.link_list)}
      {renderList("Download", mainLinks.download, styles.link_list)}
      {renderList("Unity Labs", mainLinks.unityLabs, styles.link_list)}
      {renderList("Resources", mainLinks.resources, styles.link_list)}
      {renderList("Unity", mainLinks.unity, styles.link_list)}
    </div>
  );
}
