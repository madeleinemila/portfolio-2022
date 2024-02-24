import Image from "next/image";
import activityImage from "../../../../public/images/features/pathways-activity.png";
import commentsImage from "../../../../public/images/features/pathways-comments.png";
import overviewImage from "../../../../public/images/features/pathways-overview.png";
import topicImage from "../../../../public/images/features/pathways-topic.png";
import styles from "./FeatureAnsarada.module.scss";

const FeatureAnsarada = () => {
  return (
    <div className={styles.featureContentContainer}>
      <p>
        2.5 years as a software engineer for leading virtual data-room provider{" "}
        <a className={styles.featureLink} href="https://ansarada.com/" target="_blank" rel="noreferrer">
          Ansarada
        </a>
        , building document and business management features in a high security environment.
      </p>
      <br />
      <p>Frontend specialist working with: React, Flow, Redux, CSS Modules, GraphQL, Jest, WebdriverIO.</p>
      <p>Backend contributor working with: C#, .NET Framework, .NET Core, REST APIs.</p>
      <p>Workshop contributor in: React, Haskell.</p>
      <br />
      <p>🏆 3 x winner of company-wide hackathons (3 out of 3 entries)</p>
      <br />
      <div className={styles.imageContainer}>
        <Image
          src={overviewImage}
          alt="Screenshot of Ansarada Pathways overview"
          style={{ width: "100%", height: "auto" }}
          placeholder="blur"
        />
        <Image
          src={activityImage}
          alt="Screenshot of Ansarada activity"
          style={{ width: "100%", height: "auto" }}
          placeholder="blur"
        />
        <Image
          src={topicImage}
          alt="Screenshot of an Ansarada Pathways topic"
          style={{ width: "100%", height: "auto" }}
          placeholder="blur"
        />
        <Image
          src={commentsImage}
          alt="Screenshot of Ansarada scorecards and comment"
          placeholder="blur"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default FeatureAnsarada;
