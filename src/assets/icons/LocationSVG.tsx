import { SVGProps } from "react";

const LocationSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={18}
    fill="#878D9D"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 18S13 11.97 13 7s-2.91-7-6.5-7S0 2.03 0 7c0 4.97 6.5 11 6.5 11Zm0-8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
  </svg>
);

export default LocationSVG;
