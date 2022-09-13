import styles from "./SuccessArticle.module.scss";

export default function SuccessArticle({ title, description, linkText }) {
  return (
    <div className={styles.component}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <p className={styles.link}>
        <a href="/">{linkText}</a>
      </p>
    </div>
  );
}
