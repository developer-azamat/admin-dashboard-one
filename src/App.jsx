import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import authService from './components/api/axios'
import Product from './components/pages/Product/Product'
import Products from './components/pages/Products/Products'
import Archives from './components/pages/archive/Archives.jsx'
import Filials from './components/pages/filials/Filials'
import Login from './components/pages/login'
import Main from './components/pages/main-info/Main'
import Sidebar from './components/pages/sidebar/Sidebar'
import Statistics from './components/pages/statistics/Statistics'
import Workers from './components/pages/workers/Workers'
import { getItem } from './helpers/persistence-log'
import { getUserDetails, signUserFailure, signUserStart } from './reducers/auth'

import Worker from './components/pages/Worker/Worker'

import Profile from './user/profile'


const App = () => {
	const dispatch = useDispatch()
	const token = getItem('token')
	const { loggedIn} = useSelector(state=> state.reducer)

	const getUser = async () => {
		dispatch(signUserStart())
		try {
			const { data } = await authService.getUser()
			dispatch(getUserDetails(data))
		} catch (error) {
			dispatch(signUserFailure(error))
		}
	}

	useEffect(() => {
		if(token) {
			getUser()
		}
	}, [])

	 const role = getItem('role') ? getItem('role') : 'user'

		return (
			<div className='flex w-full overflow-x-hidden main__container'>
				<BrowserRouter>
					{token && <Sidebar role={role} />}
					<div className='w-[100%]'>
						<Navbar />
						<div className='pages h-[90vh] overflow-y-scroll '>
							{role === 'admin' ? (
								<Routes>
									<Route path='/' element={<Main />} />
									<Route path='/products' element={<Products />} />
									<Route path='/products/:id' element={<Product />} />
									<Route path='/worker' element={<Workers />} />
									<Route path='/worker/:id' element={<Worker />} />
									<Route path='/filials' element={<Filials />} />
									<Route path='/static' element={<Statistics />} />
									<Route path='/archives' element={<Archives />} />
									<Route path='/login' element={<Login />} />
								</Routes>
							) : (
								<Routes>
									<Route path='/' element={<Main />} />
									<Route path='/products' element={<Products />} />
									<Route path='/login' element={<Login />} />
									<Route path='/profile' element={<Profile/>} />
								</Routes>
							)}
						</div>

					</div>
				</BrowserRouter>
			</div>
		)
}

export default App
