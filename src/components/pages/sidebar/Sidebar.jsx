import { Archive } from '@mui/icons-material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import HomeIcon from '@mui/icons-material/Home'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({ role }) {
	const [removeBar, setRemoveBar] = useState(true)
	const [selectedItem, setSelectedItem] = useState(0)
	const handleClick = index => {
		setSelectedItem(index)
	}

	return (
		<div
			className={
				// "bg-slate-400"
				removeBar
					? 'Sidebar active bg-slate-700 w-[400px] min-h-screen'
					: 'Sidebar bg-slate-700 w-[400px] min-h-screen'
			}
		>
			<div className='logo h-20 flex px-2 items-center justify-center bg-slate-800 text-3xl'>
				<LocalAtmIcon /> Money <span>Manager</span>
			</div>
			{role === 'admin' ? (
				<ul className='nav-items'>
					<NavLink
						className={
							selectedItem === 0
								? 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all bg-slate-600'
								: 'flex items-center gap-5 p-6 hover:bg-slate-600 cursor-pointer transition-all'
						}
						to='/'
						onClick={() => handleClick(0)}
					>
						<HomeIcon className='icons' />
						<li>Asosiy</li>
					</NavLink>
					<NavLink
						to='/products'
						className={
							selectedItem === 1
								? 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all bg-slate-600'
								: 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'
						}
						onClick={() => handleClick(1)}
					>
						<Inventory2Icon className='icons' />
						<li>Mahsulotlar</li>
					</NavLink>
					<NavLink
						className={
							selectedItem === 2
								? 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all bg-slate-600'
								: 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'
						}
						onClick={() => handleClick(2)}
						to='/worker'
					>
						<PeopleAltIcon className='icons' />
						<li>Ishchilar</li>
					</NavLink>
					<NavLink
						to='/filials'
						className={
							selectedItem === 3
								? 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all bg-slate-600'
								: 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'
						}
						onClick={() => handleClick(3)}
					>
						<WarehouseIcon className='icons' />
						<li>Filiallar</li>
					</NavLink>
					<NavLink
						to='/static'
						className={
							selectedItem === 4
								? 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all bg-slate-600'
								: 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'
						}
						onClick={() => handleClick(4)}
					>
						<LeaderboardIcon className='icons' />
						<li>Statistika</li>
					</NavLink>
					<NavLink
						className={
							selectedItem === 5
								? 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all bg-slate-600'
								: 'flex items-center gap-5 p-6 hover:bg-slate-600 cursor-pointer transition-all'
						}
						to='/archives'
						onClick={() => handleClick(5)}
					>
						<Archive className='icons' />
						<li>Arxiv</li>
					</NavLink>
				</ul>
			) : (
				<ul className='nav-items'>
					<NavLink
						className={
							selectedItem === 0
								? 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all bg-slate-600'
								: 'flex items-center gap-5 p-6 hover:bg-slate-600 cursor-pointer transition-all'
						}
						to='/'
						onClick={() => handleClick(0)}
					>
						<HomeIcon className='icons' />
						<li>Asosiy</li>
					</NavLink>
					<NavLink
						to='/tarqatmalar'
						className={
							selectedItem === 1
								? 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all bg-slate-600'
								: 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'
						}
						onClick={() => handleClick(1)}
					>
						<Inventory2Icon className='icons' />
						<li>Mahsulotlar</li>
					</NavLink>
					<NavLink
						className={
							selectedItem === 2
								? 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all bg-slate-600'
								: 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'
						}
						onClick={() => handleClick(2)}
						to='/worker'
					>
						<PeopleAltIcon className='icons' />
						<li>Ishchilar</li>
					</NavLink>
					<NavLink
						to='/filials'
						className={
							selectedItem === 3
								? 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all bg-slate-600'
								: 'flex items-center gap-5 hover:bg-slate-600 cursor-pointer transition-all'
						}
						onClick={() => handleClick(3)}
					>
						<WarehouseIcon className='icons' />
						<li>Filiallar</li>
					</NavLink>
				</ul>
			)}
			<div
				onClick={() => setRemoveBar(!removeBar)}
				className='arrow-icons transition-all w-full h-[70px] flex justify-end items-center px-7 cursor-pointer absolute'
			>
				<ArrowBackIosNewIcon className='arrow-icon icons w-10 h-10' />
			</div>
		</div>
	)
}

export default Sidebar
