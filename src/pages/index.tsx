import Head from "next/head";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import cx from "classnames";

import AboutPane from "../components/AboutPane/AboutPane";
import MainPane from "../components/MainPane/MainPane";
import WorkPane from "../components/WorkPane/WorkPane";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isFadeComplete, setIsFadeComplete] = useState(false);

  useEffect(() => {
    mainRef.current?.scrollIntoView();
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.getElementById("loader")?.remove();
      document.body.style.overflow = "overlay";
    }
  }, [isLoading]);

  const jumpToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const jumpToMain = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const jumpToWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const show = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Madeleine Milasas - Portfolio</title>
      </Head>

      <>
        {!isFadeComplete && (
          <div
            className={cx(styles.loading, { [styles.fadeOut]: !isLoading })}
            onAnimationEnd={() => setIsFadeComplete(true)}
          />
        )}
        <AboutPane ref={aboutRef} jumpToMain={jumpToMain} jumpToWork={jumpToWork} />
        <MainPane ref={mainRef} jumpToAbout={jumpToAbout} jumpToWork={jumpToWork} show={show} />
        <WorkPane ref={workRef} jumpToMain={jumpToMain} />
      </>
    </>
  );
};

export default Home;
