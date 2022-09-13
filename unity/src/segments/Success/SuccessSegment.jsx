import SuccessArticle from "../../components/SuccessArticle/SuccessArticle";
import Button from "../../components/ui/Button/Button";
import styles from "./SuccessSegment.module.scss";

export default function SuccessSegment() {
  return (
    <div className="padding_container">
      <div className="width_container">
        <h3 className={styles.header}>Everything you need to succeed</h3>
        <p className={styles.paragraph}>
          Unity is so much more than the world’s best real-time development
          platform – it’s also a robust ecosystem designed to enable your
          success. Join our dynamic community of creators so you can tap into
          what you need to achieve your vision.
        </p>
        <Button btnText="Read our blog" btnClass={styles.button} />
        <div className={styles.articles_container}>
          <SuccessArticle
            title="Unity Learn"
            description="Advance your Unity skills with live sessions and over 750 hours of on-demand learning content designed for creators at every skill level."
            linkText="Start learning"
          />
          <SuccessArticle
            title="Asset Store"
            description="Jump-start your project and get to the finish line faster with an ever-growing catalog of free and paid assets and tools."
            linkText="Learn more"
          />
          <SuccessArticle
            title="Documentation"
            description="Get up to speed on Unity features and workflows, and find out how to create and use scripts, with our thorough, well-organized documentation."
            linkText="Learn more"
          />
          <SuccessArticle
            title="Gaming Services"
            description="Everything you need to build, manage and grow your game. Take your game to the next level with battle-tested services for every stage of the development lifecycle."
            linkText="Learn more"
          />
        </div>
      </div>
    </div>
  );
}
