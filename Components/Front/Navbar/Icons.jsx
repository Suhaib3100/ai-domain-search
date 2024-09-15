import React from "react";
export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Lock = ({ fill, size, height, width, ...props }) => {
  const color = fill;

  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(3.5 2)">
        <path
          d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(3.85 0.75)"
        />
        <path
          d="M.5,0V2.221"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(7.91 12.156)"
        />
        <path
          d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(0.75 6.824)"
        />
      </g>
    </svg>
  );
};

export const Activity = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
        <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
        <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
      </g>
    </svg>
  );
};

export const Flash = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 50 50"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 38h38V0H0v38Z"></path>
        </clipPath>
      </defs>
      <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
        <path
          fill="#3b88c3"
          d="M37 5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V5Z"
        ></path>
        <path
          fill="#fff"
          d="M13.793 27.844c0 1.55.992 2.418 2.325 2.418 1.333 0 2.325-.868 2.325-2.418V12.28h5.52c1.58 0 2.263-1.179 2.233-2.233C26.133 9.024 25.327 8 23.963 8h-7.752c-1.519 0-2.418.992-2.418 2.543v17.301Z"
        ></path>
      </g>
    </svg>
  );
};
export const Words = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 50 50"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <clipPath id="a">
          <path d="M0 38h38V0H0v38Z"></path>
        </clipPath>
      </defs>
      <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
        <path
          fill="#3b88c3"
          d="M0 0a4 4 0 0 0-4-4h-28a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V0Z"
          transform="translate(37 5)"
        ></path>
        <path
          fill="#fff"
          d="M0 0c-.093.403-.124.62-.124 1.054 0 .992.837 2.047 2.201 2.047 1.488 0 2.202-.869 2.481-2.233l2.635-13.177h.062l4.031 13.58c.341 1.116 1.272 1.83 2.419 1.83s2.077-.714 2.419-1.83l4.03-13.58h.061L22.852.868c.277 1.364.992 2.233 2.481 2.233 1.363 0 2.201-1.055 2.201-2.047 0-.434-.032-.651-.125-1.054l-3.938-16.929c-.31-1.303-1.334-2.418-3.069-2.418a3.16 3.16 0 0 0-3.069 2.263L13.735-5.116h-.061l-3.597-11.968a3.163 3.163 0 0 0-3.07-2.263c-1.736 0-2.759 1.115-3.069 2.418L0 0Z"
          transform="translate(5.298 27.162)"
        ></path>
      </g>
    </svg>
  );
};
export const Ai1 = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="20 0 110 110"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="#1B1B1B"
        stroke-linecap="round"
        stroke-width="6"
        d="M46 76L58.0844 52.2089C58.1495 52.0807 58.281 52 58.4248 52V52C58.5725 52 58.7069 52.0852 58.77 52.2187L70 76M52 70H63M81 76V52"
      ></path>
      <rect
        width="82"
        height="82"
        x="23"
        y="23"
        stroke="#1B1B1B"
        stroke-width="6"
        rx="20"
      ></rect>
    </svg>
  );
};
export const Ai2 = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="10 20 128 128"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke="#1B1B1B"
        stroke-width="6"
        d="M55.083 68.0001V47.8295C55.083 45.2386 56.5141 42.8596 58.803 41.6455L75.8077 32.6263C76.4756 32.2721 77.1852 32.0028 77.9199 31.8247V31.8247C91.132 28.6231 103.247 40.1201 100.741 53.4815L99.4308 60.464"
      ></path>
      <path
        stroke="#1B1B1B"
        stroke-width="6"
        d="M55.6898 58.6917L73.2238 48.5685C75.4672 47.2732 78.2426 47.3228 80.4383 48.6975L96.9222 59.0174C97.4899 59.3728 98.0161 59.7905 98.4911 60.2628V60.2628C108.373 70.088 104.329 86.8903 91.0588 91.1435L85.4823 92.9308"
      ></path>
      <path
        stroke="#1B1B1B"
        stroke-width="6"
        d="M65.0278 54.6897L82.5617 64.8129C84.8051 66.1081 86.1498 68.5365 86.0572 71.1253L85.3684 90.3777C85.3401 91.1679 85.2101 91.9512 84.9815 92.7082V92.7082C81.0209 105.824 64.9077 110.571 54.4688 101.698L49.9091 97.8221"
      ></path>
      <path
        stroke="#1B1B1B"
        stroke-width="6"
        d="M73.083 60.0001L73.083 81.1103C73.083 83.7077 71.6449 86.0915 69.3472 87.3027L52.1565 96.3647C51.496 96.7128 50.7952 96.9786 50.0699 97.156V97.156C36.8679 100.384 24.6918 89.0047 27.0214 75.6149L28.3462 68.0001"
      ></path>
      <path
        stroke="#1B1B1B"
        stroke-width="6"
        d="M72.4017 70.1317L53.9515 80.3036C51.6604 81.5668 48.8561 81.4468 46.6812 79.9927L29.9329 68.7948C29.5218 68.52 29.1356 68.2097 28.7787 67.8676V67.8676C19.5463 59.0181 22.6016 43.5788 34.5086 38.9126L41.9051 36.014"
      ></path>
      <path
        stroke="#1B1B1B"
        stroke-width="6"
        d="M62.9532 74.1335L44.4512 63.1363C42.2518 61.8289 40.9408 59.4257 41.0323 56.8687L41.7107 37.9075C41.7472 36.8867 41.9514 35.8789 42.3152 34.9244V34.9244C47.2007 22.1063 63.5467 18.3712 73.5146 27.7954L77.0337 31.1225"
      ></path>
    </svg>
  );
};
export const Server = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 21L17 21"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21 21L22 21"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z"
        stroke={fill}
        stroke-width="1.5"
      ></path>
    </svg>
  );
};

export const TagUser = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-square-letter-w"
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke={fill}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {/* <path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
      <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M9 8l1 8l2 -5l2 5l1 -8" />
    </svg>
  );
};
