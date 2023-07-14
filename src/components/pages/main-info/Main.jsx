import { useEffect, useState } from 'react'
import helperDate from '../../../helpers/date-now'
import productService from '../../api/productsApi'
import AllStatics from './AllStatics'
import './Main.css'

function Main() {
	const [id, setId] = useState(1)
	const [nowDay, setNowDay] = useState('')
	const [nowMonth, setNowMonth] = useState('')
  const [houses, setHouses] = useState([])

	const [data, setData] = useState(JSON.parse(localStorage.getItem('total'))? JSON.parse(localStorage.getItem("total")) : null)
	const getFilialsName = async () => {
		try {
			const { data } = await productService.getWhareHouses()

			setHouses(data)
		} catch (error) {
			console.log('Xatolik !')
		}
	}

	const getStats = async (e) => {
		e.preventDefault()
		
		// const starting = helperDate.nowDate(start_date ? start_date : '2023-05-06')
		// const ending = helperDate.nowDate(end_date ? end_date : "2023-07-10")


		const db = {
			start_date: nowDay ,
			end_date: nowMonth ,
			id: id ? id : 1,
		}

		const { data } = await productService.getAllStats(db)

		setData(data)
		localStorage.setItem("total", JSON.stringify(data))

	}


	const chartCards = [
		{
			id: 1,
			price: data?.umumiy_daromad + " so'm",
			name: 'Umumiy Daromad',
			color: 'bg-blue-700',
		},
		{
			id: 2,
			price: data?.jami_foyda + " so'm",
			name: 'Jami Foyda',
			color: 'bg-red-500',
		},
		{
			id: 3,
			price: data?.mahsulotlar_soni + ' dona',
			name: 'Mahsulotlar',
			color: 'bg-amber-400',
		},
	]

	

	const updateDate = ()=> {
		const startin =	helperDate.newDate()
		const endin = helperDate.lastMonth()

		setNowDay(endin)
		setNowMonth(startin)
	}
		
	useEffect(() => {
		updateDate()
		getStats()		
		getFilialsName()
	}, [])

	return (
		<div className='Main-info w-[100%] h-[100vh] ease-linear '>
			<div className='all-info bg-gray-200 min-h-screen px-2'>
				<form
					className='flex px-10 py-3 justify-between gap-2'
					onSubmit={getStats}
				>
					<select className='hover:text-white bg-transparent border-cyan-500 border-2 rounded-md outline-none hover:bg-cyan-500 duration-300 hover:border-white '>
						<option value={nowDay + ',' + nowMonth}>
							{nowDay + ',' + nowMonth}
						</option>
						{/* <option value={'20020'}>kdjsjd</option> */}
					</select>
					{/* <input
						type='date'
						required
						className='bg-transparent'
						// value={start_date}
						placeholder='start_date'
						onChange={e => setStart_date(e.target.value)}
					/>
					<input
						type='date'
						required
						//	value={end_date}
						placeholder='end_date'
						className='bg-transparent'
						onChange={e => setEnd_date(e.target.value)}
					/> */}

					<select
						onChange={e => setId(e.target.value)}
						value={id}
						className='hover:text-white bg-transparent border-cyan-500 border-2 rounded-md  outline-none hover:bg-cyan-500 duration-300 hover:border-white'
					>
						{(houses &&
							houses.map(item => (
								<option value={item.id}>{item.nom}</option>
							))) || <option value=''>Loading data...</option>}
					</select>
					{/* <select
						className='hover:text-white bg-transparent border-cyan-500 border-2 rounded-md  outline-none hover:bg-cyan-500 duration-300 hover:border-white '
						onChange={e => setId(e.target.value)}
					>
						<option value={1}>1 Andijon</option>
						<option value={2}>2 Namangan</option>
						<option value={3}>3 Toshkent</option>
					</select> */}
					<button
						type='submit'
						className='bg-red-600 text-white p-2 px-5 rounded-md hover:bg-red-300 duration-300 cursor-pointer'
					>
						Jonatish
					</button>
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
				{data ? (
					<AllStatics data={data} />
				) : (
					<div className='w-full h-[90vh] flex justify-center items-center text-4xl font-semibold'>
						Sanani Kiriting
					</div>
				)}
			</div>
		</div>
	)
}

export default Main
