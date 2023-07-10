import { useState } from 'react'
import AllStatics from './AllStatics'
import './Main.css'

function Main() {

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
