import React from "react";
import heart from "../../assets/hearth.png";
import lo1 from "../../assets/lo1.png";
import lo2 from "../../assets/lo2.png";
import lo3 from "../../assets/lo3.png";
import lo4 from "../../assets/lo4.png";

const Buynow = [
  {
    image: lo1,
    fbtn: "🔥 05 : 12 : 07 : 45",
    title: "Hyundai Sonata",
    head1: "Creator",
    head2: "SalvadorDali",
    head3: "Current Bid",
    price: "$750",
    lastbtn: "Buy Now in $6,000",
  },

  {
    image: lo2,
    fbtn: "🔥 05 : 12 : 07 : 45",
    title: "Cheverlot Crusie",
    head1: "Creator",
    head2: "Trista Francis",
    head3: "Current Bid",
    price: "$750",
    lastbtn: "Buy Now in $22,000",
  },

  {
    image: lo3,
    fbtn: "🔥 05 : 12 : 07 : 45",
    title: "RAM 1500",
    head1: "Creator",
    head2: "Freddie Carp",
    head3: "Current Bid",
    price: "$1,350",
    lastbtn: "Buy Now in $13,000",
  },

  {
    image: lo4,
    fbtn: "🔥 05 : 12 : 07 : 45",
    title: "Toyota FJ",
    head1: "Creator",
    head2: "Tyler Covington",
    head3: "Current Bid",
    price: "$20.000",
    lastbtn: "Buy Now in $11,000",
  },
];

const BuyNow = () => {
  return (
    <>
      <div className="bidnow-container max-w-[1365px] flex justify-center items-center flex-col mx-auto bg-[#F8F8F8]  p-[80px] px-[200px] cursor-pointer">
        {/* Header Local Offer */}
        <div className="heading text-center">
          <h1 className="font-urbanist font-bold text-3xl">Buy Now</h1>
          <div className="w-[80px] h-1 bg-[#CA0000] mt-2 mx-auto"></div>
        </div>

        <div className="flex gap-[30px]">
          {Buynow.map((data, id) => (
            <div className="flex gap-[30px] mt-5 rounded-[20px] ">
              <div
                className="w-[236px]  p-5 shadow-lg rounded-[20px] relative"
                key={id}
              >
                <img src={data.image} alt="car" className="w-[207px]" />

                <div className="w-[151px] h-[36px] bg-[#FFFFFF] flex items-center justify-center absolute mt-[-39px] ml-[25px] rounded-[13px]">
                  <p>{data.fbtn}</p>
                </div>

                <button className="bg-black text-white text-sm flex w-16 h-7 rounded-lg justify-center items-center absolute top-[25px] right-[25px]">
                  <img className="w-4 mr-1" src={heart} alt="heart icon" />
                  100
                </button>

                <div className="flex justify-between mt-5">
                  <h1 className="font-urbanist text-lg font-bold">
                    {data.title}
                  </h1>
                  <button className="w-[43px] h-[24px] text-sm bg-[#CA0000] font-urbanist text-[#ffffff] rounded-[7px]">
                    BID
                  </button>
                </div>

                <div className="flex justify-between mt-3">
                  <div>
                    <p className="text-[#7A798A] font-urbanist font-normal">
                      {data.head1}
                    </p>
                    <h1 className="font-urbanist font-bold text-sm leading-[22px]">
                      {data.head2}
                    </h1>
                  </div>

                  <div>
                    <p className="text-[#7A798A] font-urbanist font-normal">
                      {data.head3}
                    </p>
                    <h1 className="font-urbanist font-bold text-sm leading-[22px]">
                      {data.price}
                    </h1>
                  </div>
                </div>

                <div>
                  <button className="card-button text-lg font-urbanist w-[207px] h-[44px] bg-[#7A798A] text-white mt-4 rounded-[8px]">
                    {data.lastbtn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BuyNow;
