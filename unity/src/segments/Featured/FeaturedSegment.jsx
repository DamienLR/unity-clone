import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import styles from "./FeaturedSegment.module.scss";

import image1 from "../../assets/images/featured-1.jpg";
import image2 from "../../assets/images/featured-2.jpg";

export default function FeaturedSegment() {
  return (
    <div className="padding_container">
      <div className="width_container">
        <h3 className={styles.header}>Featured products</h3>
        <div className={styles.cards_container}>
          <FeaturedCard
            image={image1}
            header="Unity Pro"
            description="The complete solution for professionals to create and operate real-time 3D experiences. Put the power of an entire ecosystem of tools, support, and community in your team’s hands to achieve better results, faster."
            link1Text="Subscribe"
            link2Text="Learn more"
          />
          <FeaturedCard
            image={image2}
            header="Unity Gaming Services"
            description="Build your live game in a single modular platform with tools for multiplayer services, game operations, user acquisition, and monetization."
            link1Text="Get started for free"
          />
        </div>
      </div>
    </div>
  );
}
