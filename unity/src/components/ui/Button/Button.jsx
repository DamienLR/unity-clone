import React from "react";
import styles from "./Button.module.scss";

export default function Button({ btnText, btnClass }) {
  return (
    <React.Fragment>
      <a href="/">
        <button className={`${styles.btn} ${btnClass}`}>{btnText}</button>
        {/* btnClass is used to apply non-general styles */}
      </a>
    </React.Fragment>
  );
}
