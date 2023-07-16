import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom/dist'
import authService from '../../api/axios'
import productService from '../../api/productsApi'
import { columns } from './SalesArray'
import helperDate from '../../../helpers/date-now'

function SalesData({ role }) {
	const [addRow, setAddRows] = useState([])
	const [mahsulot, setMahsulot] = useState(1)
	const [miqdor, setMiqdor] = useState(0)
	const [ombor, setOmbor] = useState(1)
	const [xodim, setXodim] = useState(1)
	const [sana, setSana] = useState("")
	const [isActive, setIsActive] = useState(false)
	const navigate = useNavigate()

	const getCash = async () => {
		try {
			const { data } = await authService.getCash()
			setAddRows(data)
      // console.log(data)
		} catch (error) {
			console.log(error)
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

  const getProductsName = async ()=> {
    try {
      const {data} = await authService.getProducts()

      // console.log(data)
      setNameProducts(data)
    } catch (error) {
      console.log('Xatolik !')
    }
  }
	
  const [workers, setWorkers] = useState([])
  
  const getWorkersName = async () => {
		try {
			const { data } = await authService.getWorkers()

			// console.log(data)
			setWorkers(data)
		} catch (error) {
			console.log('Xatolik !')
		}
	}

	useEffect(() => {
		getCash()
    getFilialsName()
    getProductsName()
    getWorkersName()
	}, [])

	const handleClick = () => {
		setIsActive(!isActive)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const nowDate = helperDate.cashDate(sana)
		const newRow = {
			mahsulot: Number(mahsulot),
			miqdor: Number(miqdor),
			ombor: Number(ombor),
			sana: nowDate,
			xodim: Number(xodim),
		}

		const settingCash = async post => {
			try {
        console.log(post)
				const { data } = await authService.setCash(post)
				setAddRows(prew => [...prew, data])
				alert("Sotuv muvaffaqiyatli tarzda qo'shildi")
		    setIsActive(!isActive)

			} catch (error) {
				alert(JSON.parse(error.request.responseText).message)
			}
		}
		settingCash(newRow)
	}

	const handleRow = item => {
		const id = item.row.id
		navigate(`/products/sales/${id}`)
	}

	return (
		<div>
			<div className='Sales mt-20  flex flex-col justify-center items-center'>
				<div className='products-text w-full flex justify-between my-5 items-center'>
					<h1 className='text-3xl font-semibold'>Sotuvlar</h1>
					{role === 'admin' ? (
						!isActive ? (
							<button
								onClick={handleClick}
								className='py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer'
							>
								Sotuv qo'shish
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
				</div>
				{!isActive ? (
					<div style={{ background: 'white' }} className='w-full'>
						<DataGrid
							rows={addRow}
							columns={columns}
							onRowClick={handleRow}
							initialState={{
								pagination: {
									paginationModel: { page: 0, pageSize: 5 },
								},
							}}
							pageSizeOptions={[5, 10]}
							getRowClassName={() => 'text-lg text-cyan-900 font-[500] '}
						/>
					</div>
				) : (
					<div className='w-full flex justify-center items-center'>
						<div className='form-container w-[320px] rounded-[0.75rem] p-[2rem] bg-[#ECF0FF] text-black border hover:border-[black]'>
							<p className='title text-center text-[1.5rem] font-[700] '>
								Mahsulotlar qo'shish
							</p>
							<form className='form mt-[1.5rem]' onSubmit={handleSubmit}>
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
												<option key={item.id} value={item.id}>{item.nom}</option>
											))) || <option value=''>Loading data...</option>}
									</select>
								</div>
								<div className='input-group mt-[0.25rem] text-[0.875rem]'>
									<label htmlFor='miqdor' className='block mb-1'>
										Miqdor
									</label>
									<input
										onChange={e => setMiqdor(e.target.value)}
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
												<option key={item.id} value={item.id}>{item.nom}</option>
											))) || <option value=''>Loading data...</option>}
									</select>
								</div>
								<div className='input-group mt-[0.25rem] text-[0.875rem]'>
									<label htmlFor='ombor' className='block mb-1'>
										Xodim
									</label>
									<select
                  value={xodim}
										onChange={e => setXodim(e.target.value)}
										className='w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3'
									>
										{(workers &&
											workers.map(item => (
												<option key={item.id} value={item.id}>{item.username}</option>
											))) || <option value=''>Loading data...</option>}
									</select>
								</div>

								<div className='input-group mt-[0.25rem] text-[0.875rem]'>
									<label htmlFor='sana' className='block mb-1'>
										Sana
									</label>
									<input
										onChange={e => setSana(e.target.value)}
										type='date'
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
		</div>
	)
}

export default SalesData
