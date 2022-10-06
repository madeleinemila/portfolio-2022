import { forwardRef, ForwardRefRenderFunction } from "react";

import styles from "./AboutPane.module.scss";

const AboutPane: ForwardRefRenderFunction<HTMLDivElement, {}> = (
  _props,
  ref
) => {
  return (
    <div ref={ref} className={styles.container}>
      About info coming soon...
    </div>
  );
};

export default forwardRef(AboutPane);
