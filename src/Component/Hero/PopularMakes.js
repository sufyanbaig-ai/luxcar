import React from "react";

let popularMakes = [
  { button: "Honda" },
  { button: "BMW" },
  { button: "Bentley" },
  { button: "Acura" },
  { button: "Alfa Romeo" },
  { button: "Chevrolet" },
  { button: "Chrysler" },
  { button: "Ferrari" },
  { button: "Lamborghini" },
  { button: "Land Rover" },
  { button: "Yamaha ATV" },
  { button: "Nissan" },
  { button: "KIA" },
  { button: "Ducati Motorcycle" },
  { button: "Kawasaki" },
  { button: "Honda" },
  { button: "Honda" },
  { button: "BMW" },
  { button: "Bentley" },
  { button: "Acura" },
  { button: "Alfa Romeo" },
  { button: "Chevrolet" },
  { button: "Chrysler" },
  { button: "Ferrari" },
  { button: "Lamborghini" },
  { button: "Land Rover" },
  { button: "Yamaha ATV" },
  { button: "Nissan" },
  { button: "KIA" },
  { button: "Ducati Motorcycle" },
  { button: "Kawasaki" },
  { button: "Honda" },
  { button: "Civic" },
  { button: "BMW" },
  { button: "Bentley" },
  { button: "Acura" },
  { button: "Alfa Romeo" },
  { button: "Chevrolet" },
  { button: "Chrysler" },
  { button: "Ferrari" },
  { button: "Lamborghini" },
  { button: "Land Rover" },
  { button: "Yamaha ATV" },
];

const PopularMakes = () => {
  return (
    <>
      <div className="Container max-w-[1365px] h-[322px] px-[150px] py-[20px] mx-auto">
        {/* Header PopularMakes */}
        <div className="heading text-center mb-4">
          <h1 className="font-urbanist font-bold text-3xl">Popular Makes</h1>
          <div className="w-[80px] h-1 bg-[#CA0000] mt-2 mx-auto"></div>
        </div>

        {/* Button Div */}
        <div className="flex flex-wrap justify-center gap-4">
          {popularMakes.map((data, id) => (
            <button
              className="bg-[#EBEBEB] font-urbanist text-sm rounded-[6px] p-2 card-button"
              key={id}
            >
              {data.button}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularMakes;
