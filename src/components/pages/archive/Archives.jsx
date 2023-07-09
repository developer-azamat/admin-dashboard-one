import React, {useState} from 'react'
import ArchivesProductsData from "./ArchivesProductsData.jsx";
import ArchiveWorkers from './ArchiveWorkers.jsx';
import ArchiveWarehouses from './ArchiveWarehouses.jsx';

const Archives = () =>{
	const [activeLink, setActiveLink] = useState();
	const handleLink2Click = (index) => {
		setActiveLink(index);
	};

	const chartCards = [
	{
		id: 1,
		price: 4255.32,
		name: 'Umumiy Daromad',
		color: "bg-blue-700",
	},
	{
		id: 2,
		price: 5734.32,
		name: 'Jami Foyda',
		color: "bg-red-500",
	},
	{
		id: 3,
		price: 9831.32,
		name: 'Mahsulotlar',
		color: "bg-amber-400",
	},
]
	return (
		<div className='w-full '>
			<div className="current-page w-full h-14 border-gray-300 border-[1px] flex items-center px-10 p-5 gap-3">
				<a href="" className="previous-page underline text-xl text-blue-600">
					Home
				</a>
				<span className="text-1xl">/</span>
				<a
					href=""
					className={`text-xl ${activeLink === 6 ? "text-black" : "text-gray-500 hover:text-black"
					}`}
					onClick={() => handleLink2Click(6)}
				>
					Archives products
				</a>
			</div>
			<div className="flex p-10 items-center justify-between mb-10 gap-5 bg-white/20 ">
				<div className="charts w-full flex justify-between">
					{chartCards.map(item => {
						return (
							<div className={`chart-card w-1/4 h-52 ${item.color} rounded-lg py-7 px-5`} key={item.id}>
									<span className="bigNum text-4xl font-medium text-gray-100">
										${item.price}
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