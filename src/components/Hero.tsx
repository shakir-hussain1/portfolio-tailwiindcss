import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" min-h-screen bg-no-repeat bg-[url(/pp.jpg)] bg-cover"
      style={{
        backgroundSize: "30%",
        backgroundPosition: "left 100px top 100px",
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>

        {/* Text Adjusted */}
        <div className="text-[70px] sm:text-[100px] font-bold leading-tight flex justify-center items-center text-red-900">
          <div>
            <p>I, am Shakir Hussain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
