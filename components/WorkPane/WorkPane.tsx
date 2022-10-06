import { forwardRef, ForwardRefRenderFunction } from "react";

import styles from "./WorkPane.module.scss";

const WorkPane: ForwardRefRenderFunction<HTMLDivElement, {}> = (
  _props,
  ref
) => {
  return (
    <div ref={ref} className={styles.container}>
      Work info coming soon.....
    </div>
  );
};

export default forwardRef(WorkPane);
