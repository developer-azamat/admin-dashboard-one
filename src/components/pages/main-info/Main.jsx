import { useEffect, useState } from 'react'
import helperDate from '../../../helpers/date-now'
import productService from '../../api/productsApi'
import AllStatics from './AllStatics'
import './Main.css'

function Main() {
	const [start_date, setStart_date] = useState()
	const [end_date, setEnd_date] = useState()
	const [id, setId] = useState(1)

	const[data, setData] = useState(null)

	const getStats = async e => {
		e.preventDefault()
		const starting = helperDate.nowDate(start_date)
		const ending = helperDate.nowDate(end_date)

		const db = {
			start_date: "2023-05-07",
			end_date: "2023-07-07",
			id: id
		}
		const {data} = await productService.getAllStats(db)

		setData(data)
		localStorage.setItem("total", JSON.stringify(data))
	}
	
	// useEffect(()=> {
	// 	getStats()
	// },[])

	const chartCards = [
		{
			id: 1,
			price: '$'+data?.umumiy_daromad,
			name: 'Umumiy Daromad',
			color: 'bg-blue-700',
		},
		{
			id: 2,
			price: '$'+data?.jami_foyda,
			name: 'Jami Foyda',
			color: 'bg-red-500',
		},
		{
			id: 3,
			price: data?.mahsulotlar_soni + " dona",
			name: 'Mahsulotlar',
			color: 'bg-amber-400',
		},
	]

	return (
		<div className='Main-info w-[100%] h-[100vh] ease-linear '>
			<div className='all-info bg-gray-200 min-h-screen px-2'>
				<form
					className='flex px-10 py-2 justify-between gap-2'
					onSubmit={getStats}
				>
					<input
						type='date'
						required
						className='bg-transparent'
						placeholder='start_date'
						onChange={e => setStart_date(e.target.value)}
					/>
					<input
						type='date'
						required
						placeholder='end_date'
						className='bg-transparent'
						onChange={e => setEnd_date(e.target.value)}
					/>
					<select
						className='bg-transparent'
						onChange={e => setId(e.target.value)}
					>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
					</select>
					<button
						type='submit'
						className='bg-red-600 text-white p-2 px-5 rounded-md hover:bg-red-300 duration-300 cursor-pointer'
						
					>Jonatish</button>
				</form>
				{data && (
					<div className='top-charts flex gap-10 justify-between px-10 py-8'>
						<div className='charts w-full flex justify-between'>
							{chartCards.map((item, key) => {
								return (
									<div
										className={`chart-card w-1/4 h-52 ${item.color} rounded-lg py-7 px-5`}
										key={key}
									>
										<span className='bigNum text-4xl font-medium text-gray-100'>
											{item.price}
										</span>
										<div className='info-type text-gray-100 text-xl mt-1'>
											{item.name}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				)}
				{data ? <AllStatics data={data} /> : <div className='w-full h-[90vh] flex justify-center items-center text-4xl font-semibold'>Sanani Tering</div>}
			</div>
		</div>
	)
}

export default Main
