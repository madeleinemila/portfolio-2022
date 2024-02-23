import { forwardRef, ForwardRefRenderFunction, useCallback, useState } from "react";

import BorderedContent from "../BorderedContent/BorderedContent";
import FeatureModal from "../FeatureModal/FeatureModal";
import Nav from "../Nav/Nav";
import Thumbnail from "../Thumbnail/Thumbnail";

import ansaradaImage from "../../../public/images/thumbnails/ansarada-bnw-invert-2.png";
import brooklynImage from "../../../public/images/thumbnails/brooklyn-thumb.png";
import cubeImage from "../../../public/images/thumbnails/cube-w-r.png";
import gehmsImage from "../../../public/images/thumbnails/controllers-cu.jpg";
import lightingImage from "../../../public/images/thumbnails/console-1.png";
import oImage from "../../../public/images/thumbnails/o_thumb.jpg";
import safetyCultureImage from "../../../public/images/thumbnails/sc-logo.png";
import subvixenImage from "../../../public/images/thumbnails/light-pixels-1.jpg";
import vividImage from "../../../public/images/thumbnails/dichroic-color.png";
import type { FeatureKey } from "../types";

import styles from "./WorkPane.module.scss";

type WorkPaneProps = {
  jumpToMain: () => void;
};

const WorkPane: ForwardRefRenderFunction<HTMLDivElement, WorkPaneProps> = ({ jumpToMain }, ref) => {
  const [feature, setFeature] = useState<FeatureKey | null>(null);

  const handleFeatureClose = useCallback(() => {
    setFeature(null);
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      {feature && <FeatureModal feature={feature} onClose={handleFeatureClose} />}

      <BorderedContent heading="Professional">
        <div className={styles.thumbnailContainer}>
          <Thumbnail
            isActiveFeature={feature === "sc"}
            imageData={safetyCultureImage}
            label="Software Engineer @ SafetyCulture"
            onClick={() => setFeature("sc")}
          />
          <Thumbnail
            isActiveFeature={feature === "ansarada"}
            imageData={ansaradaImage}
            label="Software Engineer @ Ansarada"
            onClick={() => setFeature("ansarada")}
          />
        </div>
      </BorderedContent>

      <BorderedContent heading="Projects">
        <div className={styles.thumbnailContainer}>
          <Thumbnail
            isActiveFeature={feature === "brooklyn"}
            imageData={brooklynImage}
            label='"Brooklyn at Hibernian" live music & video'
            onClick={() => setFeature("brooklyn")}
          />
          <Thumbnail
            isActiveFeature={feature === "subvixen"}
            imageData={subvixenImage}
            label='"Subvixen" LED pixel mapper'
            onClick={() => setFeature("subvixen")}
          />
          <Thumbnail
            isActiveFeature={feature === "gehms"}
            imageData={gehmsImage}
            label='"Gehms" retro games'
            onClick={() => setFeature("gehms")}
          />
          <Thumbnail
            isActiveFeature={feature === "lighting"}
            imageData={lightingImage}
            label="Interactive lighting demos"
            onClick={() => setFeature("lighting")}
          />
          <Thumbnail
            isActiveFeature={feature === "cube"}
            imageData={cubeImage}
            label="Rubik's cube"
            onClick={() => setFeature("cube")}
          />
          <Thumbnail
            isActiveFeature={feature === "o"}
            imageData={oImage}
            label='"Origin of O" live show'
            onClick={() => setFeature("o")}
          />
          <Thumbnail
            isActiveFeature={feature === "vivid"}
            imageData={vividImage}
            label="Vivid Sydney"
            onClick={() => setFeature("vivid")}
          />
        </div>
      </BorderedContent>

      <Nav direction="up" onClick={jumpToMain} variant="block" ariaLabel="back to landing page" />
    </div>
  );
};

export default forwardRef(WorkPane);
