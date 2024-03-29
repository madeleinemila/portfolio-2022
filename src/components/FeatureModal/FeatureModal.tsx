import React, { useCallback, useEffect, useRef, useState } from "react";
import FocusLock from "react-focus-lock";
import FeatureAnsarada from "./FeatureAnsarada/FeatureAnsarada";
import FeatureBrooklyn from "./FeatureBrooklyn/FeatureBrooklyn";
import FeatureCube from "./FeatureCube/FeatureCube";
import FeatureGehms from "./FeatureGehms/FeatureGehms";
import FeatureLighting from "./FeatureLighting/FeatureLighting";
import FeatureO from "./FeatureO/FeatureO";
import FeatureSC from "./FeatureSC/FeatureSC";
import FeatureSubvixen from "./FeatureSubvixen/FeatureSubvixen";
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
  brooklyn: { heading: "'Brooklyn at Hibernian' - Live music & video", content: <FeatureBrooklyn /> },
  subvixen: { heading: "Subvixen", content: <FeatureSubvixen /> },
  gehms: { heading: "Gehms", content: <FeatureGehms /> },
  lighting: { heading: "Interactive lighting demos", content: <FeatureLighting /> },
  o: { heading: "'Origin of O' - Taikoz Concert", content: <FeatureO /> },
  vivid: { heading: "Vivid Sydney - Dichroic Dimensions", content: <FeatureVivid /> },
  cube: { heading: "Rubik's cube", content: <FeatureCube /> },
};

const FeatureModal = ({ feature, onClose }: FeatureModalProps): JSX.Element => {
  const [revealContent, setRevealContent] = useState<boolean>(false);
  const scrollYRef = useRef<number>(0);

  const escapeToClose = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const { documentElement } = document;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    /* Prevent jump in content */
    if (scrollbarWidth) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    /* For iOS */
    if (window.scrollY) {
      // Store scroll Y pos if it is not 0 (i.e. before scroll pos has reset to top)
      scrollYRef.current = window.scrollY;
    }
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.bottom = "0px";
    document.body.style.left = "0px";
    document.body.style.right = "0px";

    window.addEventListener("keydown", escapeToClose);
    return () => {
      document.body.style.overflow = "overlay";
      document.body.style.paddingRight = "0";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.bottom = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollYRef.current);

      window.removeEventListener("keydown", escapeToClose);
    };
  }, [escapeToClose]);

  const handleAnimationEnd = useCallback(() => {
    setRevealContent(true);
  }, []);

  return (
    <FocusLock returnFocus>
      {/* a11y note: The event listener on this component provides equivalent keyboard interaction to this click handling */}
      <div aria-hidden data-testid="background" className={styles.background} onClick={onClose}>
        <svg className={styles.animatedSquareContainer}>
          <rect className={styles.animatedSquare} onAnimationEnd={handleAnimationEnd} />
        </svg>
      </div>
      {revealContent && (
        <div className={styles.modal}>
          <div className={styles.modalContentContainer}>
            <button className={styles.close} aria-label="Close modal" onClick={onClose}>
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
