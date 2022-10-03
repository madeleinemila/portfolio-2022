import { forwardRef, ForwardRefRenderFunction } from "react";

const WorkPane: ForwardRefRenderFunction<HTMLDivElement, {}> = (
  _props,
  ref
) => {
  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "100vh", background: "white" }}
    >
      Work info coming soon.....
    </div>
  );
};

export default forwardRef(WorkPane);
