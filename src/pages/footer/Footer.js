import React from "react";
import home from "../../assets/home.svg";
import notification from "../../assets/notification.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";

export default function Footer() {
  const data = [
    { id: "1", icon: home },
    { id: "2", icon: heart },
    { id: "3", icon: search, test: true },
    { id: "4", icon: notification },
    { id: "5", icon: cart },
  ];
  return (
    <footer className="flex w-full justify-around bg-white">
      {data.map((item) => {
        return (
          <div key={item.id} className="flex flex-row gap-3 m-3">
            {item.test ? (
              <div className=" rounded-full bg-[#FF5555] shadow-projects">
                <img src={item.icon} alt={item.icon} className="w-5 h-5 m-4" />
              </div>
            ) : (
              <img src={item.icon} alt={item.icon} className="w-5 h-5 m-2" />
            )}
          </div>
        );
      })}
    </footer>
  );
}
