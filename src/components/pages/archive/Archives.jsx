import React, {useState} from 'react'
import ArchivesProductsData from "./ArchivesProductsData.jsx";
import ArchiveWorkers from './ArchiveWorkers.jsx';
import ArchiveWarehouses from './ArchiveWarehouses.jsx';

const Archives = () =>{
  const { umumiy_daromad, jami_foyda, mahsulotlar_soni } = JSON.parse(
		localStorage.getItem('total')
	)

	const chartCards = [
		{
			id: 1,
			price: umumiy_daromad + " so'm",
			name: 'Umumiy Daromad',
			color: 'bg-blue-700',
		},
		{
			id: 2,
			price: jami_foyda + " so'm",
			name: 'Jami Foyda',
			color: 'bg-red-500',
		},
		{
			id: 3,
			price: mahsulotlar_soni + 'dona',
			name: 'Mahsulotlar',
			color: 'bg-amber-400',
		},
	]

	return (
		<div className='w-full '>

			<div className="flex p-10 items-center justify-between mb-10 gap-5 bg-white/20 ">
				<div className="charts w-full flex justify-between">
					{chartCards.map((item, key) => {
						return (
							<div className={`chart-card w-1/4 h-52 ${item.color} rounded-lg py-7 px-5`} key={key}>
									<span className="bigNum text-4xl font-medium text-gray-100">
										{item.price}
									</span>
								<div className="info-type text-gray-100 text-xl mt-1">{item.name}</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className='text-xl p-10'>
				<ArchivesProductsData />
				<ArchiveWorkers/>
				<ArchiveWarehouses/>
			</div>
		</div>
	)
}

export default Archives