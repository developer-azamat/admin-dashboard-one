import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { rows } from '../Products/ProductArray';

function Product() {
	const { id } = useParams();
	const navigte = useNavigate()
	const selectedRow = rows.find((row) => row.id === parseInt(id));

	const [activeLink, setActiveLink] = useState();
	const handleLink2Click = (index) => {
		setActiveLink(index);
	};

	// const chartCards = [
	// 	{
	// 		id: 1,
	// 		price: 4255.32,
	// 		name: 'Umumiy Daromad',
	// 		color: "bg-blue-700",
	// 	},
	// 	{
	// 		id: 2,
	// 		price: 5734.32,
	// 		name: 'Jami Foyda',
	// 		color: "bg-red-500",
	// 	},
	// 	{
	// 		id: 3,
	// 		price: 9831.32,
	// 		name: 'Mahsulotlar',
	// 		color: "bg-amber-400",
	// 	},
	// ]
	const handleReturn = ()=> {
		navigte("/products")
	}

	return (
		<div>
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
			<div className='px-10 py-8' onClick={handleReturn}>
				<div className="flex justify-between items-center my-5">
				<h1 className='text-3xl font-semibold'>Mahsulot</h1>
				<Link to='/products' className='px-5 py-2 bg-gray-600/90 hover:bg-gray-600/40 transition-all duration-200 ease-in hover:text-black text-base rounded-md text-white'>Orqaga qaytish</Link>
				</div>
				{selectedRow && (
					<div className="w-full flex justify-center items-center" key={selectedRow.id} >
						<div className="product-card font-semibold w-[300px] rounded-lg " onClick={(e) => e.stopPropagation()}>
							<div className="bg-[#ecf0ff] rounded-lg p-5">
							<h1 className='text-3xl'>Product: </h1>
							<h2 className='text-2xl'>{selectedRow.product}</h2>
							<p className='mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, recusandae?</p>
							<p className='mt-8 text-xl'>Tannarx: {selectedRow.FirstCost}</p>
							<p className='mt-3 text-xl'>Sotuv Narx: {selectedRow.SalePrice}</p>
							<button className='w-full py-3 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all'>Batafsil</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>

	);
}

export default Product;
