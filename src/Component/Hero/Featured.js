import React from "react";
import heart from "../../assets/hearth.png";
import dollor from "../../assets/dollor.png";
import featured1 from "../../assets/featured1.png";
import featured2 from "../../assets/featured2.png";
import featured3 from "../../assets/featured3.png";
import featured4 from "../../assets/featured4.png";

const featuredListings = [
  {
    image: featured1,
    title: "2018 BMW X1 XDRIVE",
    lot: "38498458",
    vin: "WBHT3C3J3H",
    estimatedBid: "$3,690 - $6,510",
    potentialSavings: "$3,500",
  },
  {
    image: featured2,
    title: "2018 BMW X1 XDRIVE",
    lot: "38498458",
    vin: "WBHT3C3J3H",
    estimatedBid: "$3,690 - $6,510",
    potentialSavings: "$3500",
  },
  {
    image: featured3,
    title: "2020 Tesla Model 3",
    lot: "83934832",
    vin: "TESLA90323V",
    estimatedBid: "$25,000 - $30,000",
    potentialSavings: "$3500",
  },
  {
    image: featured4,
    title: "2017 Audi A4",
    lot: "47484938",
    vin: "AUDIA48593K",
    estimatedBid: "$20,000 - $25,000",
    potentialSavings: "$3500",
  },
];

const Featured = () => {
  return (
    <div className="Featured-container max-w-[1364px] bg-[#F8F8F8] mx-auto py-[80px] px-[190px]">
      <div className="heading text-center">
        <h1 className="font-urbanist font-bold text-3xl">Featured Listings</h1>
        <div className="w-[80px] relative  h-1 bg-[#CA0000] mt-2 mx-auto"></div>
      </div>

      <div className="grid grid-cols-4 gap-[20px] mt-10">
        {featuredListings.map((listing, id) => (
          <div
            key={id}
            className="w-[230px] bg-[#ffffff] pt-5 pr-5 pb-3 pl-5 rounded-[20px]"
          >
            <img
              className="rounded-[20px] w-[200px]" 
              src={listing.image}
              alt={listing.title}
            />
            <div className="like-js">
              <button className="bg-black text-white text-sm flex w-16 h-7 rounded-lg justify-center items-center absolute top-[-190px] left-[120px]">
                <img className="w-4 mr-1" src={heart} alt="heart icon" />
                100
              </button>
            </div>
            <h1 className="font-urbanist font-bold text-lg leading-[26px] text-[#1F1F2C] mt-5">
              {listing.title}
            </h1>
            <div className="flex justify-between">
              <div>
                <p className="font-urbanist font-normal text-sm leading-[20px] text-[#7A798A] mt-5">
                  Lot: {listing.lot}
                </p>
                <p className="font-urbanist font-bold text-sm leading-[20px] text-[#1F1F2C] mt-2">
                  VIN: {listing.vin}
                </p>
              </div>
              <div>
                <button className="w-[36px] h-6  bg-[#CA0000] text-white font-urbanist mt-9 rounded-[6px]">
                  BID
                </button>
              </div>
            </div>
            <div className="w-[190px] border  mt-2"></div>
            <div className="last-content flex justify-between">
              <div>
                <p className="font-urbanist text-[10px] text-[#7A798A] mt-1">
                  Estimated Bid
                </p>
                <h1 className="font-urbanist font-bold text-[13px] text-[#1F1F2C]">
                  {listing.estimatedBid}
                </h1>
              </div>
              <div>
                <p className="font-urbanist text-[10px] text-[#7A798A] mt-1">
                  Potential Savings
                </p>
                <div className="flex">
                  <img className="w-[20px]" src={dollor} alt="dollar icon" />
                  <p className="font-urbanist font-bold text-[13px] text-[#7A798A]">
                    {listing.potentialSavings}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
