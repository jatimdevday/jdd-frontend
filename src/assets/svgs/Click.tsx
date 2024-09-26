import React, { SVGProps } from "react"

const Click = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#212121"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.042 20.172 10.684 15.1m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM9 .75V3m5.834.166-1.591 1.591M17.25 9H15M4.757 13.243l-1.59 1.59M3 9H.75m4.007-4.243-1.59-1.59"
    />
  </svg>
)
export default Click

