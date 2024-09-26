import React from "react";

export const Header = () => {
  return (
<>
<div className="container-header w-[1340px] h-10 bg-[#7A798A] items-center mx-auto hidden md:flex">
      <div className="flex justify-around w-full">
        <div>
          <p className="font-urbanist text-[#FFFFFF] font-bold text-sm mt-1">
            BMW XYZ 2018 IS GOING LIVE FOR AUCTION IN 5 MINUTES!!
          </p>
        </div>
        <div className="flex gap-[8px] items-center">
          <select className="bg-[#7A798A] border border-gray-300 rounded-md py-1 px-3 text-sm text-white">
            <option value="option1">(UTC+00:00) UTC</option>
          </select>
          <select className="bg-[#7A798A] border border-gray-300 rounded-md py-1 px-3 text-sm text-white">
            <option value="option2">English</option>
          </select>
        </div>
      </div>
    </div>
</>
  );
};

export default Header
