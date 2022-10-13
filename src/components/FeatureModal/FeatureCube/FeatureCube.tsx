import Image from "next/image";
import cubeImage from "../../../../public/images/features/cube.png";

import styles from "../shared.module.scss";

const FeatureCube = () => {
  return (
    <div className={styles.featureFlexRow}>
      <div className={styles.featureFlex3}>
        <p>A 2D interactive Rubik&apos;s Cube map built with Processing.</p>
        <p>Created for Production Resource Group (PRG), Las Vegas, for projection mapping on a 3D cube.</p>
        <br />
        <p>Play and check out the source code on OpenProcessing</p>
        <p>
          Test it out unshuffled:{" "}
          <a
            className={styles.featureLink}
            href="https://www.openprocessing.org/sketch/470700"
            target="_blank"
            rel="noreferrer"
          >
            https://www.openprocessing.org/sketch/470700
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
            https://www.openprocessing.org/sketch/470724
          </a>
        </p>
      </div>
      <a
        href="https://www.openprocessing.org/sketch/470724"
        target="_blank"
        rel="noreferrer"
        className={styles.featureFlex2}
      >
        <Image src={cubeImage} alt="Net of the Rubik's cube" />
      </a>
    </div>
  );
};

export default FeatureCube;
