import styles from "./FeaturedCard.module.scss";

export default function FeaturedCard({
  image,
  header,
  description,
  link1Text,
  link2Text,
}) {
  return (
    <div className={styles.component}>
      <a href="/">
        <img className={styles.image} src={image} alt="" />
      </a>
      <div className={styles.text_container}>
        <h4 className={styles.header}>{header}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.links_container}>
          <p className={styles.link}>
            <a href="/">{link1Text}</a>
          </p>
          <p className={styles.link}>
            <a href="/">{link2Text}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
