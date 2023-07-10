import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUserDetails, signUserStart, signUserSuccess } from '../../../reducers/auth.js'
import './Login.css'
import authService from '../../api/axios.js'
import { setItem } from '../../../helpers/persistence-log.js'

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
			console.log('start sign user');
			const {data} = await authService.userLogin(user)
			dispatch(signUserSuccess(data))
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = (e)=> {
		const role = e.target.value
		setItem("role", role)
	}
	return (
		<div className='login w-full h-[90vh] flex justify-center items-center'>
			<div className='form-container w-[320px] rounded-[0.75rem] p-[2rem] bg-[#ECF0FF] text-black border hover:border-[black] transition-all'>
				<select className='outline-none rounded-md bg-transparent w-full m-1 border border-cyan-600' onChange={handleChange}>
					<option value='user'>Xodim</option>
					<option value='admin'>Admin</option>
				</select>
				<p className='title text-center text-[1.5rem] font-[700] '>Login</p>
				<form className='form mt-[1.5rem]' onSubmit={handleSubmit}>
					<div className='input-group mt-[0.25rem] text-[0.875rem]'>
						<label htmlFor='username' className='block mb-1'>
							Username
						</label>
						<input
							onChange={e => setLogin(e.target.value)}
							className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3'
							type='text'
							name='username'
							id='username'
							placeholder=''
						/>
					</div>
					<div className='input-group mt-[0.25rem] text-[0.875rem]'>
						<label htmlFor='password' className='block mb-1'>
							Password
						</label>
						<input
							onChange={e => setPassword(e.target.value)}
							className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3'
							type='password'
							name='password'
							id='password'
							placeholder=''
						/>
						<div className='forgot'>
							<a rel='noopener noreferrer' href='#'>
								Forgot Password ?
							</a>
						</div>
					</div>
					<button
						type='submit'
						className='sign bg-[#6558d3] hover:bg-[#4c43a0] transition-all text-white
				'
					>
						Sign in
					</button>
				</form>
				<p className='signup'>
					Don't have an account?
					<a rel='noopener noreferrer' href='#' className='font-semibold'>
						Sign up
					</a>
				</p>
			</div>
		</div>
	)
}

export default Login
