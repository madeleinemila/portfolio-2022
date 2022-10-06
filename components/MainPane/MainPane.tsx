import { forwardRef, ForwardRefRenderFunction } from "react";
import dynamic from "next/dynamic";
import Nav from "../Nav/Nav";

const Graph = dynamic(
  () => import("../Graph/Graph").then((mod) => mod.default),
  {
    /* Only import client-side since the window object must be present first */
    ssr: false,
  }
);

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

      <header className={styles.header}>
        <h1 className={styles.title}>Madeleine Milasas</h1>
        <h2 className={styles.subtitle}>Software Engineer</h2>
      </header>

      <Graph />

      <div className={styles.bottomNav}>
        <Nav direction="bottom" label="Work" onClick={goToWork} />
      </div>
    </div>
  );
};

export default forwardRef(MainPane);
