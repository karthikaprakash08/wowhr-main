/* eslint-disable react/prop-types */

const Card4Icon = ({ filler, className, innerClass }) => (
  <svg
    width="34"
    height="31"
    viewBox="0 0 34 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34 8.21053C34 6.55367 32.6569 5.21053 31 5.21053H3C1.34315 5.21053 0 6.55367 0 8.21052V12.3684L15.9629 18.2495C16.6323 18.4961 17.3677 18.4961 18.0371 18.2495L34 12.3684V8.21053ZM0 15.0526V27.2632C0 28.92 1.34315 30.2632 3 30.2632H31C32.6569 30.2632 34 28.92 34 27.2632V15.0526L17.9711 20.5362C17.3416 20.7516 16.6584 20.7516 16.0289 20.5362L0 15.0526Z"
      fill={filler}
      style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }}
    />
    <path
      d="M10.7368 3.73684C10.7368 2.07998 12.08 0.736839 13.7368 0.736839H20.2631C21.92 0.736839 23.2631 2.07998 23.2631 3.73684V5.21052H10.7368V3.73684Z"
      fill={filler}
      style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }}
    />
    <path
      d="M13.4211 4.52631C13.4211 3.42174 14.3165 2.52631 15.4211 2.52631H18.579C19.6835 2.52631 20.579 3.42174 20.579 4.52631V5.21052H13.4211V4.52631Z"
      fill={innerClass}
      style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }}
    />
  </svg>
);
export default Card4Icon;
