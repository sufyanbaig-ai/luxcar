import React from "react";
import ioc1 from "../../assets/ioc1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import people1 from "../../assets/people1.png";
import people2 from "../../assets/people2.png";
import people3 from "../../assets/people3.png";
import lmarrow from "../../assets/lmarrow.png";
import srchicon from "../../assets/sii.png";

const Heros = () => {
  return (
    <div className="w-[1330px] h-[500px] bgimg mx-auto flex flex-col items-center -mb-[30px]">
      {/* Foreground Content */}
      <div className="relative z-20 w-[1000px] mt-10 mx-auto flex">
        {/* Bid Buy Drive Content */}
        <div className="text-section w-[414px] h-[357px]">
          <h1 className="animated-text text-[50px] w-[320px]">
            Bid, Buy, Drive
          </h1>
          <p className="w-[220px] font-urbanist font-bold -leading-6 text-3xl text-[#343444] mt-5">
            Online Car Auctions with Home Delivery!
          </p>
          <p className="w-[285px] font-urbanist font-normal text-sm text-[#8A8AA0] mt-[10px] text-justify tracking-normal">
            Lorem ipsum dolor sit amet. Ea similique aliquam ut maxime
            necessitatibus est nemo error sed vero sapiente cum quae temporibus
            sed quaerat
          </p>
          <button className="w-[104px] h-[27px] bg-[#DF4949] text-white text-sm font-urbanist rounded-full mt-[17px]">
            Start Bidding
          </button>
          <div className="bottom-icon h-[24px] flex mt-[33px] gap-5">
            <img src={ioc1} alt="ioc1" />
            <img src={icon2} alt="icon2" />
            <img src={icon3} alt="icon3" />
            <img src={icon4} alt="icon4" />
          </div>
        </div>

        {/* 50+ Categories Div */}
        <div className="flex flex-col items-center justify-center w-[100px] h-[115px] bg-mycolor absolute top-[110px] left-[650px]  transform -translate-x-1/2 mt-[-70px] rounded-[15px]">
          <h1 className="font-urbanist text-2xl font-bold">50+</h1>
          <p className="font-urbanist font-medium text-sm text-center mt-2 text-[#7A798A]">
            Categories Available
          </p>
        </div>

        {/* People Container */}
        <div className="people-container w-[220px] h-[300px] bg-white mx-auto p-5 rounded-[20px] mr-[17px] -mt-5">
          <div className="people-img flex justify-center -space-x-4 gap-2">
            <img src={people1} alt="people1" />
            <img src={people2} alt="people2" />
            <img src={people3} alt="people3" />
          </div>
          <div className="w-[190px] h-[287px]">
            <h1 className="font-urbanist font-bold text-sm leading-[28px]">
              12.5K+ People
            </h1>
            <p className="font-urbanist font-normal text-[#14141F] text-sm mt-2">
              has used our services such as selling, buying, or even buying
              their parts.
            </p>
            <div className="button w-[145px] mt-3">
              <div className="grid grid-cols-2 gap-2">
                <button className="w-[56px] h-[26px] border-2 text-sm border-[#DF4949] text-[#DF4949] rounded-full font-urbanist">
                  Bid
                </button>
                <button className="w-[56px] h-[26px] border-2 text-sm border-[#DF4949] text-[#DF4949] rounded-full font-urbanist">
                  Buy
                </button>
                <button className="w-[56px] h-[26px] border-2 text-sm border-[#DF4949] text-[#DF4949] rounded-full font-urbanist">
                  Sell
                </button>
                <button className="w-[75px] h-[26px] border-2 text-sm border-[#DF4949] text-[#DF4949] rounded-full font-urbanist">
                  Consult
                </button>
              </div>
              <div className="learnmore w-[138px] h-[20px] mt-5 flex items-center gap-4">
                <p className="font-urbanist font-semibold cursor-pointer">
                  Learn more
                </p>
                <img
                  className="cursor-pointer"
                  src={lmarrow}
                  alt="learn more"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar Container */}
        <div className="Search-bar-container w-[770px]  gap-3 h-[100px] bg-mycolor flex left-1/2 transform -translate--1/2 mx-auto justify-center items-center absolute bottom-[-77px] rounded-custom ml-[-330px]">
          <div className="w-[80px]">
            <h1 className="font-urbanist font-semibold text-sm">VIN/Lot</h1>
            <input
              type="text"
              placeholder="Type Here..."
              className="w-full mt-2 border-b border-mycolor bg-transparent focus:outline-none"
            />
            <span className="border-2 rotate-custom-90 border-mycolor ml-[5px]"></span>
          </div>
          <div className="w-[90px]">
            <h1 className="font-urbanist font-semibold text-sm">Car Type</h1>
            <select className="w-full mt-2 border-b border-mycolor text-sm bg-transparent text-gray-500">
              <option className="bg-transparent">All Vehicles</option>
            </select>
            <span className="border-2 rotate-custom-90 border-mycolor ml-[5px]"></span>
          </div>
          <div className="w-[90px]">
            <h1 className="font-urbanist font-semibold text-sm">Model</h1>
            <select className="w-full mt-2 border-b border-mycolor text-sm bg-transparent text-gray-500">
              <option className="bg-transparent text-[#ffffffcc]">
                All Models
              </option>
            </select>
            <span className="border-2 rotate-custom-90 border-mycolor ml-[5px]"></span>
          </div>
          <div className="w-[90px]">
            <h1 className="font-urbanist font-semibold text-sm">Source</h1>
            <select className="w-full mt-2 border-b border-mycolor text-sm bg-transparent text-gray-500">
              <option className="bg-transparent text-[#ffffffcc]">
                COPART
              </option>
            </select>
            <span className="border-2 rotate-custom-90 border-mycolor ml-[5px]"></span>
          </div>
          <div className="w-[240px] overflow-hidden">
            <h1 className="font-urbanist font-semibold text-sm">Date</h1>
            <div className="flex space-x-2 mt-2">
              <input
                type="date"
                className="w-[45%] bg-transparent text-gray-500 text-sm focus:outline-none"
              />
              <input
                type="date"
                className="w-[45%] bg-transparent text-gray-500 text-sm focus:outline-none"
              />
            </div>
          </div>
          <div className="searchicon w-[45px] rounded-[15px] bg-[#DF4949] p-3 cursor-pointer">
            <img src={srchicon} alt="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heros;
