import Image from "next/image";
import cx from "classnames";
import controllerCUImage from "../../../../public/images/features/controllers-cu.jpg";
import controllerWipImage from "../../../../public/images/features/controllers-wip.jpg";
import gehmsGif from "../../../../public/images/features/controller-video-quick.gif";
import gehmsHomeImage from "../../../../public/images/features/gehms-home.jpg";
import gehmsRoidsImage from "../../../../public/images/features/gehms-roids.png";
import styles from "../shared.module.scss";

const FeatureGehms = () => {
  return (
    <div className={styles.featureFlexColumn}>
      <div className={cx(styles.featureFlexRow, styles.wrapReverse)}>
        <div className={styles.featureFlex1}>
          <p>
            Deployed on Heroku:
            <br />
            <a className={styles.featureLink} href="https://gehms.herokuapp.com/" target="_blank" rel="noreferrer">
              gehms.herokuapp.com
            </a>
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
          <p>Three in-browser retro games with real-time hardware controllers.</p>
          <p>Built with:</p>
          <ul>
            <li>JavaScript, Phaser &amp; Ruby on Rails for the games</li>
            <li>Arduino and Node.js for the controllers</li>
          </ul>
          <p>Created for General Assembly&apos;s Software Engineering Immersive, week 9 group assignment.</p>
          <p>
            My role: creating the hardware controllers, and the software to drive their interaction with the browser and
            Phaser games.
          </p>
          <p>
            Highlights: working with WebSockets, Node, and figuring out low latency communication between hardware and
            the browser.
          </p>
        </div>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <Image src={gehmsGif} alt="Game controller demo" layout="responsive" />
        </div>
      </div>
      <div className={styles.featureFlexRow}>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <Image src={controllerWipImage} alt="Controller work in progress" />
        </div>
        <div className={cx(styles.featureFlex1, styles.featureImage)}>
          <Image src={controllerCUImage} alt="Controller close-up" />
        </div>
      </div>
      <div className={styles.centered}>
        <div className={styles.featureImage}>
          <Image src={gehmsHomeImage} alt="Screenshot of homepage" />
        </div>
        <div className={styles.featureImage}>
          <Image src={gehmsRoidsImage} alt="Screenshot of Roids game" />
        </div>
      </div>
    </div>
  );
};

export default FeatureGehms;
