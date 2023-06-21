import React, { useState } from 'react'
import "./Home.css"
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

function Home() {
  const [removeBar, setRemoveBar] = useState(false)
	const handelClick = () => {
		setRemoveBar(!removeBar)
	}
 
  return (
    <div className={removeBar ? 'Sidebar bg-slate-700 w-[320px] min-h-screen' : 'Sidebar active bg-slate-700 w-[320px] min-h-screen'}>
      <div className="logo h-20 flex items-center justify-center bg-slate-800 text-3xl"><LocalAtmIcon/> money <span>Manager</span></div>
      <ul className='nav-items'>
        <div className='flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'>
          <HomeIcon className='icons'/>
          <li>Asosiy</li>
        </div>
        <div className='flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'>
          <Inventory2Icon className='icons'/>
          <li>Mahsulotlar</li>
        </div>
        <div className='flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'>
          <PeopleAltIcon className='icons'/>
          <li>Ishchilar</li>
        </div>
        <div className='flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'>
          <WarehouseIcon className='icons'/>
          <li>Filiallar</li>
        </div>
        <div className='flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'>
          <LeaderboardIcon className='icons'/>
          <li>Statistika</li>
        </div>
      </ul>
      <div onClick={handelClick} className="arrow-icons transition-all w-full h-[70px] flex justify-end items-center px-7 cursor-pointer absolute">
        <ArrowBackIosNewIcon className='arrow-icon icons w-10 h-10'/>
      </div>
    </div>
  )
}

export default Home