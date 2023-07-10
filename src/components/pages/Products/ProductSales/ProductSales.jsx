import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import productService from '../../../api/productsApi';

function ProductSales({role}) {
	const { id } = useParams();
	const [cash, setCash] = useState()
	const navigate = useNavigate()

	const getCashById = async () => {
		try {
			const { data } = await productService.CashMore(id)
			setCash(data)
			console.log(data);
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
								<h1 className='text-3xl'>miqdor: {cash.miqdor} </h1>
								<h2 className='text-2xl'>mahsulot: {cash.mahsulot}</h2>
								<p className='mt-2'>ombor: {cash.ombor}</p>
								<p className='mt-8 text-xl'>xodim: {cash.xodim}</p>
								<p className='mt-3 text-xl'>sana: {cash.sana} </p>
								{role === 'admin' ? <button
									onClick={() => handleRemove(cash.id)}
									className='w-full py-3 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all'
								>
									O'chirish
								</button> 
								:<button
								onClick={handleReturn}
								className='w-full py-3 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all'
							>
								Qaytish
							</button>}
							</div>
						</div>
					</div>
					)}

			</div>
		</div>
	)
}

export default ProductSales