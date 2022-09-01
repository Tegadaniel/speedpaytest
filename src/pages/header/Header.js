import React from "react";
import headerImage from "../../assets/headerImage.svg";
import downArrow from "../../assets/downArrow.svg";
import location from "../../assets/location.svg";
import dice from "../../assets/dice.svg";
import deliveryBike from "../../assets/deliveryBike.svg";

export default function Header() {
  return (
    <>
      <header className="flex w-full flex-row gap-3 justify-between p-5">
        <img src={dice} className="w-8 h-8  bg-gray-400" alt="dice" />

        <div className="flex items-center my-3 flex-row gap-2">
          <img src={location} className="w-4 h-4" alt="location" />
          <p className="text-sm font-semibold">California, US</p>
          <img src={downArrow} className="w-2 h-2" alt="downArrow" />
        </div>

        <img src={headerImage} className="w-8 h-8" alt="header" />
      </header>

      <div className="w-full px-6 py-8">
        <div className="flex flex-row gap-3 p-3  w-[100%] h-40 rounded-2xl shadow-projects bg-[#F9E483]">
          <div className="flex flex-col gap-2 m-3">
            <p className=" text-lg font-bold">
              The Fastest in <br /> Delivery{" "}
              <span className="text-[#FF5555]" style={{ fontWeight: "bolder" }}>
                Food
              </span>
            </p>

            <div className="mt-3 bg-[#FF5555] rounded-3xl text-center cursor-pointer">
              <p className="text-md font-thin  text-white m-2">Order Now</p>
            </div>
          </div>

          <div className=" items-center m-3">
            <img src={deliveryBike} className=" w-36 h-36" alt="header" />
          </div>
        </div>
      </div>
    </>
  );
}
