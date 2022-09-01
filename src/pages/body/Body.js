import React from "react";
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
      sideImage: burger,
      id: "1",
      name: "Beef Burger",
      price: "6.59",
      image: cheese,
      intro: "Cheesy Mozarella",
    },
    {
      sideImage: burger,
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
                <div className=" rounded-3xl w-full flex items-center  hover:bg-[#FF5555] group bg-[#F3EFEF]">
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
              <img
                src={rightArrow}
                className="w-2 h-2 ml-1.5 mt-1"
                alt="right arrow"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 w-full">
          {popular.map((item) => {
            return (
              <div className="flex flex-row gap-3 p-3 w-[70%] h-auto rounded-2xl shadow-projects bg-[#fffff]">
                {/* <div className=" bg-pink-100">🔥</div> */}
                {/* <Grid container justifyContent="flex-end">🔥</Grid> */}
                <div className="flex flex-col m-4 gap-3 w-full">
                  <img src={item.sideImage} alt={item.intro} className="" />
                  <p className=" font-semibold text-xl text-center">{item.name}</p>

                  <div className="flex flex-row gap-2 items-center">
                    <p className=" font-thin text-sm">{item.intro}</p>
                    <img
                      src={item.image}
                      alt={item.intro}
                      className="w-4 h-4"
                    />
                  </div>

                  <p className="font-bold text-xl text-center">
                    {" "}
                    <span className=" font-light text-xs text-[#FF5555]">
                      $
                    </span>
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
