import React, { useState } from "react";
import "./Main.css";
import Navbar from "../../Navbar";

function Main() {
  const [activeLink, setActiveLink] = useState();
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

  

  return (
    <div className="Main-info w-full h-screen">
      <Navbar  />
      <div className="current-page h-14 border-gray-300 border-[1px] flex items-center px-10 p-5 gap-3">
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
      <div className="all-info bg-gray-200 h-screen overflow-scroll">
        <div className="top-charts flex gap-10 justify-between px-10 py-8">
          <div className="chart-box w-1/4 h-52 bg-blue-700 rounded-lg py-7 px-5 border-[1px] border-blue-900">
            <span className="bigNum text-4xl font-medium text-gray-100">
              $3576.34
            </span>
            <div className="info-type text-gray-100 text-xl mt-1">Umumiy Daromad</div>
          </div>
          <div className="chart-box w-1/4 h-52 bg-red-500 rounded-lg py-7 px-5 border-[1px] border-red-700">
            <span className="bigNum text-4xl font-medium text-gray-100">
              $42.040
            </span>
            <div className="info-type text-gray-100 text-xl mt-1">Jami Foyda</div>
          </div>
          <div className="chart-box w-1/4 h-52 bg-amber-400 rounded-lg py-7 px-5 border-[1px] border-amber-600">
            <span className="bigNum text-4xl font-medium text-gray-100">
              106
            </span>
            <div className="info-type text-gray-100 text-xl mt-1">
              Mahsulotlar
            </div>
          </div>
          {/* <div className="chart-box w-1/3 h-52 bg-red-500 rounded-lg py-7 px-5 border-[1px] border-red-600">
            <span className="bigNum text-4xl font-medium text-gray-100">
              $22K
            </span>
            <div className="info-type text-gray-100 text-xl mt-1">Sessions</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
