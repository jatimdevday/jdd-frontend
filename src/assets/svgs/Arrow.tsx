import * as React from "react";

const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={69}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#212121"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M53.932 1.188 68.098 9m0 0-14.166 7.813M68.098 9h-68"
    />
  </svg>
);
export default Arrow;
