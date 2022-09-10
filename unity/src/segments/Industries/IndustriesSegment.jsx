import IndustryCard from "../../components/IndustryCard/IndustryCard";
import styles from "./IndustriesSegment.module.scss";

import image1 from "../../assets/images/industry-1.jpg";
import image2 from "../../assets/images/industry-2.jpg";
import image3 from "../../assets/images/industry-3.jpg";
import image4 from "../../assets/images/industry-4.jpg";

export default function IndustriesSegment() {
  return (
    <div className="padding_container">
      <div className="width_container">
        <h3 className={styles.header}>Unity for all industries</h3>
        <div className={styles.cards_container}>
          <IndustryCard
            image={image1}
            title="Games"
            paragraph="Find out why more than 50% of the world’s video games are made with Unity."
            linkText="Level up your game"
          />
          <IndustryCard
            image={image2}
            title="Architecture"
            paragraph="Leap over the competition with instant visualizations and on-the-fly updates."
            linkText="Visualize your project"
          />
          <IndustryCard
            image={image3}
            title="Automotive"
            paragraph="Revolutionize designs with superb fidelity and immersive experiences."
            linkText="Configure your product"
          />
          <IndustryCard
            image={image4}
            title="Film"
            paragraph="Unleash creativity with eye-popping effects and instant renders."
            linkText="Realize your vision"
          />
        </div>
      </div>
    </div>
  );
}
