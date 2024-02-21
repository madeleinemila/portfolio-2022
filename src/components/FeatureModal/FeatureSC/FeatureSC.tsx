import { useCallback, useRef } from "react";
import cx from "classnames";
import styles from "./FeatureSC.module.scss";

const FeatureSC = () => {
  const demoVideoRef = useRef<HTMLVideoElement>(null);

  const playDemoVideoFromTimeInSecs = useCallback((timeSecs: number) => {
    if (demoVideoRef.current) {
      demoVideoRef.current.currentTime = timeSecs;
      demoVideoRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
      if (window.innerWidth < 480) {
        demoVideoRef.current.requestFullscreen();
      }
      demoVideoRef.current.play();
    }
  }, []);

  const handleFormBuildingClick = useCallback(() => {
    playDemoVideoFromTimeInSecs(0);
  }, [playDemoVideoFromTimeInSecs]);

  const handleREClick = useCallback(() => {
    playDemoVideoFromTimeInSecs(47);
  }, [playDemoVideoFromTimeInSecs]);

  const handleCalculationsClick = useCallback(() => {
    playDemoVideoFromTimeInSecs(100);
  }, [playDemoVideoFromTimeInSecs]);

  const handleBulkEditClick = useCallback(() => {
    playDemoVideoFromTimeInSecs(172);
  }, [playDemoVideoFromTimeInSecs]);

  return (
    <div className={styles.featureContentContainer}>
      <p>
        Software engineer for global workplace operations platform & tech unicorn{" "}
        <a className={styles.featureLink} href="https://safetyculture.com/" target="_blank" rel="noreferrer">
          SafetyCulture
        </a>
        , in the flagship &lsquo;Inspections&rsquo; product team.
      </p>
      <br />
      <p>Frontend lead working with: React, TypeScript, Redux, styled-components, Jest, Cypress.</p>
      <p>Backend contributor working with: Go, gRPC, Protocol Buffers, Node, REST APIs.</p>
      <br />
      <p>
        Crafted numerous features for complex form-building and workflow creation tools, such as Excel-style
        calculations with formula validation, interactive onboarding, logic with required actions and evidence, and bulk
        editing.
      </p>
      <br />

      <p>Example reel (buttons jump to a particular feature):</p>
      <div className={styles.buttonGroup}>
        <button className={styles.featureButton} onClick={handleFormBuildingClick}>
          Form-building with logic & repeated sections
        </button>
        <button className={styles.featureButton} onClick={handleREClick}>
          Requiring actions & evidence
        </button>
        <button className={styles.featureButton} onClick={handleCalculationsClick}>
          Calculations with formula validation ✨
        </button>
        <button className={styles.featureButton} onClick={handleBulkEditClick}>
          Bulk edit
        </button>
      </div>
      <video
        ref={demoVideoRef}
        className={cx(styles.fullWidthVideo, styles.videoBorder)}
        preload="metadata"
        playsInline
        muted
        controls
      >
        <source src="/images/features/sc-cafe-example.mp4#t=0.1" type="video/mp4" />
      </video>
      <br />
      <p>Interactive onboarding excerpt:</p>
      <video className={styles.fullWidthVideo} preload="metadata" playsInline muted controls>
        <source src="/images/features/sc-tutorial.mp4#t=0.1" type="video/mp4" />
      </video>
      <br />

      <p>On the trophy shelf:</p>
      <p>🏆 2 x winner (2022, 2023), 1 x top 10 finalist (2021) in company-wide hackathons</p>
      <p>🏆 Winner of quarterly company-wide values award</p>
      <br />
    </div>
  );
};

export default FeatureSC;
