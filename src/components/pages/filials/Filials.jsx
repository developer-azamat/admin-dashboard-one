import React, { useState, useEffect } from "react";
import Example from "../../Example";
import "./Filials.css";
import AddingFilials from "../../AddingFilials";
import FilialsData from "./FilialsData";

const Filials = ({role}) => {

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


  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
		setIsActive(!isActive)
	}

  return (
		<div className='w-full'>
			<div className='px-10 py-8 '>
				<div className='flex items-center justify-between  mb-10 gap-5 bg-white/20 '>
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
				<a href='#' className='flex justify-end'>
					{role === 'admin' ? (
						!isActive ? (
							<button
								onClick={handleClick}
								className='py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer'
							>
								Filial qo'shish
							</button>
						) : (
							<button
								onClick={handleClick}
								className='py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer'
							>
								Qaytish
							</button>
						)
					) : (
						''
					)}
				</a>
				<div className='text-xl p-10'>
					{!isActive ? (
						<FilialsData />
					) : (
						<AddingFilials setIsActive={setIsActive} isActive={isActive} />
					)}
				</div>
			</div>
		</div>
	)
};

export default Filials;
