import React from "react";
import fbicon from "../../assets/fbicon.png";
import sendsms from "../../assets/sendsms.png"
import linkedin from "../../assets/linkedinicon.png";
import luxlogo from "../../assets/luxlogo.png";
import google from "../../assets/google.png";
import xxx from "../../assets/xxx.png";

const Footerfm = () => {
  return (
    <>
      <div className="container-footer max-w-[1365px] h-[255px] bg-[#F8F8F8] py-[50px] px-[200px] mx-auto">
        <div className="flex gap-[20px]">
          {/* Logo and Icon Section */}
          <div>
            <img className="w-[150px]" src={luxlogo} alt="Lux Logo" />
            <p className="w-[255px] font-urbanist text-sm mt-1 text-[#1F1F2C]">
              Trust in the Lord with all your heart, And lean not on your own
              understanding; In all your ways acknowledge Him,And He shall
              direct your paths.
            </p>
            <h4 className="font-urbanist text-sm text-[#1F1F2C]">
              ~ Proverbs 3:5-6
            </h4>
            {/* Icons */}
            <div className="flex gap-4 mt-3">
              <div className="w-[30px] h-[30px] bg-[#EBEBEB] flex items-center justify-center rounded-[8px]">
                <img className="w-[20px]" src={fbicon} alt="Facebook Icon" />
              </div>
              <div className="w-[30px] h-[30px] bg-[#EBEBEB] flex items-center justify-center rounded-[8px]">
                <img className="w-[20px]" src={xxx} alt="XXX Icon" />
              </div>
              <div className="w-[30px] h-[30px] bg-[#EBEBEB] flex items-center justify-center rounded-[8px]">
                <img className="w-[20px]" src={google} alt="Google Icon" />
              </div>
              <div className="w-[30px] h-[30px] bg-[#EBEBEB] flex items-center justify-center rounded-[8px]">
                <img className="w-[20px]" src={linkedin} alt="LinkedIn Icon" />
              </div>
            </div>
          </div>

          {/* Pages Links Footer */}
          <div className="flex gap-10 mt-5">
            <div className="font-urbanist text-sm leading-8 flex flex-col">
              <h1 className="font-bold">Shipping Destinations</h1>
              <a href="#">Nassu</a>
              <a href="#">Freeport</a>
              <a href="#">Abaco</a>
              <a href="#">Bimini</a>
            </div>
            <div className="font-urbanist text-sm leading-8 flex flex-col">
              <h1 className="font-bold">Useful Links</h1>
              <a href="#">Influencer Partners</a>
              <a href="#">Privacy Policies</a>
              <a href="#">Terms Conditions</a>
              <a href="#">Fees</a>
            </div>
            <div className="font-urbanist text-sm leading-8 flex flex-col">
              <h1 className="font-bold">Company</h1>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Account</a>
              <a href="#">Discover</a>
            </div>
            <div>
              <h1 className=" font-urbanist text-sm font-bold mt-2">
                Subscribe
              </h1>
              <p className="w-[100px] font-bold text-[10px] mt-5  font-urbanist">
                HeadQuarters: Abaco, Bahamas
              </p>
              <p className="text-[10px] font-bold font-urbanist">
                Ph no.: +12428259510
              </p>
              <div className="flex items-center font-urbanist mt-2">
                <input
                  type="email"
                  placeholder="Info@yourgmail.com"
                  className="w-[187px] h-[30px] border rounded-md p-2"
                />
                <span className="w-[30px] cursor-pointer h-[28px] bg-[#CA0000] flex justify-center items-center rounded-[6px]"><img src={sendsms} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerfm;
