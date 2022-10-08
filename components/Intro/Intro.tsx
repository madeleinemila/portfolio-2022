import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <p className={styles.greeting}>Hi!</p>
      <p className={styles.intro}>
        <span className={styles.highlight}>I&apos;m Madeleine, a software engineer from Sydney.</span>
      </p>
      <div className={styles.content}>
        <p>
          I started my career in film, television, music and live events. In these fields, I saw web&#8209;based
          technologies completely transform how we worked, and what we could create.
        </p>
        <p>Inspired by this, I leapt into software engineering and discovered a love of all things code.</p>
      </div>
    </div>
  );
};

export default Intro;
