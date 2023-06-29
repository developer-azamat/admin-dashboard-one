import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserDetails, signUserStart, signUserSuccess } from '../../../reducers/auth.js'
import authService from '../../api/axios.js'

const Login = () => {
	const [username, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const handleSubmit = async (e) => {
		e.preventDefault()
		const user = {
			username: username,
			password: password,
		}
		dispatch(signUserStart())
		try {
			// console.log(user)
			const response = await authService.userLogin(user)

			dispatch(signUserSuccess(response.data))
			const res = await authService.getUser()

			dispatch(getUserDetails(res.details))
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className='flex mt-20 justify-center items-start w-[100%] bg-[white] min-h-[100vh]'>
			<form
				onSubmit={handleSubmit}
				className='!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[400px] gap-1 shadow-md 
         shadow-white bg-black/10 bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-6 3xl:p-![18px]'
			>
				<div className='relative flex flex-col justify-between'>
					<span className='flex shadow-md mb-5 text-xs'>
						<span className='bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l'>
							Login
						</span>
						<input
							onChange={e => setLogin(e.target.value)}
							className='field text-sm text-gray-600 p-2 px-3 rounded-r w-full'
							type='text'
							id='login'
							placeholder=''
						/>
					</span>

					<span className='flex shadow-md mb-5 text-xs'>
						<span className='bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l'>
							Password
						</span>
						<input
							onChange={e => setPassword(e.target.value)}
							className='field text-sm text-gray-600 p-2 px-3 rounded-r w-full'
							type='password'
							placeholder=''
						/>
					</span>
					<button
						type='submit'
						className='border-2 border-indigo-500 hover:bg-indigo-500 hover:text-gray-100 mt-3 text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold'
					>
						Add
					</button>
				</div>
			</form>
		</div>
	)
}

export default Login
