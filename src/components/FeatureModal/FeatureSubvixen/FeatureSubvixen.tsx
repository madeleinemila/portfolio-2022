import Image from "next/image";
import livestreamImage from "../../../../public/images/features/yt-livestream-play-a.jpg";
import subvixenGif from "../../../../public/images/features/subvixen-demo.gif";
import styles from "./FeatureSubvixen.module.scss";

const FeatureSubvixen = () => {
  return (
    <div className={styles.centered}>
      <p>A pixel-mapper web app, that takes video and generates Arduino code for LED arrays.</p>
      <br />
      <div>
        <div>
          <Image src={subvixenGif} alt="Speed demo of Subvixen" />
        </div>
        <br />
        <p>
          Deployed on Heroku:
          <br />
          <a className={styles.featureLink} href="https://subvixen.herokuapp.com/" target="_blank" rel="noreferrer">
            subvixen.herokuapp.com
          </a>
        </p>
        <br />
        <p>
          Source code:
          <br />
          <a
            className={styles.featureLink}
            href="https://github.com/madeleinemila/subvixen"
            target="_blank"
            rel="noreferrer"
          >
            github.com/madeleinemila/subvixen
          </a>
        </p>
        <br />
        <p>Created for General Assembly&apos;s Software Engineering Immersive, final solo assignment.</p>
        <br />
        <p>Built with:</p>
        <ul>
          <li>HTML5 native video &amp; canvas</li>
          <li>CSS3 + Sass</li>
          <li>JavaScript</li>
          <li>Ruby on Rails</li>
          <li>C & Arduino</li>
        </ul>
      </div>
      <div className={styles.supplement}>
        <a
          href="https://www.youtube.com/embed/t8pxUcoJPww?autoplay=1&rel=0&amp;showinfo=0"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.caption}>Project presentation livestream</span>
          <div className={styles.supplementImage}>
            <Image src={livestreamImage} alt="Presentation video" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default FeatureSubvixen;
