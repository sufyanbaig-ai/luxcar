import React from "react";
import v1 from "../../src/assets/images/1vector.png";
import v2 from "../../src/assets/images/2vector.png";
import v3 from "../../src/assets/images/v3.png";
const Choose = () => {
  return (
    <>
      <div className="container-choose mt- flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mt-[54px]">Why Choose Us</h2>
          <div className="w-[80px] h-[3px] bg-[#CA0000] ml-[90px] mt-1"></div>
          <div className="mt-2 w-[80px] h-1 mx-auto"></div>
        </div>

        {/* Choose Us Cards Code 1*/}
        <div className="w-[1411px] h-[474.09px] text-center mb-20 pt-[62px] pr-[37.75px] pb-[62px] pl-[37.75px] shadow-lg gap-[47px] flex">
            <div className="gap-[19px]  flex flex-col justify-center items-center" >
                <div className="w-[102px] h-[114px] bg-[#DF4949] flex justify-center items-center rounded-[30px] "> 
                    <img className="" src={v1} /></div>
                    <h1 className="font-bold leading-[30px] ">Expertise</h1>
                    <p className="w-[413px] ">With extensive experience in both the Bahamas and the United States, our team brings a wealth of knowledge and expertise to the table. Our partnerships with top freight brokers and industry professionals ensure that we provide the best service possible.</p>
            </div>
        {/* Choose Us Cards Code 2*/}
            <div className="gap-[19px]  flex flex-col justify-center items-center" >
                <div className="w-[102px] h-[114px] bg-[#DF4949] flex justify-center items-center rounded-[30px] "> 
                    <img className="" src={v2} /></div>
                    <h1 className="font-bold leading-[30px] ">Comprehensive Service</h1>
                    <p className="w-[413px] ">From vehicle selection to customs clearance, we handle every aspect of the car buying process. Our 100% hands-off paperwork process means you can sit back and relax while we take care of everything.</p>
            </div>
        {/* Choose Us Cards Code 3*/}
            <div className="gap-[19px]  flex flex-col justify-center items-center" >
                <div className="w-[102px] h-[114px] bg-[#DF4949] flex justify-center items-center rounded-[30px] "> 
                    <img className="" src={v3} /></div>
                    <h1 className="font-bold leading-[30px] ">Customer Focus</h1>
                    <p className="w-[413px] ">Our clients are at the heart of everything we do. We prioritize top-tier communication, offering updates and support every step of the way. Your satisfaction is our ultimate goal.</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
