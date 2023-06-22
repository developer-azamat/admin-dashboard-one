import React, { useState } from 'react';
import "./Main.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Main() {
  const [activeLink, setActiveLink] = useState(0);
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
    <div className='Main-info w-full h-screen'>
      <div className="navbar h-20 px-10 py-5 flex items-center justify-between border-gray-300 border-[1px]">
        <div className="left-links flex items-center gap-5">
          <a
            href=""
            className={`text-xl ${activeLink === 0 ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            onClick={() => handleLinkClick(0)}
          >
            Dashboard
          </a>
          <a
            href=""
            className={`text-xl ${activeLink === 1 ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            onClick={() => handleLinkClick(1)}
          >
            Ishchilar
          </a>
          <a
            href=""
            className={`text-xl ${activeLink === 2 ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            onClick={() => handleLinkClick(2)}
          >
            Settings
          </a>
        </div>
        <div className="right-links flex items-center gap-8">
          <div className="icons flex items-center gap-5">
            <a
              href=""
              onClick={() => handleIconClick(0)}
            >
              <NotificationsNoneIcon className={`icon ${activeIcon === 0 ? 'text-black' : 'text-gray-500 hover:text-black'}`} /> 
            </a>
            <a
              href=""
              onClick={() => handleIconClick(1)}
            >
              <FormatListBulletedIcon className={`icon ${activeIcon === 1 ? 'text-black' : 'text-gray-500 hover:text-black'}`} />
            </a>
            <a
              href=""
              onClick={() => handleIconClick(2)}
            >
              <MailOutlineIcon className={`icon ${activeIcon === 2 ? 'text-black' : 'text-gray-500 hover:text-black'}`} />
            </a>
          </div>
          <div className="logo">
            <img className='rounded-full w-[50px] cursor-pointer' src="https://coreui.io/demos/react/4.0/free/static/media/8.35ee8919.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="current-page h-14 border-gray-300 border-[1px] flex items-center px-10 p-5 gap-3">
        <a href="" className='previous-page underline text-xl text-blue-600'>Home</a>
        <span className='text-1xl'>/</span>
        <a href="" className={`text-xl ${activeLink === 6 ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            onClick={() => handleLink2Click(6)}>Dashboard</a>
      </div>
      <div className="all-info bg-gray-200 h-screen overflow-scroll">
      <div className="top-charts flex gap-10 justify-between px-10 py-8">
        <div className="chart-box w-1/3 h-52 bg-blue-700 rounded-lg py-7 px-5 border-[1px] border-blue-800">
            <span className='bigNum text-4xl font-medium text-gray-100'>$22K</span>
            <div className="info-type text-gray-100 text-xl mt-1">Users</div>
        </div>
        <div className="chart-box w-1/3 h-52 bg-blue-500 rounded-lg py-7 px-5 border-[1px] border-blue-600">
            <span className='bigNum text-4xl font-medium text-gray-100'>$22K</span>
            <div className="info-type text-gray-100 text-xl mt-1">Income</div>
        </div>
        <div className="chart-box w-1/3 h-52 bg-amber-400 rounded-lg py-7 px-5 border-[1px] border-amber-500">
            <span className='bigNum text-4xl font-medium text-gray-100'>$22K</span>
            <div className="info-type text-gray-100 text-xl mt-1">Conversion Rate</div>
        </div>
        <div className="chart-box w-1/3 h-52 bg-red-500 rounded-lg py-7 px-5 border-[1px] border-red-600">
            <span className='bigNum text-4xl font-medium text-gray-100'>$22K</span>
            <div className="info-type text-gray-100 text-xl mt-1">Sessions</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Main;
