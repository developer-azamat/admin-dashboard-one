import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import authService from '../../../api/axios'

function Product({role}) {
	const { id } = useParams()
	const [product, setProduct] = useState(null)

	const getProductOnId = async () => {
		try {
			const { data } = await authService.productMore(id)
			setProduct(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getProductOnId()
	}, [])

	const navigate = useNavigate()


	const handleReturn = () => {
		navigate('/products')
	}

	const handleRemove = async id => {
		const bool = confirm("Butunlay bazadan o'chirishni istaysizmi ?")

		if(bool) {
			await authService.removeProduct(id)

			handleReturn()
		} else {
			await authService.cashDelete(id)

			handleReturn()
		}
	}

	return (
		<div>

			<div className='px-10 py-8' onClick={handleReturn}>
				<div className='flex justify-between items-center my-5'>
					<h1 className='text-3xl font-semibold'>Mahsulot</h1>
					<Link
						to='/products'
						className='px-5 py-2 bg-gray-600/90 hover:bg-gray-600/40 transition-all duration-200 ease-in hover:text-black text-base rounded-md text-white'
					>
						Orqaga qaytish
					</Link>
				</div>
				{product && (
					<div
						className='w-full flex justify-center items-center'
						key={product.id}
					>
						<div
							className='product-card font-semibold w-[300px] rounded-lg border hover:border-black transition-all '
							onClick={e => e.stopPropagation()}
						>
							<div className='bg-[#ecf0ff] rounded-lg p-5'>
								<h1 className='text-3xl'>Product: </h1>
								<h2 className='text-2xl'>{product.nom}</h2>
								<p className='mt-2'>{product?.batafsil}</p>
								<p className='mt-8 text-xl'>Tannarx: {product.narx1}</p>
								<p className='mt-3 text-xl'>Sotuv Narx: {product.narx2}</p>
								<p className='mt-3 text-xl'>Brend: {product.brand}</p>
								{role === 'admin' ? <button
									onClick={() => handleRemove(product.id)}
									className='w-full py-3 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all'
								>
									O'chirish
								</button> 
								: <button
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

export default Product
