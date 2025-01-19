import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-pink-300 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl underline text-2xl font-medium title-font text-blue-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-300 flex-shrink-0">
                    <AiOutlineCheckSquare />
                  </div>
                  <h2 className="text-pink-300 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-red-500 rounded-xl">
                    <div className="absolute bg-black h-1 rounded-xl w-[90%]"></div>
                    <p className="font-bold text-blue-900 text-right">90%</p>
                  </div>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-300 flex-shrink-0">
                    <AiOutlineCheckSquare />
                  </div>
                  <h2 className="text-pink-300 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-red-500 rounded-xl">
                    <div className="absolute bg-black h-1 rounded-xl w-[90%]"></div>
                    <p className="font-bold text-blue-900 text-right">85%</p>
                  </div>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-300 flex-shrink-0">
                    <AiOutlineCheckSquare />
                  </div>
                  <h2 className="text-pink-300 text-lg title-font font-medium">
                    JavaScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-red-500 rounded-xl">
                    <div className="absolute bg-black h-1 rounded-xl w-[80%]"></div>
                    <p className="font-bold text-blue-900 text-right">80%</p>
                  </div>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-300 flex-shrink-0">
                    <AiOutlineCheckSquare />
                  </div>
                  <h2 className="text-pink-300 text-lg title-font font-medium">
                    TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-red-500 rounded-xl">
                    <div className="absolute bg-black h-1 rounded-xl w-[95%]"></div>
                    <p className="font-bold text-blue-900 text-right">85%</p>
                  </div>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-300 flex-shrink-0">
                    <AiOutlineCheckSquare />
                  </div>
                  <h2 className="text-pink-300 text-lg title-font font-medium">
                    Next.js
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-red-500 rounded-xl">
                    <div className="absolute bg-black h-1 rounded-xl w-[80%]"></div>
                    <p className="font-bold text-blue-900 text-right">80%</p>
                  </div>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-pink-300 flex-shrink-0">
                    <AiOutlineCheckSquare />
                  </div>
                  <h2 className="text-pink-300 text-lg title-font font-medium">
                    CyberSecurity
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-red-500 rounded-xl">
                    <div className="absolute bg-black h-1 rounded-xl w-[85%]"></div>
                    <p className="font-bold text-blue-900 text-right">85%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
