import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <p className={styles.greeting}>Hi!</p>
      <p className={styles.intro}>
        <span className={styles.highlight}>I&apos;m Madeleine, a software engineer from Sydney, based in Berlin.</span>
      </p>
      <div className={styles.content}>
        <p>
          I started my career in film, television, music and live events. Inspired by all the web-based innovations I
          saw, I switched into full-time software engineering.
        </p>
        <p>You can now find me developing applications and experimenting in sound, image & code.</p>
      </div>
    </div>
  );
};

export default Intro;
