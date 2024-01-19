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
      <p>Frontend specialist working with: React, TypeScript, Redux, Styled Components, Jest, Cypress.</p>
      <p>Backend contributor working with: Go, gRPC, Protocol Buffers, Node, REST APIs.</p>
      <br />
      <p>🏆 2 x winner (2022, 2023), 1 x top 10 finalist (2021) in company-wide hackathons</p>
      <p>🏆 Winner of quarterly company-wide values award</p>
      <br />
      <video preload="none" autoPlay playsInline loop muted controls>
        <source src="/images/features/sc-cafe-example.mp4" type="video/mp4" />
      </video>
      <br />
      <video preload="none" autoPlay playsInline loop muted controls>
        <source src="/images/features/sc-tutorial.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default FeatureSC;
