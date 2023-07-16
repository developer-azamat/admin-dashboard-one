import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { columns2 } from '../../../user/pages/ProductsData'
import productService from '../../../components/api/productsApi'
import { getItem } from '../../../helpers/persistence-log'
import helperDate from '../../../helpers/date-now'

const XodimSotuvlar = () => {
	const [data, setData] = useState([])

	const getSotuvlar = async () => {
		try {
			
			const { data } = await productService.getXodimSotuvlar()
			setData(data.details)
		} catch (error) {
			console.log(error.request)
		}
	}
	const [xodimPro, setXodimPro] = useState([])

	const getXodimProduct = async ()=> {
		try {
			const {data}  = await productService.getProductsXodim()

			setXodimPro(data.mahsulotlar);
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getSotuvlar()
		getXodimProduct()
	}, [])
	const [active, setActive] = useState(false)

	const [date, setDate] = useState('')
	const [mahsulot, setMahsulot] = useState(1)
	const [miqdor, setMiqdor] = useState(1)

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const newDate =	helperDate.cashDate(date)
			
			const xodim = getItem('xodim')
			const ombor = getItem('ombor_id')
			const obj = {
				miqdor: Number(miqdor),
				sana: newDate ,
				mahsulot: Number(mahsulot),
				ombor:Number(ombor),
				xodim:Number(xodim),
			}

			const {data} = await productService.setXodimSotuvlar(obj)
				if(data.success){
					alert("Sotuv muvaffaqiyatli tarzda bazaga qo'shildi !")
					setActive(false)
				}else {
					alert(data.errors)
				}

				setDate("")
				setMahsulot("")
				setMiqdor("")

				
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<div className='flex justify-end'>
				<button
					onClick={() => setActive(!active)}
					className='bg-blue-600 my-4 px-4 py-3 rounded-md text-white hover:opacity-70'
				>
					{(!active && "Sotuv qo'shish") || 'Sotuvlar jadvali'}
				</button>
			</div>
			{(!active && (
				<DataGrid
					columns={columns2}
					rows={data}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 5 },
						},
					}}
					pageSizeOptions={[5, 10]}
					getRowClassName={() => 'text-lg text-cyan-900 font-[500] '}
				/>
			)) || (
				<div className='w-full py-10 flex justify-center items-center'>
					<div className='form-container w-[320px] rounded-[0.75rem] p-[2rem] bg-[#ECF0FF] text-black border hover:border-[black]'>
						<form
							className='form mt-[1.5rem]'
							onSubmit={handleSubmit}
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
									{(xodimPro &&
										xodimPro.map(item => (
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
								<label htmlFor='sana' className='block mb-1'>
									Sana
								</label>
								<input
									onChange={e => setDate(e.target.value)}
									type='date'
									value={date}
									className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3'
									name='sana'
									placeholder='00.00.0000'
								/>
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

export default XodimSotuvlar
