import cx from "classnames";

import styles from "./Nav.module.scss";

type NavDirection = "down" | "up";
type NavVariant = "light" | "dark" | "block";

type NavProps = {
  direction: NavDirection;
  onClick: () => void;
  ariaLabel?: string;
  label?: string;
  variant?: NavVariant;
};

const Nav = ({ direction, ariaLabel, label, onClick, variant = "light" }: NavProps): JSX.Element => {
  return (
    <button
      aria-label={ariaLabel}
      className={cx(styles.container, {
        [styles.light]: variant === "light",
        [styles.dark]: variant === "dark",
        [styles.block]: variant === "block",
      })}
      onClick={onClick}
    >
      {direction === "up" && (
        <h4 aria-hidden className={styles.chevronUp}>
          &circ;
        </h4>
      )}

      {label && <h4 className={styles.label}>{label}</h4>}

      {direction === "down" && (
        <h4 aria-hidden className={styles.chevronDown}>
          &circ;
        </h4>
      )}
    </button>
  );
};

export default Nav;
