import { SVGProps } from "react";

const ShareSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m20.54 20.91-7.13-4.167a3.3 3.3 0 0 0 .09-.703 3.3 3.3 0 0 0-.09-.703l7.05-4.126a2.98 2.98 0 0 0 2.04.813c1.66 0 3-1.345 3-3.012A3.002 3.002 0 0 0 22.5 6c-1.66 0-3 1.345-3 3.012 0 .241.04.472.09.703l-7.05 4.126a2.98 2.98 0 0 0-2.04-.813c-1.66 0-3 1.345-3 3.012a3.002 3.002 0 0 0 3 3.012c.79 0 1.5-.311 2.04-.813l7.12 4.177c-.05.21-.08.431-.08.652A2.93 2.93 0 0 0 22.5 26a2.93 2.93 0 0 0 2.92-2.932 2.93 2.93 0 0 0-2.92-2.931c-.76 0-1.44.3-1.96.773Z"
        fill="#70778B"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(7.5 6)" d="M0 0h18v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ShareSVG;
