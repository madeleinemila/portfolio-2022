import Image from "next/image";
import cx from "classnames";
import fixtureMotionImage from "../../../../public/images/features/yt-prg-motion-play.jpg";
import fixtureMusicImage from "../../../../public/images/features/yt-prg-music-play.jpg";
import styles from "../shared.module.scss";

const FeatureLighting = () => {
  return (
    <div className={styles.featureFlexColumn}>
      <div>
        <p>A couple of interactive lighting demos created for Production Resource Group (PRG), Las Vegas.</p>
        <br />
        <p>Software built with:</p>
        <ul>
          <li>Max 6</li>
          <li>Processing</li>
        </ul>
      </div>
      <div className={styles.featureFlexRow}>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <a href="https://www.youtube.com/watch?v=HKlNh8WZ-WQ" target="_blank" rel="noreferrer">
            <span className={styles.caption}>Fixture control with music</span>
            <Image src={fixtureMusicImage} alt="Interactive lights and music" layout="responsive" />
          </a>
        </div>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <a href="https://www.youtube.com/watch?v=I5pzQq6Ubhg" target="_blank" rel="noreferrer">
            <span className={styles.caption}>Fixture control with motion</span>
            <Image src={fixtureMotionImage} alt="Interactive lights and movement" layout="responsive" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureLighting;
