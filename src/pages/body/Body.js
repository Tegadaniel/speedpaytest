import React, { useState } from "react";
import burger from "../../assets/burger.svg";
import pizza from "../../assets/pizza.svg";
import muffins from "../../assets/muffins.svg";
import cheese from "../../assets/cheese.svg";
import meat from "../../assets/meat.svg";
import rightArrow from "../../assets/rightArrow.svg";

export default function Body() {
  const data = [
    {
      id: "1",
      name: "Burger",
      image: burger,
    },
    {
      id: "2",
      name: "Pizza",
      image: pizza,
    },
    {
      id: "3",
      name: "Muffins",
      image: muffins,
    },
  ];

  const popular = [
    {
      id: "1",
      name: "Beef Burger",
      price: "6.59",
      image: cheese,
      intro: "Cheesy Mozarella",
    },
    {
      id: "2",
      name: "Double Burger",
      price: "7.49",
      image: meat,
      intro: "Double Beef",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-4 m-4">
      <div className="flex mb-4 flex-col gap-2 w-full">
        <h2 className="font-bold text-lg m-2">Categories</h2>

        <div className="w-full flex flex-row gap-4">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className=" rounded-3xl  m-3 w-full flex items-center  hover:bg-[#FF5555] group bg-[#F3EFEF]">
                  <div className="flex flex-row gap-3 m-5">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-5 h-5 group-hover:rounded-full group-hover:bg-white group-hover:p-0.5"
                      />
                    </div>

                    <div>
                      <p className=" font-normal text-black text-sm group-hover:text-white">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-row gap-40">
          <h2 className=" font-bold text-lg ">Popular Now</h2>

          <div className="flex flex-row gap-1">
            <p className="text-sm font-light text-[#F9E483]">View All</p>
            <div className="innerBox">
             <img src={rightArrow} className="w-2 h-2 ml-1.5 mt-1" alt="right arrow"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
