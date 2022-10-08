import { forwardRef, ForwardRefRenderFunction } from "react";

import BorderedContent from "../BorderedContent/BorderedContent";
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
      <BorderedContent heading="About">
        <Intro />
        <Profile onJumpToWork={jumpToWork} />
        <Nav direction="down" onClick={jumpToMain} variant="dark" />
      </BorderedContent>
    </div>
  );
};

export default forwardRef(AboutPane);
