import React from "react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import car7 from "../../assets/car7.png";
import car8 from "../../assets/car8.png";
import check from "../../assets/check.png";

const Categories = () => {
  const categoryList = [
    { img: car1, heading: "Automobiles", para: "See All" },
    { img: car2, heading: "Super Cars", para: "See All" },
    { img: car3, heading: "Motorcycles", para: "See All" },
    { img: car4, heading: "ATVs", para: "See All" },
    { img: car5, heading: "Bus", para: "See All" },
    { img: car6, heading: "Truck", para: "See All" },
    { img: car7, heading: "Trailer", para: "See All" },
    { img: car8, heading: "Motor Pom", para: "See All" },
  ];
  return (
    <>
      <div className="Categories-container max-w-[1365px] px-[255px] py-[60px] mx-auto cursor-pointer">
        {/* Heading Div */}
        <div className="heading justify-center text-center items-center">
          <h1 className="font-urbanist font-bold text-3xl leading-[44px]">
            Top Categories
          </h1>
          <div className="w-[60px] h-1 bg-[#CA0000] mt-2 absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-14">
          {/* Categories div */}
          {categoryList.map((data, id) => (
            <div
              className="w-[200px] h-[68px] flex shadow-lg rounded-[90px] p-custom gap-[10px]"
              key={id}
            >
              <img className="rounded-[90px]" src={data.img} alt={data.heading} />
              <div>
                <h1 className="w-[100px] cursor-pointer font-urbanist font-bold text-sm  text-[#1F1F2C]">
                  {data.heading}
                </h1>
                <h3 className="cursor-pointer font-urbanist font-bold text-sm leading-[22px] text-[#7A798A]">
                  {data.para}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Button Here */}
        <div className="flex justify-center items-center mt-10">
          <button className="w-[153px] h-[54px] bg-[#F3F3F6] text-[#CA0000] font-urbanist font-bold rounded-[30px]">
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Categories;
