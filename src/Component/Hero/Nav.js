import React from "react";
import Logo from "../../assets/Logo.png";
import usericon from "../../assets/usericon.png";
import Hamburger from "../../assets/Hamburger.png";

const Nav = () => {
  return (
    <div className="nav-container w-[1200px] mt-3 h-[57px] bg-[#ffffff] flex justify-between items-center mx-auto border-b border-gray-300 px-4 md:px-8">
      
      {/* First div containing Logo and Anchor links */}
      <div className="flex items-center gap-[11px]">
        <img src={Logo} alt="Logo" className="w-[157px] cursor-pointer" />
        <div className="hidden md:flex justify-center font-bold items-center text-sm w-[440px] space-x-3 font-urbanist text-[#7A798A]">
          <a href="#" className="navHover">How it works</a>
          <a href="#" className="navHover">Fees</a>
          <a href="#" className="navHover">About</a>
          <a href="#" className="navHover">Help</a>
          <a href="#" className="navHover">Contact</a>
          <a href="#" className="navHover">Upload Vehical</a>
        </div>
      </div>

      {/* Second div containing usericon, login button, and demo button */}
      <div className="hidden md:flex items-center gap-[10px]">
        <img src={usericon} className="w-[15px] navHover cursor-pointer" alt="User Icon" />
        <button className="navHover font-urbanist font-bold text-sm leading-6 text-[#7A798A] w-[150px] h-[26px]">
          Login / SignUp
        </button>
        <button className="w-[100px] h-[25px] bg-[#CA0000] text-sm text-[#ffffff] rounded-[30px]">
          Try Demo
        </button>
      </div>

      {/* Hamburger icon for mobile view */}
      <button className="flex md:hidden items-center justify-center p-2">
        <img src={Hamburger} alt="Hamburger Icon" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Nav;
