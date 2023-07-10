import { useEffect, useState } from 'react'
import AllStatics from './AllStatics'
import './Main.css'
import helperDate from '../../../helpers/date-now'

function Main() {
	const [start_date, setStart_date] = useState()
	const [end_date, setEnd_date] = useState()
	const [id, setId] = useState(1)

	const getStats = async (e) => {
		e.preventDefault()
		const starting = helperDate.nowDate(start_date)
		const ending = helperDate.nowDate(end_date)
		console.log(starting, ending, id);
	}


	const chartCards = [
		{
			id: 1,
			price: 4255.32,
			name: 'Umumiy Daromad',
			color: 'bg-blue-700',
		},
		{
			id: 2,
			price: 5734.32,
			name: 'Jami Foyda',
			color: 'bg-red-500',
		},
		{
			id: 3,
			price: 9831.32,
			name: 'Mahsulotlar',
			color: 'bg-amber-400',
		},
	]
	

	return (
		<div className='Main-info w-[100%]  h-[100vh] ease-linear '>
			<div className='all-info bg-gray-200 min-h-screen px-2'>
				<form className='flex justify-between gap-2' onSubmit={getStats}>
					<input
						type='date'
						placeholder='start_date'
						onChange={e => setStart_date(e.target.value)}
					/>
					<input
						type='date'
						placeholder='end_date'
						onChange={e => setEnd_date(e.target.value)}
					/>
					<select onChange={e=>setId(e.target.value)}>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
					</select>
					<input type='submit' className='bg-red-600 text-white p-2 rounded-md hover:bg-red-300 duration-300 cursor-pointer' />
				</form>
				<div className='top-charts flex gap-10 justify-between px-10 py-8'>
					<div className='charts w-full flex justify-between'>
						{chartCards.map(item => {
							return (
								<div
									className={`chart-card w-1/4 h-52 ${item.color} rounded-lg py-7 px-5`}
									key={item.id}
								>
									<span className='bigNum text-4xl font-medium text-gray-100'>
										${item.price}
									</span>
									<div className='info-type text-gray-100 text-xl mt-1'>
										{item.name}
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<AllStatics />
			</div>
		</div>
	)
}

export default Main
