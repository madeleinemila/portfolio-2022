import styles from "../shared.module.scss";

const FeatureSC = () => {
  return (
    <div className={styles.featureContentContainer}>
      <p>
        Software engineer for workplace operations platform & tech unicorn{" "}
        <a className={styles.featureLink} href="https://safetyculture.com/" target="_blank" rel="noreferrer">
          SafetyCulture
        </a>
        .
      </p>
      <br />
      <p>
        Specialized as a frontend engineer, working with React, TypeScript, Redux, Jest, Cypress, and assisted as a
        backend engineer in Go & Node.
      </p>
      <br />
      <p>🏆 2 x winner (2022, 2023), 1 x top 10 finalist (2021) in company-wide hackathons</p>
      <p>🏆 Winner of quarterly company-wide values award</p>
    </div>
  );
};

export default FeatureSC;
