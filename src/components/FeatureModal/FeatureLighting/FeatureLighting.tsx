import cx from "classnames";
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
          <span>Fixture control with music</span>
          <video className={styles.fullWidthVideo} preload="metadata" playsInline controls muted>
            <source src="/images/features/fixture-control-music.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <span>Fixture control with motion</span>
          <video className={styles.fullWidthVideo} preload="metadata" playsInline controls muted>
            <source src="/images/features/fixture-control-motion.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FeatureLighting;
