import Image from "next/image";
import cx from "classnames";
import tictactoeImage from "../../../../public/images/features/tictactoe-no-header.jpg";
import styles from "../shared.module.scss";

const FeatureTTT = () => {
  return (
    <div className={styles.featureFlexRow}>
      <div className={styles.featureFlex1}>
        <p>
          Deployed on GitHub Pages:
          <br />
          <a
            className={styles.featureLink}
            href="https://madeleinemila.github.io/tictactoe"
            target="_blank"
            rel="noreferrer"
          >
            madeleinemila.github.io/tictactoe
          </a>
        </p>
        <br />
        <p>
          Source code:
          <br />
          <a
            className={styles.featureLink}
            href="https://github.com/madeleinemila/tictactoe"
            target="_blank"
            rel="noreferrer"
          >
            github.com/madeleinemila/tictactoe
          </a>
        </p>
        <br />
        <p>A JavaScript tic tac toe game with ever-increasing board size.</p>
        <p>Created for General Assembly&apos;s Software Engineering Immersive, week 3 solo assignment.</p>
        <p>Highlight: writing my first AI.</p>
      </div>
      <div className={cx(styles.featureFlex1, styles.featureImage, styles.dropShadow)}>
        <a href="https://madeleinemila.github.io/tictactoe" target="_blank" rel="noreferrer">
          <Image src={tictactoeImage} alt="Screenshot of Tic Tac Toe level 10" layout="responsive" />
        </a>
      </div>
    </div>
  );
};

export default FeatureTTT;
