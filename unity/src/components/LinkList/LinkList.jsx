import styles from "./LinkList.module.scss";

export default function LinkList({ header, links, styleClass }) {
  const renderLinks = links.map((link, index) => {
    return (
      <li key={index}>
        <a className={styles.list_item} href="/">
          {link}
        </a>
      </li>
    );
  });

  return (
    <div className={`${styles.link_list} ${styleClass}`}>
      <h4 className={styles.header}>{header}</h4>
      <ul>{renderLinks}</ul>
    </div>
  );
}
