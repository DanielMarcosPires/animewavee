import React, { ComponentProps } from "react";

export default function Logo({ children, ...props }: ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}
