/* eslint-disable react/prop-types */
const CardFrame = ({ filler, stroker, className }) => (
  <svg
    width="228"
    height="273"
    className={className}
    viewBox="0 0 228 273"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="card 2"
      d="M13 0.5H215C221.904 0.5 227.5 6.09644 227.5 13V260C227.5 266.904 221.904 272.5 215 272.5H164.04C158.816 272.5 154.042 269.25 151.309 264.711C149.093 261.03 145.873 256.341 141.377 251.172C132.113 240.518 117.903 239.569 114.342 239.5C113.787 239.49 113.245 239.473 112.687 239.454C109.261 239.341 96.0366 239.638 86.1359 250.157C81.7136 254.856 78.672 259.33 76.6054 263.047C73.6735 268.32 68.3582 272.5 62.4473 272.5H13C6.09644 272.5 0.5 266.904 0.5 260V13C0.5 6.09644 6.09644 0.5 13 0.5Z"
      stroke={stroker ? stroker : "#CECECE"}
      fill={filler ? filler : "none"}
      style={{ transition: "fill 0.3s ease, stroke 0.3s ease" }}
    />
  </svg>
);

export default CardFrame;
