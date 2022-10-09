import styles from "./BorderedContent.module.scss";

type BorderedContentProps = {
  children: React.ReactNode;
  heading: string;
};

const BorderedContent = ({ children, heading }: BorderedContentProps): JSX.Element => {
  return (
    <div className={styles.borderContainer}>
      <h3 className={styles.heading}>{heading}</h3>
      {children}
    </div>
  );
};

export default BorderedContent;
