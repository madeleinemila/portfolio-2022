import styles from "../shared.module.scss";

const FeatureAnsarada = () => {
  return (
    <div className={styles.featureContentContainer}>
      <p>
        2.5 years as a software engineer for leading virtual data room provider{" "}
        <a className={styles.featureLink} href="https://ansarada.com/" target="_blank" rel="noreferrer">
          Ansarada
        </a>
        .
      </p>
      <p>As a frontend engineer I worked with: React, Flow, Redux, GraphQL, Jest, WebdriverIO</p>
      <p>As a backend engineer I worked with: .NET Framework, .NET Core</p>
      <p>🏆 3 x winner of company-wide hackathons (3 out of 3 entries)</p>
    </div>
  );
};

export default FeatureAnsarada;
