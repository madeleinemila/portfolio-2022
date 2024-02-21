import Image from "next/image";
import cx from "classnames";
import cubeImage from "../../../../public/images/features/cube.png";

import styles from "./FeatureCube.module.scss";

const FeatureCube = () => {
  return (
    <>
      <div className={styles.featureFlexRow}>
        <div className={styles.featureFlex3}>
          <p>A 2D interactive Rubik&apos;s Cube map built with Processing.</p>
          <p>Created at Production Resource Group (PRG), Las Vegas, for projection mapping on a 3D cube.</p>
          <br />
          <p>Test it out and view the source code on OpenProcessing.</p>
          <p>
            Start solved:{" "}
            <a
              className={styles.featureLink}
              href="https://www.openprocessing.org/sketch/470700"
              target="_blank"
              rel="noreferrer"
            >
              openprocessing.org/sketch/470700
            </a>
          </p>
          <p>
            Start shuffled:{" "}
            <a
              className={styles.featureLink}
              href="https://www.openprocessing.org/sketch/470724"
              target="_blank"
              rel="noreferrer"
            >
              openprocessing.org/sketch/470724
            </a>
          </p>
        </div>
        <span className={cx(styles.featureFlex2, styles.featureImage)}>
          <Image className={styles.borderRadius} src={cubeImage} alt="Net of the Rubik's cube" placeholder="blur" />
        </span>
      </div>
      <div className={styles.videoContainer}>
        <span>Projection test</span>
        <video
          className={styles.fullWidthVideo}
          preload="metadata"
          playsInline
          controls
          muted
          poster="/images/features/rubiks-cube-projection-poster.jpg"
        >
          <source src="/images/features/rubiks-cube-projection.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default FeatureCube;
