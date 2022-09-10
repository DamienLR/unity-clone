import Button from "../ui/Button/Button";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.component}>
      <div className="width_container">
        <p className={styles.paragraph}>The future is yours</p>
        <h1 className={styles.header}>
          The world’s leading platform for real-time content creation
        </h1>
        <Button btnText="See plans & pricing" btnClass={styles.button} />
      </div>
    </div>
  );
}
