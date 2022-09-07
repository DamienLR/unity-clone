import Button from "../ui/Button/Button";
import styles from "./Hiring.module.scss";
import image from "../../assets/images/hiring.jpg";

export default function Hiring() {
  return (
    <div className="padding_container">
      <div className="width_container">
        <div className={styles.component}>
          <div className={styles.image_container}>
            <img className={styles.image} src={image} alt="" />
          </div>
          <div className={styles.text_container}>
            <h3 className={styles.header}>
              Together, we empower real-time creativity around the world
            </h3>
            <p className={styles.paragraph}>
              Join the global team behind the world’s most powerful real-time
              development platform.
            </p>
            <Button btnText="We're hiring" btnClass={styles.button} />
          </div>
        </div>
      </div>
    </div>
  );
}
