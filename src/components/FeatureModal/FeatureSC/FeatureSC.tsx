import styles from "../shared.module.scss";

const FeatureSC = () => {
  return (
    <div className={styles.featureContentContainer}>
      <p>
        I&apos;m currently working as a software engineer for workplace operations platform & tech unicorn{" "}
        <a className={styles.featureLink} href="https://safetyculture.com/" target="_blank" rel="noreferrer">
          SafetyCulture
        </a>
        .
      </p>
      <p>
        I specialize as a frontend engineer, working with React, TypeScript, Redux, Jest, Cypress. I assist as a backend
        engineer in Go & Node.
      </p>
      <p>🏆 1 x winner, 1 x top 10 finalist in company-wide hackathons</p>
    </div>
  );
};

export default FeatureSC;
