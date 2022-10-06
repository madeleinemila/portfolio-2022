import React, { ForwardRefRenderFunction } from "react";

import Nav from "../Nav/Nav";

import styles from "./MainPane.module.scss";

type MainPaneProps = {
  goToAbout: () => void;
  goToWork: () => void;
};

const MainPane: ForwardRefRenderFunction<HTMLDivElement, MainPaneProps> = (
  { goToAbout, goToWork },
  ref
) => {
  return (
    <div ref={ref} className={styles.container}>
      <Nav direction="top" label="About" onClick={goToAbout} />

      <header>
        <h1 className={styles.title}>Madeleine Milasas</h1>
        <h2 className={styles.subtitle}>Software Engineer</h2>
      </header>

      {/* Graphic */}

      <Nav direction="bottom" label="Work" onClick={goToWork} />
    </div>
  );
};

export default React.forwardRef(MainPane);
