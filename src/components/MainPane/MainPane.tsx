import { forwardRef, ForwardRefRenderFunction } from "react";
import Graph from "../Graph/Graph";
import Nav from "../Nav/Nav";
import styles from "./MainPane.module.scss";

type MainPaneProps = {
  jumpToAbout: () => void;
  jumpToWork: () => void;
  show: () => void;
};

const MainPane: ForwardRefRenderFunction<HTMLDivElement, MainPaneProps> = ({ jumpToAbout, jumpToWork, show }, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <Nav direction="up" label="About" onClick={jumpToAbout} />

      <header className={styles.header}>
        <h1 className={styles.title}>Madeleine Milasas</h1>
        <h2 className={styles.subtitle}>Software Engineer</h2>
      </header>

      <div className={styles.bottomNav}>
        <Nav direction="down" label="Work" onClick={jumpToWork} />
      </div>

      <div className={styles.graphContainer}>
        <Graph onGraphLoad={show} />
      </div>
    </div>
  );
};

export default forwardRef(MainPane);
