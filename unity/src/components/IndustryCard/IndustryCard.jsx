import styles from "./IndustryCard.module.scss";

export default function IndustryCard({ image, title, paragraph, linkText }) {
  return (
    <div className={styles.component}>
      <a href="/">
        <img className={styles.image} src={image} alt="" />
      </a>
      <div className={styles.text_container}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.paragraph}>{paragraph}</p>
        <p className={styles.link}>
          <a href="/">{linkText}</a>
        </p>
      </div>
    </div>
  );
}
