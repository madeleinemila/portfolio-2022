import { forwardRef, ForwardRefRenderFunction, useEffect } from "react";
import Graph from "../Graph/Graph";
import Nav from "../Nav/Nav";
import styles from "./MainPane.module.scss";

type MainPaneProps = {
  jumpToAbout: () => void;
  jumpToWork: () => void;
  show: () => void;
};

const MainPane: ForwardRefRenderFunction<HTMLDivElement, MainPaneProps> = ({ jumpToAbout, jumpToWork, show }, ref) => {
  useEffect(() => {
    const saveVh = () => {
      // Addressing the Firefox mobile issue of resizing vh/svh/lvh
      // Ref: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/s
      // Get the viewport height and multiple it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01;
      // Then set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    saveVh();

    window.addEventListener("resize", saveVh);

    return () => {
      window.removeEventListener("resize", saveVh);
    };
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <Nav direction="up" label="About" onClick={jumpToAbout} />

      <header className={styles.header}>
        <h1 className={styles.title}>Madeleine Milasas</h1>
        <h2 className={styles.subtitle}>Software Engineer & Maker</h2>
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
