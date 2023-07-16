import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import productService from '../../../api/productsApi'

function ProductSales({ role }) {
	const { id } = useParams()
	const [cash, setCash] = useState()
	const navigate = useNavigate()

	const getCashById = async () => {
		try {
			const { data } = await productService.CashMore(id)
			setCash(data)
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getCashById()
	}, [])

	const handleReturn = () => {
		navigate('/products')
	}

	const handleRemove = async id => {
		await productService.CashRemove(id)

		handleReturn()
	}

	return (
		<div>
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

				{cash && (
					<div
						key={cash.id}
						className='w-full flex justify-center items-center'
					>
						<div
							className='product-card font-semibold w-[300px] rounded-lg border hover:border-black transition-all '
							onClick={e => e.stopPropagation()}
						>
							<div className='bg-[#ecf0ff] rounded-lg p-5'>
								<h1 className='text-xl'>Miqdor: {cash.miqdor} </h1>
								<h2 className='text-xl'>Mahsulot: {cash.mahsulot_nomi}</h2>
								<p className='mt-2 text-xl'>Filial: {cash.ombor_nomi}</p>
								<p className='mt-8 text-xl'>Xodim: {cash.xodim_ism}</p>
								<p className='mt-3 text-xl'>Sana: {cash.sana} </p>
								<button
									onClick={() => handleRemove(cash.id)}
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

export default ProductSales
