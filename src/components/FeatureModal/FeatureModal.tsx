import { useCallback, useEffect, useState } from "react";
import { WorkFeature } from "../types";

import styles from "./FeatureModal.module.scss";

type FeatureModalProps = {
  feature: WorkFeature;
  onClose: () => void;
};

const FeatureModal = ({ feature, onClose }: FeatureModalProps): JSX.Element => {
  const [revealContent, setRevealContent] = useState<boolean>(false);

  useEffect(() => {
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
      {revealContent && <div className={styles.modal}>Feature content coming soon...</div>}
    </>
  );
};

export default FeatureModal;
