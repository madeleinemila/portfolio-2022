import React, { useCallback, useEffect, useState } from "react";
import FocusLock from "react-focus-lock";
import FeatureAnsarada from "./FeatureAnsarada/FeatureAnsarada";
import FeatureBrooklyn from "./FeatureBrooklyn/FeatureBrooklyn";
import FeatureCube from "./FeatureCube/FeatureCube";
import FeatureGehms from "./FeatureGehms/FeatureGehms";
import FeatureLighting from "./FeatureLighting/FeatureLighting";
import FeatureO from "./FeatureO/FeatureO";
import FeatureSC from "./FeatureSC/FeatureSC";
import FeatureSubvixen from "./FeatureSubvixen/FeatureSubvixen";
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
  sc: { heading: "Software Engineer\u2060- Safety\u00ADCulture", content: <FeatureSC /> },
  ansarada: { heading: "Software Engineer - Ansarada", content: <FeatureAnsarada /> },
  brooklyn: { heading: "'Brooklyn at Hibernian' - Live music & video", content: <FeatureBrooklyn /> },
  subvixen: { heading: "Subvixen", content: <FeatureSubvixen /> },
  gehms: { heading: "Gehms", content: <FeatureGehms /> },
  ttt: { heading: "Tic tac toe", content: <FeatureTTT /> },
  lighting: { heading: "Interactive lighting demos", content: <FeatureLighting /> },
  o: { heading: "'Origin of O' - Taikoz Concert", content: <FeatureO /> },
  vivid: { heading: "Vivid Sydney - Dichroic Dimensions", content: <FeatureVivid /> },
  cube: { heading: "Rubik's cube", content: <FeatureCube /> },
};

const FeatureModal = ({ feature, onClose }: FeatureModalProps): JSX.Element => {
  const [revealContent, setRevealContent] = useState<boolean>(false);

  const escapeToClose = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "8px"; // Scrollbar width as per CSS

    window.addEventListener("keydown", escapeToClose);
    return () => {
      document.body.style.overflow = "overlay";
      document.body.style.paddingRight = "0";
      window.removeEventListener("keydown", escapeToClose);
    };
  }, [escapeToClose]);

  const handleAnimationEnd = useCallback(() => {
    setRevealContent(true);
  }, []);

  return (
    <FocusLock returnFocus>
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
    </FocusLock>
  );
};

export default FeatureModal;
