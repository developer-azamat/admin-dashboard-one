import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Modal from '../../../Modal'
import authService from '../../../api/axios'
import productService from '../../../api/productsApi'

function Filial({ role }) {
	const [modal, setModal] = useState(false)
	const { id } = useParams()
	const [filial, setFilial] = useState()
	const navigate = useNavigate()

	const getFilialrById = async () => {
		try {
			const { data } = await authService.WhareHouseMore(id)
			setFilial(data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getFilialrById()
	}, [])

	const handleReturn = () => {
		navigate('/filials')
	}

	const handleRemove = async id => {
		await authService.WhareHouseRemove(id)

		handleReturn()
	}
	const cashDelete = async id => {
		try {
			await productService.mainOmborCashDelete(id)

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
				id={filial?.id}
			/>
			<div className='px-10 py-8' onClick={handleReturn}>
				<div className='flex justify-between items-center my-5'>
					<h1 className='text-3xl font-semibold'>Filiallar</h1>
					<Link
						to='/filials'
						className='px-5 py-2 bg-gray-600/90 hover:bg-gray-600/40 transition-all duration-200 ease-in hover:text-black text-base rounded-md text-white'
					>
						Orqaga qaytish
					</Link>
				</div>

				{filial && (
					<div
						key={filial.id}
						className='w-full flex justify-center items-center'
					>
						<div
							className='product-card font-semibold w-[350px] rounded-lg border hover:border-black transition-all '
							onClick={e => e.stopPropagation()}
						>
							<div className='bg-[#ecf0ff] rounded-lg p-5'>
								<h1 className='text-2xl'>Nomi: {filial.nom} </h1>
								<h2 className='text-xl mt-5'>Manzil: {filial.manzil}</h2>
								<p className='mt-5 text-xl'>Telefon: {filial.tel} </p>
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

export default Filial