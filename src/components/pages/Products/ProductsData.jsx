import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { rows, columns } from './ProductArray';



function ProductsData() {

	const navigate = useNavigate();
	const [isActive, setIsActive] = useState(false);
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [mainPrice, setMainPrice] = useState('');
	const [addRow, setAddRows] = useState(rows);

	const handleClick = () => {
		setIsActive(!isActive)
	}



	const handleSubmit = (e) => {
		e.preventDefault()

		const newRow = {
			id: addRow.length + 1,
			FirstCost: `$${price}`,
			SalePrice: `$${mainPrice}`,
			product: name
		}
		setAddRows([...addRow, newRow]);
		setIsActive(!isActive)
	}

	const handleRow = (item) => {
		const id = item.row.id
		navigate(`/products/${id}`);
	};

	return (
		<div className="">
			<div className='products flex flex-col justify-center items-center'>
				<div className="products-text w-full flex justify-between my-5 items-center">
					<h1 className='text-3xl font-semibold'>Mahsulotlar</h1>
					{!isActive ? <button onClick={handleClick} className='py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer'>Mahsulotlar qoshish</button> : <button onClick={handleClick} className='py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer'>qaytish</button>}
				</div>
				{!isActive
					?
					<div style={{ background: "white", }} className='w-full'>
						<DataGrid
							rows={addRow}
							columns={columns}
							onRowClick={handleRow}
							initialState={{
								pagination: {
									paginationModel: { page: 0, pageSize: 8 },
								},
							}}
							getRowClassName={() => "text-lg text-cyan-900 font-[500] "}
						/>
					</div>
					:
					<div className="form-container w-[320px] rounded-[0.75rem] p-[2rem] bg-[#ECF0FF] text-black border hover:border-[black]">
						<p className="title text-center text-[1.5rem] font-[700] ">Mahsulotlar qoshish</p>
						<form className="form mt-[1.5rem]" onSubmit={handleSubmit} >
							<div className="input-group mt-[0.25rem] text-[0.875rem]">
								<label for="username" className='block mb-1'>Mahsulot nomi</label>
								<input
									onChange={e => setName(e.target.value)}
									className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3' type="text" name="username" id="username" placeholder="" />
							</div>
							<div className="input-group mt-[0.25rem] text-[0.875rem]">
								<label for="price" className='block mb-1'>Tannarx</label>
								<input
									onChange={e => setPrice(e.target.value)}
									type='number'
									className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3' name="price" placeholder="" />
							</div>
							<div className="input-group mt-[0.25rem] text-[0.875rem]">
								<label for="pricesecond" className='block mb-1'>Sotuv Narx</label>
								<input
									onChange={e => setMainPrice(e.target.value)}
									type='number'
									className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3' name="pricesecond" placeholder="" />
							</div>
							<button type='submit' className="mt-10 sign bg-[#6558d3] hover:bg-[#4c43a0] transition-all text-white
			">qoshish</button>
						</form>
					</div>}
			</div>
		</div >
	)
}

export default ProductsData