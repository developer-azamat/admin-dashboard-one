import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import authService from '../../../api/axios';
import Modal from '../../../Modal'
import productService from '../../../api/productsApi'

function Worker({role}) {
	const [modal, setModal] = useState(false)
	const { id } = useParams();
	const [worker, setWorker] = useState()
	const navigate = useNavigate()


	const getWorkerById = async () => {
		try {
			const { data } = await authService.WorkersMore(id)
			setWorker(data)
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
	const cashDelete = async id => {
		try {
			await productService.mainXodimCashDelete(id)
			setModal(false)
			handleReturn()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<Modal
				modal={modal}
				setModal={setModal}
				cashDelete={cashDelete}
				handleRemove={handleRemove}
				id={worker?.id}
			/>
			<div className='px-10 py-8' onClick={handleReturn}>
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
								<p className='my-2 text-xl'>Username: {worker.username}</p>
								<h1 className='text-xl my-2'>Ism: {worker.ism} </h1>
								<h2 className='text-xl'>Familiya: {worker.fam}</h2>
								<p className='mt-5 text-xl'>Parol: {worker.password}</p>
								<p className='mt-3 text-xl'>Telefon: {worker.tel} </p>
								<button
									onClick={() => setModal(true)}
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