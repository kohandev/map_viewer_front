export const getMarkerSvg = (direction: number, isLost: boolean) => `
<svg
  width="32"
  height="32"
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    cx="16"
    cy="16"
    r="7"
    fill="${isLost ? '#ef8181' : '#5499d3'}"
    stroke="white"
    stroke-width="2"
  />

  <g transform="rotate(${direction}, 16, 16)" style="transition: transform 0.2s linear">
    <path
      d="M16 0 L9 14 H23 Z"
      fill="${isLost ? '#9e4949' : '#2b4d6a'}"
    />
  </g>
</svg>
`;
