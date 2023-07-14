import React, { useEffect, useState } from 'react'
import productService from '../../components/api/productsApi'
import ProductXodim from './Products'

const Tarqatma = () => {
	const [data, setData] = useState([])
	const getTarqatma = async () => {
		try {
			const { data } = await productService.getTarqatmalar()
			console.log(data.details)
			setData(data.details)
		} catch (error) {
			console.log(error.request)
		}
	}

	const [houses, setHouses] = useState([])

	// const getFilialsName = async () => {
	// 	try {
	// 		const { data } = await productService.getWhareHouses()

	// 		setHouses(data)
	// 		console.log(data)
	// 	} catch (error) {
	// 		console.log('Xatolik !')
	// 	}
	// }

	useEffect(() => {
		getTarqatma()
	}, [])
	return (
		<div className=' px-5 py-10 bg-white/20'>
			<ProductXodim />
			<div className='flex justify-between items-center py-3 px-5'>
				<div classNameName='flex'>
					<h1>Xodim tarqatmalari</h1>
				</div>
				{/* <div className='lc bwa bwq bzu'>
					<button
						type='button'
						className='p-2 text-white hover:opacity-75 bg-cyan-600 rounded-md '
					>
						Add user
					</button>
				</div> */}
			</div>
			<div className='lh lv'>
				<div className='fx gg add bur csz'>
					<div className='lq tn arq avj cex ddc'>
						<table className='border w-full  border-spacing-2 border-slate-600'>
							<thead className='border-separate'>
								<tr>
									<th scope='col' className='arv ati atx avf avv awb axq cgd'>
										Miqdor
									</th>
									<th scope='col' className='ara arv avf avv awb axq'>
										Sana
									</th>
									<th scope='col' className='ara arv avf avv awb axq'>
										Ombor
									</th>
									<th scope='col' className='ara arv avf avv awb axq'>
										Mahsulot
									</th>
								</tr>
							</thead>
							<tbody className='text-center'>
								{/* <tr className='py-4 text-lg'>
									<td>10</td>
									<td>10.05.2023</td>
									<td>Fargona</td>
									<td>Pepsi</td>
								</tr> */}
								{data &&
									data.map(item => {
										return (
											<tr className='py-4 text-lg' key={item.id}>
												<td>{item.mahsulot}</td>
												<td>{item.sana}</td>
												<td>{item.ombor}</td>
												<td>{item.miqdor}</td>
											</tr>
										)
									})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tarqatma
