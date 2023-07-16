import React, { useEffect, useState } from 'react'
import productService from '../../api/productsApi'
import { DataGrid } from '@mui/x-data-grid'
import { columns1 } from '../../../user/pages/ProductsData'
import authService from '../../api/axios'
import { useNavigate } from 'react-router-dom'



const Tarqatma = () => {

	const [data, setData] = useState([])

	const getTarqatma = async () => {
		try {
			const { data } = await productService.getTarqatmalarAdmin()
			setData(data)
		} catch (error) {
			console.log(error.request)
		}
	}

	 const [houses, setHouses] = useState([])

		const getFilialsName = async () => {
			try {
				const { data } = await productService.getWhareHouses()
				setHouses(data)
			} catch (error) {
				console.log('Xatolik !')
			}
		}
		const [nameProducts, setNameProducts] = useState([])

		const getProductsName = async () => {
			try {
				const { data } = await authService.getProducts()
				setNameProducts(data)
			} catch (error) {
				console.log('Xatolik !')
			}
		}

	useEffect(() => {
		getTarqatma()
		getFilialsName()
		getProductsName()
	}, [])

	// tarqatma qo'shish

	const [miqdor, setMiqdor] = useState(1)
	const [ombor, setOmbor] = useState(1)
	const [mahsulot, setMahsulot] = useState(1)


	const setTarqatma = async (e) => {
		e.preventDefault()

		try {
			const obj = {
				miqdor: Number(miqdor),
				mahsulot: Number(mahsulot),
				ombor: Number(ombor)
			}

			await productService.setTarqatmaAdmin(obj)
			getTarqatma()
			alert("Mahsulot muvaffaqiyatli tarzda qo'shildi !")
			setActive(false)

		}catch (err){
			if(JSON.parse(err.response.request.responseText).miqdor){
				alert(JSON.parse(err.response.request.responseText).miqdor[0])
			}else if (JSON.parse(err.response.request.responseText).mahsulot) {
				alert(JSON.parse(err.response.request.responseText).mahsulot[0])
			}else if (JSON.parse(err.response.request.responseText).mahsulot) {
				alert(JSON.parse(err.response.request.responseText).ombor[0])
			}else {
				console.log(err);
			}
		}
	}

	const navigate = useNavigate()
	const handleRow = item => {
		const id = item.row.id
		navigate(`/tarqatma/${id}`)
	}

	const [isActive, setActive] = useState(false)

	return (
		<div className='py-10'>
			<div className='products-text w-full flex justify-between my-5 items-center'>
				<h1 className='text-3xl font-semibold'>Tarqatmalar</h1>
				{!isActive ? (
					<button
						onClick={() => setActive(true)}
						className='py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer'
					>
						Tarqatma qo'shish
					</button>
				) : (
					<button
						onClick={() => setActive(false)}
						className='py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer'
					>
						Qaytish
					</button>
				)}
			</div>
			{(!isActive && (
				<DataGrid
					columns={columns1}
					rows={data}
					onRowClick={handleRow}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 5 },
						},
					}}
					pageSizeOptions={[5, 10]}
					getRowClassName={() => 'text-lg text-cyan-900 font-[500] '}
				/>
			)) || (
				<div className='w-full flex justify-center items-center'>
					<div className='form-container w-[320px] rounded-[0.75rem] p-[2rem] bg-[#ECF0FF] text-black border hover:border-[black]'>
						<p className='title text-center text-[1.5rem] font-[700] '>
							Tarqatma qo'shish
						</p>
						<form
							className='form mt-[1.5rem]'
							 onSubmit={setTarqatma}
						>
							<div className='input-group mt-[0.25rem] text-[0.875rem]'>
								<label htmlFor='mahsulot' className='block mb-1'>
									Mahsulot
								</label>
								<select
									onChange={e => setMahsulot(e.target.value)}
									value={mahsulot}
									className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3'
								>
									{(nameProducts &&
									nameProducts.map(item => (
										<option key={item.id} value={item.id}>
											{item.nom}
										</option>
									))) || <option value=''>Loading data...</option>}
								</select>
							</div>
							<div className='input-group mt-[0.25rem] text-[0.875rem]'>
								<label htmlFor='miqdor' className='block mb-1'>
									Miqdor
								</label>
								<input
									onChange={e => setMiqdor(e.target.value)}
									value={miqdor}
									type='number'
									className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3'
									name='miqdor'
									placeholder=''
								/>
							</div>
							<div className='input-group mt-[0.25rem] text-[0.875rem]'>
								<label htmlFor='ombor' className='block mb-1'>
									Ombor
								</label>
								<select
									onChange={e => setOmbor(e.target.value)}
									value={ombor}	
									className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3'
								>
									{(houses &&
									houses.map(item => (
										<option key={item.id} value={item.id}>
											{item.nom}
										</option>
									))) || <option value=''>Loading data...</option>}
								</select>
							</div>
							
							<button
								type='submit'
								className='mt-10 sign bg-[#6558d3] hover:bg-[#4c43a0] transition-all text-white'
							>
								Qo'shish
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default Tarqatma