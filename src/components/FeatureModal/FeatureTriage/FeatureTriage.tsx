import Image from "next/image";
import cx from "classnames";
import triageHomeImage from "../../../../public/images/features/triage-home-new.jpg";
import triagePinsImage from "../../../../public/images/features/triage-pins-new.jpg";
import triageSearchImage from "../../../../public/images/features/triage-search-new.jpg";
import triageSignupImage from "../../../../public/images/features/triage-signup-new.jpg";
import styles from "../shared.module.scss";

const FeatureTriage = () => {
  return (
    <div className={styles.featureFlexColumn}>
      <div className={styles.featureFlexRow}>
        <div className={styles.featureFlex2}>
          <p>
            Deployed on Heroku:
            <br />
            <a className={styles.featureLink} href="https://triage.herokuapp.com" target="_blank" rel="noreferrer">
              triage.herokuapp.com
            </a>
          </p>
          <br />
          <p>
            Source code:
            <br />
            <a
              className={styles.featureLink}
              href="https://github.com/madeleinemila/triage-app"
              target="_blank"
              rel="noreferrer"
            >
              github.com/madeleinemila/triage-app
            </a>
          </p>
          <br />
          <p>A knowledge base app for tech-troubleshooting.</p>
          <p>Built with:</p>
          <ul>
            <li>Ruby on Rails</li>
            <li>JavaScript</li>
            <li>HTML5, CSS3 + SASS</li>
            <li>PostgreSQL</li>
          </ul>
          <br />
          <p>Created for General Assembly&apos;s Software Engineering Immersive, week 6 solo assignment.</p>
          <p>Highlights: building a full-stack application with fuzzy search and bookmarking.</p>
        </div>
        <div className={cx(styles.featureFlex3, styles.featureImage)}>
          <Image src={triageHomeImage} alt="Screenshot of public home page" />
        </div>
      </div>
      <div className={styles.featureFlexRow}>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <Image src={triageSearchImage} alt="Screenshot of search working for a misspelt word" />
        </div>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <Image src={triageSignupImage} alt="Screenshot of signup page" />
        </div>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <Image src={triagePinsImage} alt="Screenshot of pins feature" />
        </div>
      </div>
    </div>
  );
};

export default FeatureTriage;
