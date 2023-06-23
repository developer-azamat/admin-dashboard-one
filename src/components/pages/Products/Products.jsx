import React, { useState } from 'react'
import ProductsData from './ProductsData';
import SalesData from './SalesData';
import "./Products.css"

function Products() {
	const [activeLink, setActiveLink] = useState();
	const handleLink2Click = (index) => {
		setActiveLink(index);
	  };
	// const [show, setShow] = useState(false);

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
		<div className="w-full">
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
          Dashboard
        </a>
      		</div>
			<div className='px-10 py-8'>
			<div className="flex items-center justify-between mb-10 gap-5 bg-white/20 ">
				<div className="charts w-full flex justify-between">
					{chartCards.map(item => {
						return(
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
			<ProductsData />
			<SalesData />
			</div>
		</div>
	);
}

export default Products