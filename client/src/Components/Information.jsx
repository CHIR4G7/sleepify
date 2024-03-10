import React from "react";
import Info from "./Info";
import { benefits } from "../constants/constants";

const Information = () => {
  

  return (
    <div className="flex flex-col gap-10">

    <div className="lg:hidden">
    <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold mb-11 sm:mr-1">
        Why Should you{" "}
        <span className="text-indigo-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Track
        </span>{" "}
        your{" "}
        <span className="text-indigo-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Sleep Cycles
        </span>
        ?
      </h1>
      <ul className="text-sm sm:text-4xl lg:text-4xl font-bold mb-11 sm:mr-1 list-disc">
      {benefits.map((benefit)=><li className="list-disc mt-2 mb-2">{benefit.description}</li>)}
      </ul>
    </div>
     <div className="lg:mt-[30px] lg:mb-[60px] lg:block hidden">
      <h1 className="text-6xl sm:text-6xl lg:text-7xl font-bold mb-11 sm:mr-1">
        Why Should you{" "}
        <span className="text-indigo-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Track
        </span>{" "}
        your{" "}
        <span className="text-indigo-700 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Sleep Cycles
        </span>
        ?
      </h1>
      <div className="w-full h-[750px] flex justify-center items-center z-0">
        <div className="w-[630px] sm:w-[650px] lg:w-[800px] h-[100px] bg-slate-400 rounded-[50px] flex flex-row"></div>
        <div className="absolute flex flex-row lg:space-x-28 sm:space-x-20 space-x-20">

            {benefits.map((benefit)=><Info key={benefit.id} data={benefit}/>)}
        
         
        </div>
      </div>
    </div>

    </div>
   
   
  );
};

export default Information;
