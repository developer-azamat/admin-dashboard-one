import React, { useState } from "react";
import { NotificationsNone } from "@mui/icons-material";
import { FormatListBulleted } from "@mui/icons-material";
import { MailOutline } from "@mui/icons-material";
import "../components/pages/main-info/Main.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState();
  const [activeIcon, setActiveIcon] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleIconClick = (index) => {
    setActiveIcon(index);
  };
  return (
    <div className="navbar  h-20 px-10 p-5 flex items-center justify-between border-gray-300 border-[1px]">
      <div className="left-links flex items-center gap-5">
        <a
          href=""
          className={`text-xl ${
            activeLink === 0 ? "text-black" : "text-gray-500 hover:text-black"
          }`}
          onClick={() => handleLinkClick(0)}
        >
          Dashboard
        </a>
        <NavLink
          to='/worker'
          className={`text-xl ${
            activeLink === 1 ? "text-black" : "text-gray-500 hover:text-black"
          }`}
        >
          Ishchilar
        </NavLink>
        <a
          href=""
          className={`text-xl ${
            activeLink === 2 ? "text-black" : "text-gray-500 hover:text-black"
          }`}
          onClick={() => handleLinkClick(2)}
        >
          Settings
        </a>
      </div>
      <div className="right-links flex items-center gap-8">
        <div className="icons flex items-center gap-5">
          <a href="" onClick={() => handleIconClick(0)}>
            <NotificationsNone
              className={`icon ${
                activeIcon === 0
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            />
          </a>
          <a href="" onClick={() => handleIconClick(1)}>
            <FormatListBulleted
              className={`icon ${
                activeIcon === 1
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            />
          </a>
          <a href="" onClick={() => handleIconClick(2)}>
            <MailOutline
              className={`icon ${
                activeIcon === 2
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            />
          </a>
        </div>
        <div className="logo">
          <img
            className="rounded-full w-[50px] cursor-pointer"
            src="https://coreui.io/demos/react/4.0/free/static/media/8.35ee8919.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
