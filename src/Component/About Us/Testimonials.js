import React from "react";
import testi1 from "../../assets/testi1.jpeg";
import testi2 from "../../assets/testi2.jpeg";

let testimonials = [
  {
    para: "Augue Sed viverra nulla Interdum mia bibendum velit sapien scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor iaculis eget",
    name: "Jody Andrews",
    title: "Project Manager",
    image: testi1,
  },
  {
    para: "Augue Sed viverra nulla Interdum mia bibendum velit sapien scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor iaculis eget",
    name: "Jody Andrews",
    title: "Project Manager",
    image: testi2,
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="Testimonials-container flex flex-col justify-center items-center bg-[#F8F8F8] max-w-[1365px] h-[510px] pt-[10px] pr-[364px] pb-[80px] pl-[364px] mx-auto">
        <div className="text-center items-center mb-8 ">
          <h2 className="text-4xl font-bold items-center">Testimonials</h2>
          <div>
            <div className="w-[80px] h-[3px] bg-[#CA0000] ml-[90px] items-center mr-[86px] mt-3"></div>
          </div>
        </div>
        {/* Cards two person */}
        <div className="flex gap-5">
          {testimonials.map((data, id) => (
            <div>
              <div
                className="card1 w-[410px] h-[270px] pt-8 pr-8 pb-32 pl-8 bg-[#FFFFFF] text-[#062A3F] rounded-[20px]"
                key={id}
              >
                <p className="w-[341px] font-normal text-sm text-center">
                  {data.para}
                </p>
                <div className="leading-[-50px]">
                  <h2 className="text-bold text-lg text-center mt-6">
                    {data.name}
                  </h2>
                  <h3 className="text-center text-sm text-[#82929B] mb-7">
                    {data.title}
                  </h3>
                </div>
                <div>
                  <img
                    className="w-[80px] h-[90px] rounded-[17px] m-auto"
                    src={data.image}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
