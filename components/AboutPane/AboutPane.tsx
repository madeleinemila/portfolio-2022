import { forwardRef, ForwardRefRenderFunction } from "react";

import Intro from "../Intro/Intro";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";

import styles from "./AboutPane.module.scss";

type AboutPaneProps = {
  jumpToMain: () => void;
  jumpToWork: () => void;
};

const AboutPane: ForwardRefRenderFunction<HTMLDivElement, AboutPaneProps> = ({ jumpToMain, jumpToWork }, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.borderedContent}>
        <h3 className={styles.borderedContentHeading}>About</h3>

        <Intro />

        <Profile onJumpToWork={jumpToWork} />

        <Nav direction="down" onClick={jumpToMain} isDark />
      </div>
    </div>
  );
};

export default forwardRef(AboutPane);
