import Image from "next/image";
import cx from "classnames";
import controllerCUImage from "../../../../public/images/features/controllers-cu.jpg";
import controllerWipImage from "../../../../public/images/features/controllers-wip.jpg";
import gehmsGif from "../../../../public/images/features/controller-video-quick.gif";
import gehmsHomeImage from "../../../../public/images/features/gehms-home.jpg";
import gehmsRoidsImage from "../../../../public/images/features/gehms-roids.png";
import styles from "./FeatureGehms.module.scss";

const FeatureGehms = () => {
  return (
    <div className={styles.featureFlexColumn}>
      <div className={cx(styles.featureFlexRow, styles.wrapReverse)}>
        <div className={styles.featureFlex1}>
          <p>Three in-browser retro games with realtime hardware controllers.</p>
          <p>Built with:</p>
          <ul>
            <li>JavaScript, Phaser &amp; Ruby on Rails for the games</li>
            <li>Arduino and Node.js for the controllers</li>
          </ul>
          <br />
          <p>
            Deployed on Render:
            <br />
            <a className={styles.featureLink} href="https://gehms.onrender.com/" target="_blank" rel="noreferrer">
              gehms.onrender.com
            </a>
            <br />
            It may take a few minutes to load as the Render server starts up.
          </p>
          <br />
          <p>
            Source code:
            <br />
            <a
              className={styles.featureLink}
              href="https://github.com/madeleinemila/retro-gaming"
              target="_blank"
              rel="noreferrer"
            >
              github.com/madeleinemila/retro-gaming
            </a>
          </p>
          <br />
          <p>Created for General Assembly&apos;s Software Engineering Immersive, week 9 group assignment.</p>
          <br />
          <p>
            My role: creating the hardware controllers and the software to drive their low latency interaction with the
            browser and Phaser games.
          </p>
        </div>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <Image
            src={gehmsGif}
            alt="Game controller demo"
            style={{ width: "100%", height: "auto" }}
            placeholder="blur"
            blurDataURL={`data:image/png;base64,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`}
            // Adding unoptimized re: issue with deployed gifs not playing
            unoptimized
          />
        </div>
      </div>
      <div className={styles.featureFlexRow}>
        <Image
          className={cx(styles.featureFlex1, styles.featureImage)}
          src={controllerWipImage}
          alt="Controller work in progress"
          style={{ width: "100%", height: "auto" }}
          placeholder="blur"
        />
        <Image
          className={cx(styles.featureFlex1, styles.featureImage)}
          src={controllerCUImage}
          alt="Controller close-up"
          style={{ width: "100%", height: "auto" }}
          placeholder="blur"
        />
      </div>
      <div className={styles.suppImages}>
        <Image
          className={styles.featureImage}
          src={gehmsHomeImage}
          alt="Screenshot of homepage"
          style={{ width: "100%", height: "auto" }}
          placeholder="blur"
        />
        <Image
          className={styles.featureImage}
          src={gehmsRoidsImage}
          alt="Screenshot of Roids game"
          style={{ width: "100%", height: "auto" }}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default FeatureGehms;
