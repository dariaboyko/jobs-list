import * as React from "react";
import { SVGProps } from "react";

const BookmarkSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M8 7.333a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17.428c0 .874-1.043 1.328-1.683.73l-5.634-5.26a1 1 0 0 0-1.365 0l-5.636 5.26c-.639.598-1.682.144-1.682-.73V7.334Z"
      stroke="#70778B"
      strokeWidth={2}
    />
  </svg>
);

export default BookmarkSVG;
