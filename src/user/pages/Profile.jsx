import React, { useEffect, useState } from 'react'
import authService from '../../components/api/axios'
import productService from '../../components/api/productsApi'
import { setItem } from '../../helpers/persistence-log'

const Profile = () => {
	const [user, setUser] = useState(null)
	const [active, setActive] = useState(false)

	const [userName, setUserName] =useState("")
	const [ism, setIsm] =useState("")
	const [fam, setFam] = useState('')
	const [number, setNumber] = useState('')
	const [password, setPassword] = useState('')

	const profileData = async () => {
	 try {
		const {data}= await authService.getUser()
		setUser(data.details)
		setItem("ombor_id", data.details.ombor)		
	 } catch (error) {
		console.log(error)
	 }
	}
	

	useEffect(()=>{
		profileData()
	},[])

	const updateProfile = async e => {
		e.preventDefault()
		try {
			const users = {
				username: userName,
				ism: ism,
				fam: fam,
				tel: number,
				ombor: 1,
				password: password
			}
			const data = await productService.updateProfileUser(users)
			alert('Updated profile')
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<>
			{(active && (
				<form onSubmit={updateProfile}>
					<div className='space-y-12'>
						<div className='border-b border-gray-900/10 pb-12'>
							<h2 className='text-base font-semibold leading-7 text-gray-900'>
								Profile
							</h2>
							<p className='mt-1 text-sm leading-6 text-gray-600'>
								This information will be displayed publicly so be careful what
								you share.
							</p>

							<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
								<div className='sm:col-span-4'>
									<label
										htmlFor='username'
										className='block text-sm font-medium leading-6 text-gray-900'
									>
										Username
									</label>
									<div className='mt-2'>
										<div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
											<span className='flex select-none items-center pl-3 pr-2 text-gray-500 sm:text-sm'>
												username:
											</span>
											<input
												type='text'
												name='username'
												id='username'
												// value={user?.username}
												onChange={e => setUserName(e.target.value)}
												autoComplete='username'
												className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
												placeholder='janesmith'
											/>
										</div>
										<div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
											<span className='flex select-none items-center pl-3 pr-2 text-gray-500 sm:text-sm'>
												password:
											</span>
											<input
												type='password'
												name='username'
												id='password'
												// value={user?.username}
												onChange={e => setPassword(e.target.value)}
												autoComplete='password'
												className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
												placeholder='****'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='border-b border-gray-900/10 pb-12'>
							<h2 className='text-base font-semibold leading-7 text-gray-900'>
								Personal Information
							</h2>
							<p className='mt-1 text-sm leading-6 text-gray-600'>
								Use a permanent address where you can receive mail.
							</p>

							<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
								<div className='sm:col-span-3'>
									<label
										htmlFor='first-name'
										className='block text-sm font-medium leading-6 text-gray-900'
									>
										First name
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='first-name'
											id='first-name'
											// value={user?.ism}
											onChange={e => setIsm(e.target.value)}
											autoComplete='given-name'
											className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-3'>
									<label
										htmlFor='last-name'
										className='block text-sm font-medium leading-6 text-gray-900'
									>
										Last name
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='last-name'
											id='last-name'
											autoComplete='family-name'
											// value={user?.fam}
											onChange={e => setFam(e.target.value)}
											className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-4'>
									<label
										htmlFor='tel'
										className='block text-sm font-medium leading-6 text-gray-900'
									>
										Telefon raqami
									</label>
									<div className='mt-2'>
										<input
											id='tel'
											name='tel'
											type='tel'
											// value={user?.tel}
											onChange={e => setNumber(e.target.value)}
											autoComplete='tel'
											className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='col-span-full'>
									<label
										htmlFor='street-address'
										className='block text-sm font-medium leading-6 text-gray-900'
									>
										KPI
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='street-address'
											id='street-address'
											value={user?.kpi}
											readOnly
											autoComplete='street-address'
											className='block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div className='sm:col-span-2 sm:col-start-1'>
									<label
										htmlFor='city'
										className='block text-sm font-medium leading-6 text-gray-900'
									>
										Qaysi omborga biriktirilgan
									</label>
									<div className='mt-2'>
										<input
											type='text'
											name='city'
											id='city'
											readOnly
											value={user?.ombor}
											autoComplete='address-level2'
											className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='mt-6 flex items-center justify-end gap-x-6'>
						<button
						onClick={()=> setActive(false)}
							type='button'
							className='text-sm font-semibold leading-6 text-gray-900 cursor-pointer  hover:text-cyan-600'
						>
							Cancel
						</button>
						<button
							type='submit'
							className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Save
						</button>
					</div>
				</form>
			)) || (
				<>
					<div className='pointer-events-none  inset-y-0 left-0 flex items-center pl-3'>
						<span className='text-gray-500 sm:text-sm mt-5'>Username</span>
					</div>
					<input
						type='text'
						name='price'
						id='price'
						value={user?.username}
						className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						placeholder='0.00'
					/>
					<div className='pointer-events-none  inset-y-0 left-0 flex items-center pl-3'>
						<span className='text-gray-500 sm:text-sm mt-5'>Ism</span>
					</div>
					<input
						type='text'
						name='price'
						id='price'
						value={user?.ism}
						className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						placeholder='0.00'
					/>
					<div className='pointer-events-none  inset-y-0 left-0 flex items-center pl-3'>
						<span className='text-gray-500 sm:text-sm mt-5'>Familiya</span>
					</div>
					<input
						type='text'
						name='price'
						id='price'
						value={user?.fam}
						className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						placeholder='0.00'
					/>
					<div className='pointer-events-none  inset-y-0 left-0 flex items-center pl-3'>
						<span className='text-gray-500 sm:text-sm mt-5'>KPI</span>
					</div>
					<input
						type='text'
						name='price'
						id='price'
						value={user?.kpi}
						className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						placeholder='0.00'
					/>

					<div className='flex justify-end px-5 py-4'>
						<button onClick={()=>setActive(true)} className='px-4 bg-cyan-600 py-2 text-white rounded-lg hover:opacity-70 cursor-pointer'>Update Profile</button>
					</div>
				</>
			)}
		</>
	)
}

export default Profile
