import React from "react";
import styles from "./Subsection.module.scss";

type SubsectionProps = {
  children: React.ReactNode;
  heading: string;
};

const Subsection = ({ children, heading }: SubsectionProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>{heading}</h4>
      {children}
    </div>
  );
};

export default Subsection;
