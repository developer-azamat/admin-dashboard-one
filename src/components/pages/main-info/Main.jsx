import React, { useState } from "react";
import "./Main.css";
import AllStatics from "./AllStatics";

function Main() {
  const [activeLink, setActiveLink] = useState(true);
  const [activeIcon, setActiveIcon] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleIconClick = (index) => {
    setActiveIcon(index);
  };
  const handleLink2Click = (index) => {
    setActiveIcon(index);
  };
  const chartCards = [
    {
      id: 1,
      price: 4255.32,
      name: "Umumiy Daromad",
      color: "bg-blue-700",
    },
    {
      id: 2,
      price: 5734.32,
      name: "Jami Foyda",
      color: "bg-red-500",
    },
    {
      id: 3,
      price: 9831.32,
      name: "Mahsulotlar",
      color: "bg-amber-400",
    },
  ];

  return (
    <div className="Main-info w-full overflow-x-hidden h-[100vh] ease-out">
      <div className="current-page h-14  border-gray-300 border-[1px] flex items-center px-10 p-5 gap-3">
        <a href="" className="previous-page underline text-xl text-blue-600">
          Home
        </a>
        <span className="text-1xl">/</span>
        <a
          href=""
          className={`text-xl ${
            activeLink === 6 ? "text-black" : "text-gray-500 hover:text-black"
          }`}
          onClick={() => handleLink2Click(6)}
        >
          Dashboard
        </a>
      </div>
      <div className="all-info bg-gray-200 min-h-screen px-2">
        <div className="top-charts flex gap-10 justify-between px-10 py-8">
          <div className="charts w-full flex justify-between">
            {chartCards.map((item) => {
              return (
                <div
                  className={`chart-card w-1/4 h-52 ${item.color} rounded-lg py-7 px-5`}
                  key={item.id}
                >
                  <span className="bigNum text-4xl font-medium text-gray-100">
                    ${item.price}
                  </span>
                  <div className="info-type text-gray-100 text-xl mt-1">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <AllStatics />
      </div>
    </div>
  );
}

export default Main;
