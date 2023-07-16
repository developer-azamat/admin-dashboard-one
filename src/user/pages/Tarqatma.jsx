import React, { useEffect, useState } from 'react'
import ProductXodim from './Products'
import TarqatmaCom from './components/TarqatmaCom'
import XodimSotuvlar from './components/XodimSotuvlar'

const Tarqatma = () => {
	return (
		<div className=' px-5 py-10 bg-white/20'>
			<ProductXodim />
			<div className='flex justify-between items-center py-3 px-5'>
				<div classNameName='flex'>
					<h1>Xodim tarqatmalari</h1>
				</div>
			</div>
			{/* <TarqatmaCom />
			<XodimSotuvlar /> */}
		</div>
	)
}

export default Tarqatma
