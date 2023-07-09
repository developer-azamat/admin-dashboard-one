import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productService from './api/productsApi'
const AddingFilials = ({ setIsActive }) => {
	const [nom, setNom] = useState('')
	const [manzil, setManzil] = useState('')
	const [tel, setTel] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		const filial = {
			nom: nom,
			manzil: manzil,
			tel: tel,
		}

		try {
			await productService.setWhareHouse(filial)
			setIsActive(prev=> !prev)
		} catch (error) {
			console.log('error setting')
		}
	}
	return (
		<>
			<div className='flex mt-5 justify-center items-start w-[100%] bg-[white] min-h-[100vh]'>
				<form
					onSubmit={handleSubmit}
					className='!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[600px] shadow-md 
         shadow-white bg-black/10 bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-6 3xl:p-![18px]'
				>
					<div className='relative flex flex-col justify-between'>
						<span className='flex shadow-md mb-5 text-xs'>
							<span className='bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l'>
								Filial
							</span>
							<input
								className='field text-sm text-gray-600 p-2 px-3 rounded-r w-full'
								type='text'
								id='filialname'
								placeholder=''
								onChange={e => setNom(e.target.value)}
							/>
						</span>
						<span className='flex shadow-md mb-5 text-xs'>
							<span className='bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l'>
								Manzil
							</span>
							<input
								className='field text-sm text-gray-600 p-2 px-3 rounded-r w-full'
								type='text'
								id='adress'
								placeholder=''
								onChange={e => setManzil(e.target.value)}
							/>
						</span>
						<span className='flex shadow-md mb-5 text-xs'>
							<span className='bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l'>
								Tel
							</span>
							<input
								className='field text-sm text-gray-600 p-2 px-3 rounded-r w-full'
								type='tel'
								placeholder=''
								onChange={e => setTel(e.target.value)}
							/>
						</span>
						<button className='border-2 border-indigo-500 hover:bg-indigo-500 hover:text-gray-100 mt-3 text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold'>
							Add
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default AddingFilials
