import React from "react";

const Displaysec = () => {
  return (
    <div className="grid grid-cols-2 items-center sm:grid-cols-1">
      <div className="dis-sec">
        <dotlottie-player
          src="https://lottie.host/24590414-81cb-4e76-9ff9-154aa1cca69d/sUoD2tUtFl.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>

      <div className="dis-info space-y-1 sm:text-center sm:px-4">
        <h1 className="text-3xl font-bold ">Hi, I am John</h1>
        <p className="text-pink-900 italic ">Some Dev, Freelancer, Rounder</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in qui
          voluptate possimus, accusantium placeat earum cupiditate molestiae
          consequuntur eius recusandae adipisci corporis explicabo rerum
          voluptatibus nemo accusamus reprehenderit at?
        </p>
      </div>
    </div>
  );
};

export default Displaysec;
