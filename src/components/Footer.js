import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0000000"
          fillOpacity="1"
          d="M0,192L1440,96L1440,320L0,320Z"
        ></path>
      </svg>
      <div className="absolute bottom-0 text-white inset-x-0 top-[50%] flex justify-center flex-col items-center">
        <h1>Develop By</h1>
        <h1>Some One Anonymous</h1>
      </div>
    </div>
  );
};

export default Footer;
