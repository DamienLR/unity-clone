import Button from "../ui/Button/Button";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className="padding_container">
      <div className="width_container">
        <div className={styles.component}>
          <h3 className={styles.header}>
            Solutions for big teams to achieve big dreams
          </h3>
          <p className={styles.paragraph}>
            Our enterprise-level solutions provide large teams and organizations
            in every industry with everything they need to build awesome
            real-time 3D projects.
          </p>
          <Button btnText="Contact us" btnClass={styles.button} />
        </div>
      </div>
    </div>
  );
}
