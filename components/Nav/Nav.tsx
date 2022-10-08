import cx from "classnames";

import styles from "./Nav.module.scss";

type NavDirection = "down" | "up";

type NavProps = {
  direction: NavDirection;
  onClick: () => void;
  isDark?: boolean;
  label?: string;
};

const Nav = ({ direction, isDark, label, onClick }: NavProps): JSX.Element => {
  return (
    <button
      aria-label={label || direction}
      className={cx(styles.container, { [styles.dark]: isDark })}
      onClick={onClick}
    >
      {direction === "up" && <h4 className={styles.chevronUp}>&circ;</h4>}

      {label && <h4 className={styles.label}>{label}</h4>}

      {direction === "down" && <h4 className={styles.chevronDown}>&circ;</h4>}
    </button>
  );
};

export default Nav;
