import {
	FormatListBulleted,
	MailOutline,
	NotificationsNone,
} from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import '../components/pages/main-info/Main.css'
import { logOutUser } from '../reducers/auth'

const Navbar = () => {
	const { loggedIn, user } = useSelector(state => state.reducer)

	console.log(loggedIn)
	const navigate = useNavigate()

	useEffect(() => {
		if (!loggedIn) {
			navigate('/login')
		} else {
			navigate('/')
		}
	}, [loggedIn])

	const dispatch = useDispatch()

	const [activeLink, setActiveLink] = useState()
	const [activeIcon, setActiveIcon] = useState(null)

	const handleLinkClick = index => {
		setActiveLink(index)
	}

	const handleIconClick = index => {
		setActiveIcon(index)
	}

	return (
		<div className='navbar w-[100%] h-[10vh] px-10 p-5 flex items-center justify-between border-gray-300 border-[1px]'>
			<div className='left-links flex items-center gap-5'>
				<a
					href=''
					className={`text-xl ${
						activeLink === 0 ? 'text-black' : 'text-gray-500 hover:text-black'
					}`}
					onClick={() => handleLinkClick(0)}
				>
					Dashboard
				</a>
				<NavLink
					to='/'
					className={`text-xl ${
						activeLink === 1 ? 'text-black' : 'text-gray-500 hover:text-black'
					}`}
				>
					Ishchilar
				</NavLink>
				<a
					href=''
					className={`text-xl ${
						activeLink === 2 ? 'text-black' : 'text-gray-500 hover:text-black'
					}`}
					onClick={() => handleLinkClick(2)}
				>
					Settings
				</a>
			</div>
			<div className='right-links flex items-center gap-8'>
				<div className='icons flex items-center gap-5'>
					<a href='' onClick={() => handleIconClick(0)}>
						<NotificationsNone
							className={`icon ${
								activeIcon === 0
									? 'text-black'
									: 'text-gray-500 hover:text-black'
							}`}
						/>
					</a>
					<a href='' onClick={() => handleIconClick(1)}>
						<FormatListBulleted
							className={`icon ${
								activeIcon === 1
									? 'text-black'
									: 'text-gray-500 hover:text-black'
							}`}
						/>
					</a>
					<a href='' onClick={() => handleIconClick(2)}>
						<MailOutline
							className={`icon ${
								activeIcon === 2
									? 'text-black'
									: 'text-gray-500 hover:text-black'
							}`}
						/>
					</a>
				</div>
				{loggedIn ? (
					<>
						<p className='uppercase'>{user ? user.username : 'User'}</p>
						<button
							onClick={() => {
								dispatch(logOutUser())
							}}
							className='px-4 py-2 bg-blue-600 outline-none border-white border text-white hover:bg-white hover:text-blue-600 hover:border-none hover:outline-blue-600 rounded-md ease-linear duration-200'
						>
							Logout
						</button>
					</>
				) : (
					<div
						className='logo '
						onClick={() => {
							dispatch(logOutUser())
						}}
					>
						<img
							className='rounded-full w-[50px] cursor-pointer'
							src='https://coreui.io/demos/react/4.0/free/static/media/8.35ee8919.jpg'
							alt=''
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
