import { CancelOutlined } from '@mui/icons-material'
import React from 'react'

const Modal = ({ setModal, handleRemove, id, modal, cashDelete }) => {
	return (
		<>
			{(modal && (
				<div className='w-full transition-all duration-300 fixed top-0 left-0 h-screen flex items-center justify-center bg-[#000000ab] '>
					<div className='w-[500px] h-[200px] bg-blue-700 text-white relative rounded-md'>
						<div
							className='absolute right-5 top-3 scale-125 hover:text-red-600 cursor-pointer'
							onClick={() => setModal(false)}
						>
							<CancelOutlined />
						</div>
						<h1 className='text-center my-9 text-xl font-serif'>
							Arxivga qo'shilsinmi?{' '}
						</h1>
						<div className='flex justify-center gap-3 '>
							<button
								className='px-4 active:scale-90 ease-linear hover:opacity-80 py-2 bg-blue-50 text-black rounded-md'
								onClick={() => {
									cashDelete(id)
								}}
							>
								OK
							</button>

							<button
								onClick={() => handleRemove(id)}
								className='px-4 active:scale-90 ease-linear hover:opacity-80 py-2 bg-red-500 text-white rounded-md'
							>
								Yo'q
							</button>
						</div>
					</div>
				</div>
			)) || <></>}
		</>
	)
}

export default Modal
