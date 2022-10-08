import Head from "next/head";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";

import AboutPane from "../components/AboutPane/AboutPane";
import MainPane from "../components/MainPane/MainPane";
import WorkPane from "../components/WorkPane/WorkPane";

const Home: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mainRef.current?.scrollIntoView();
  }, []);

  const jumpToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const jumpToMain = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const jumpToWork = () => {
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
        <AboutPane ref={aboutRef} jumpToMain={jumpToMain} jumpToWork={jumpToWork} />
        <MainPane ref={mainRef} jumpToAbout={jumpToAbout} jumpToWork={jumpToWork} />
        <WorkPane ref={workRef} jumpToMain={jumpToMain} />
      </>
    </>
  );
};

export default Home;
