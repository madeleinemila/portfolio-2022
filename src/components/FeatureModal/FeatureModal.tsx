import { useCallback, useEffect, useState } from "react";
import FeatureAnsarada from "./FeatureAnsarada/FeatureAnsarada";
import FeatureCube from "./FeatureCube/FeatureCube";
import FeatureGehms from "./FeatureGehms/FeatureGehms";
import FeatureLighting from "./FeatureLighting/FeatureLighting";
import FeatureSC from "./FeatureSC/FeatureSC";
import FeatureSubvixen from "./FeatureSubvixen/FeatureSubvixen";
import FeatureTriage from "./FeatureTriage/FeatureTriage";
import FeatureTTT from "./FeatureTTT/FeatureTTT";
import FeatureVivid from "./FeatureVivid/FeatureVivid";
import type { FeatureKey } from "../types";

import styles from "./FeatureModal.module.scss";

type FeatureModalProps = {
  feature: FeatureKey;
  onClose: () => void;
};

type FeatureContent = {
  heading: string;
  content: JSX.Element;
};

const featureContentMap: Record<FeatureKey, FeatureContent> = {
  sc: { heading: "Software Engineer - SafetyCulture", content: <FeatureSC /> },
  ansarada: { heading: "Software Engineer - Ansarada", content: <FeatureAnsarada /> },
  subvixen: { heading: "Subvixen", content: <FeatureSubvixen /> },
  triage: { heading: "Triage", content: <FeatureTriage /> },
  gehms: { heading: "Gehms", content: <FeatureGehms /> },
  ttt: { heading: "Tic tac toe", content: <FeatureTTT /> },
  lighting: { heading: "Interactive lighting demos", content: <FeatureLighting /> },
  vivid: { heading: "Vivid Sydney - Dichroic Dimensions", content: <FeatureVivid /> },
  cube: { heading: "Rubik's cube", content: <FeatureCube /> },
};

const FeatureModal = ({ feature, onClose }: FeatureModalProps): JSX.Element => {
  const [revealContent, setRevealContent] = useState<boolean>(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleAnimationEnd = useCallback(() => {
    setRevealContent(true);
  }, []);

  return (
    <>
      <div className={styles.background} onClick={onClose}>
        <svg className={styles.animatedSquareContainer}>
          <rect className={styles.animatedSquare} onAnimationEnd={handleAnimationEnd} />
        </svg>
      </div>
      {revealContent && (
        <div className={styles.modal}>
          <div className={styles.modalContentContainer}>
            <button className={styles.close} aria-label="close modal" onClick={onClose}>
              ×
            </button>
            <h2 className={styles.heading}>{featureContentMap[feature].heading}</h2>
            {featureContentMap[feature].content}
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureModal;