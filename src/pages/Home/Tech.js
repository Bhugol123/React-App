import React from "react";
import {
  DiAndroid,
  DiAngularSimple,
  DiAppstore,
  DiCss3Full,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiReact,
} from "react-icons/di";

const Tech = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-semibold text-center">Technologies I use</h1>

      <div className="tech-icons grid grid-cols-4 justify-items-center gap-y-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <DiHtml5 size={200} />
        <DiJava size={200} />
        <DiCss3Full size={200} />
        <DiReact size={200} className="animate-bounce" />
        <DiAngularSimple
          size={200}
          className="hover:scale-110 hover:text-pink-700 transition-all "
        />
        <DiJavascript size={200} />
        <DiAppstore size={200} />
        <DiAndroid size={200} className="hover:animate-ping" />
      </div>

      <div className="text-center text-4xl font-bold"> Who am I</div>
      <div className="flex justify-center items-center">
        <div className="h-[390px] w-[390px] mt-7 border-4 border-green-400 bg-black rounded-full text-white  flex flex-col justify-center items-center">
          <div>
            <h1>Name : Bhugol Khatri</h1>
            <h1>Email: bhugolkc07@gmail.com</h1>
            <h1>Tel:977 9840445242</h1>
            <h1>Age:21</h1>
            <h1>Experience:python, java, dart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
