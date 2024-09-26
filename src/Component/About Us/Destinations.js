import React from "react";
import destibg from '../../assets/destibg.png';

const Destinations = () => {
  return (
    <>
      <div className="container-destination mx-auto w-full justify-center flex flex-col items-center px-[255px] py-[80px]">
        {/* Heading Section */}
        <div className="heading text-center">
          <h1 className="font-urbanist font-bold text-3xl">
            Destinations
          </h1>
          <div className="w-[80px] h-1 bg-[#CA0000] mt-2 mx-auto"></div>
        </div>

        {/* Background Image Section */}
        <div className="w-[1000px] h-[320px] shadow-lg flex justify-center items-center mt-10">
          <div 
            className="relative w-full h-full rounded-[20px] bg-cover shadow-md flex justify-center items-center"
            style={{ backgroundImage: `url(${destibg})` }}
          >
            {/* Buttons inside the background image */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 space-x-4">
              <button className="w-[90px] text-white h-[30px] bg-[#CA0000] rounded-[13px]">Abaco</button>
              <button className="w-[90px] h-[30px] bg-white text-black rounded-[13px]">Bimini</button>
              <button className="w-[90px] h-[30px] bg-white text-black rounded-[13px]">Freeport</button>
              <button className="w-[90px] h-[30px] bg-white text-black rounded-[13px]">Nassau</button>
              <button className="w-[90px] h-[30px] bg-white text-black rounded-[13px]">Eluthera</button>
              <button className="w-[90px] h-[30px] bg-white text-black rounded-[13px]">Exuma</button>
              <button className="w-[90px] h-[30px] bg-white text-black rounded-[13px]">Long</button>
              <button className="w-[90px] h-[30px] bg-white text-black rounded-[13px]">Andros</button>
              <button className="w-[90px] h-[30px] bg-white text-black rounded-[13px]">Chub Cay</button>
              <button className="w-[90px] h-[30px] bg-white text-black rounded-[13px]">Rum Cay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
