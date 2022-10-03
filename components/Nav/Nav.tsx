import cx from "classnames";

import styles from "./Nav.module.scss";

type NavDirection = "top" | "bottom";

type NavProps = {
  direction: NavDirection;
  label: string;
  onClick: () => void;
};

const Nav = ({ direction, label, onClick }: NavProps) => {
  return (
    <div role="button" className={styles.container} onClick={onClick}>
      {direction === "top" && <h4 className={styles.chevron}>&circ;</h4>}

      <h4 className={styles.label}>{label}</h4>

      {direction === "bottom" && (
        <h4 className={cx(styles.chevron, styles.chevronDown)}>&circ;</h4>
      )}
    </div>
  );
};

export default Nav;
