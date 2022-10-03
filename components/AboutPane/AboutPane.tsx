import { forwardRef, ForwardRefRenderFunction } from "react";

const AboutPane: ForwardRefRenderFunction<HTMLDivElement, {}> = (
  _props,
  ref
) => {
  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "100vh", background: "white" }}
    >
      About info coming soon...
    </div>
  );
};

export default forwardRef(AboutPane);
