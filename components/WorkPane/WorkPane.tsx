import { forwardRef, ForwardRefRenderFunction } from "react";

import BorderedContent from "../BorderedContent/BorderedContent";
import Nav from "../Nav/Nav";
import Thumbnail from "../Thumbnail/Thumbnail";

import ansaradaImage from "../../public/images/thumbnails/ansarada-bnw-invert-2.png";
import cubeImage from "../../public/images/thumbnails/cube-thumb.jpg";
import gehmsImage from "../../public/images/thumbnails/gehms_thumb_lowcon_bnw.jpg";
import lightingImage from "../../public/images/thumbnails/prg_thumb_beams.jpg";
import safetyCultureImage from "../../public/images/thumbnails/sc-logo.png";
import subvixenImage from "../../public/images/thumbnails/subvixen-thumb.jpg";
import triageImage from "../../public/images/thumbnails/triage-thumb.jpg";
import tttImage from "../../public/images/thumbnails/ttt_thumb_blowup.jpg";
import vividImage from "../../public/images/thumbnails/dichroic_thumb_cu1.jpg";

import styles from "./WorkPane.module.scss";

type WorkPaneProps = {
  jumpToMain: () => void;
};

const WorkPane: ForwardRefRenderFunction<HTMLDivElement, WorkPaneProps> = ({ jumpToMain }, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <BorderedContent heading="Professional">
        <div className={styles.thumbnailContainer}>
          <Thumbnail imageData={safetyCultureImage} label="Software Engineer @ SafetyCulture" onClick={console.log} />
          <Thumbnail imageData={ansaradaImage} label="Software Engineer @ Ansarada" onClick={console.log} />
        </div>
      </BorderedContent>
      <BorderedContent heading="Some projects">
        <div className={styles.thumbnailContainer}>
          <Thumbnail imageData={subvixenImage} label="'Subvixen' visual code generator" onClick={console.log} />
          <Thumbnail imageData={triageImage} label="'Triage' knowledge base" onClick={console.log} />
          <Thumbnail imageData={gehmsImage} label="'Gehms' retro games" onClick={console.log} />
          <Thumbnail imageData={tttImage} label="Tic tac toe" onClick={console.log} />
          <Thumbnail imageData={lightingImage} label="Interactive lighting demos" onClick={console.log} />
          <Thumbnail imageData={vividImage} label="Vivid Sydney" onClick={console.log} />
          <Thumbnail imageData={cubeImage} label="Rubik's cube" onClick={console.log} />
        </div>
      </BorderedContent>
      <Nav direction="up" onClick={jumpToMain} variant="block" />
    </div>
  );
};

export default forwardRef(WorkPane);
