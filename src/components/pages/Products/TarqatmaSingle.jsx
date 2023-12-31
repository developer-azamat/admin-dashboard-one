import React, { useEffect, useState } from 'react'
import productService from '../../api/productsApi'
import { Link, useNavigate, useParams } from 'react-router-dom'

const TarqatmaSingle = () => {
	const { id } = useParams()
	const [product, setProduct] = useState(null)


	const getProductOnId = async () => {
		try {
			const {data}  = await productService.tarqatmaSingleGet(id)
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

	const handleRemove = async (id) => {
		try {
			await productService.handleSingleRemoveTarqatma(id)
			handleReturn()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<div
				className='px-10 py-8'
			>
				<div className='flex justify-between items-center my-5'>
					<h1 className='text-3xl font-semibold'>Tarqatma</h1>
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
								<div className='flex items-center flex-wrap gap-2'>
									<h1 className='text-2xl'>Mahsulot: </h1>
									<h2 className='text-2xl font-normal'>
										{product.mahsulot_nomi}
									</h2>
								</div>
								<p className='mt-2 text-xl'> Miqdor : {product?.miqdor}</p>
								<p className='mt-8 text-xl'>Sana: {product.sana}</p>
								<p className='mt-3 text-xl'>
									Filial nomi: {product.ombor_nomi}
								</p>
								
								<button
									onClick={() => handleRemove(product.id)}
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

export default TarqatmaSingle