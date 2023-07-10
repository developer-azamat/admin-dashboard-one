import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import authService from '../../api/axios';

function Worker() {
	const { id } = useParams();
	const [worker, setWorker] = useState()
	const [activeLink, setActiveLink] = useState()
	const navigate = useNavigate()

	const handleLink2Click = index => {
		setActiveLink(index)
	}

	const getWorkerById = async () => {
		try {
			const { data } = await authService.WorkersMore(id)
			setWorker(data)
			console.log(data);
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getWorkerById()
	}, [])

	const handleReturn = () => {
		navigate('/worker')
	}

	const handleRemove = async id => {
		await authService.WorkersRemove(id)

		handleReturn()
	}

	return (
		<div>
			<div className='current-page w-full h-14 border-gray-300 border-[1px] flex items-center px-10 p-5 gap-3'>
				<a href='' className='previous-page underline text-xl text-blue-600'>
					Home
				</a>
				<span className='text-1xl'>/</span>
				<a
					href=''
					className={`text-xl ${
						activeLink === 6 ? 'text-black' : 'text-gray-500 hover:text-black'
					}`}
					onClick={() => handleLink2Click(6)}
				>
					Dashboard
				</a>
			</div>
			<div className='px-10 py-8' onClick={handleReturn} >
				<div className='flex justify-between items-center my-5'>
					<h1 className='text-3xl font-semibold'>Xodim</h1>
					<Link
						to='/worker'
						className='px-5 py-2 bg-gray-600/90 hover:bg-gray-600/40 transition-all duration-200 ease-in hover:text-black text-base rounded-md text-white'
					>
						Orqaga qaytish
					</Link>
				</div>
				
					{worker && (
						<div
						key={worker.id}
						className='w-full flex justify-center items-center'
					>
						<div
							className='product-card font-semibold w-[300px] rounded-lg border hover:border-black transition-all '
							onClick={e => e.stopPropagation()}
						>
							<div className='bg-[#ecf0ff] rounded-lg p-5'>
								<h1 className='text-3xl'>Ismi: {worker.ism} </h1>
								<h2 className='text-2xl'>Familiya: {worker.fam}</h2>
								<p className='mt-2'>username: {worker.username}</p>
								<p className='mt-8 text-xl'>password: {worker.password}</p>
								<p className='mt-3 text-xl'>Telefon: {worker.tel} </p>
								<button
									onClick={() => handleRemove(worker.id)}
									className='w-full py-3 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all'
								>
									O'chirish
								</button>
							</div>
						</div>
					</div>
					)}

			</div>
		</div>
	)
}

export default Worker