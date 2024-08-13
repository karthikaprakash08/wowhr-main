/* eslint-disable react/prop-types */
const Card2Icon = ({ filler, innerClass, className }) => (
  <svg
    width="34"
    height="29"
    viewBox="0 0 34 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="7"
      width="20"
      height="29"
      rx="2"
      fill={filler ? filler : "#1850A8"}
      style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }}
    />
    <path
      d="M28 2H29C30.1046 2 31 2.89543 31 4V24C31 25.1046 30.1046 26 29 26H28V2Z"
      fill={filler ? filler : "#1850A8"}
      style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }}
    />
    <path
      d="M6 2H5C3.89543 2 3 2.89543 3 4V24C3 25.1046 3.89543 26 5 26H6V2Z"
      fill={filler ? filler : "#1850A8"}
      style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }}
    />
    <path
      d="M32 4C33.1046 4 34 4.89543 34 6V22C34 23.1046 33.1046 24 32 24V4Z"
      fill={filler ? filler : "#1850A8"}
      style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }}
    />
    <path
      d="M2 4C0.895431 4 0 4.89543 0 6V22C0 23.1046 0.895431 24 2 24V4Z"
      fill={filler ? filler : "#1850A8"}
      style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }}
    />
    <path
      d="M18 16.8293C19.1652 16.4175 20 15.3062 20 14C20 12.3431 18.6569 11 17 11C15.3431 11 14 12.3431 14 14C14 15.3062 14.8348 16.4175 16 16.8293V15.7324C15.4022 15.3866 15 14.7403 15 14C15 12.8954 15.8954 12 17 12C18.1046 12 19 12.8954 19 14C19 14.7403 18.5978 15.3866 18 15.7324V16.8293Z"
      fill={innerClass}
      style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }}
    />
    <path
      d="M14.1428 19.6973C14.3734 19.812 14.6119 19.9132 14.8571 20V17.6476C13.5761 16.9059 12.7143 15.5197 12.7143 13.932C12.7143 11.563 14.6331 9.64255 17 9.64255C19.3669 9.64255 21.2857 11.563 21.2857 13.932C21.2857 15.5197 20.4239 16.9059 19.1428 17.6476V20C19.3881 19.9132 19.6266 19.812 19.8571 19.6973V18.8634C21.5651 17.8745 22.7143 16.0262 22.7143 13.9093C22.7143 10.7507 20.1559 8.19006 17 8.19006C13.8441 8.19006 11.2857 10.7507 11.2857 13.9093C11.2857 16.0262 12.4348 17.8745 14.1428 18.8634V19.6973Z"
      fill={innerClass}
      style={{ transition: "fill 0.4s ease, stroke 0.4s ease" }}
    />
  </svg>
);

export default Card2Icon;
