import Head from "next/head";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";

import AboutPane from "../components/AboutPane/AboutPane";
import Nav from "../components/Nav/Nav";
import WorkPane from "../components/WorkPane/WorkPane";

import styles from "./index.module.scss";

const Home: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mainRef.current?.scrollIntoView();
  }, []);

  const goToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goToWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Madeleine Milasas - Developer</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <AboutPane ref={aboutRef} />
        <div ref={mainRef} className={styles.container}>
          <Nav direction="top" label="About" onClick={goToAbout} />
          <header>
            <h1 className={styles.title}>Madeleine Milasas</h1>
            <h2 className={styles.subtitle}>Software Engineer</h2>
          </header>
          {/* Graphic */}
          <Nav direction="bottom" label="Work" onClick={goToWork} />
        </div>
        <WorkPane ref={workRef} />
      </>
    </>
  );
};

export default Home;
