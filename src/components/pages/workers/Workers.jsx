import React from 'react'
import Example from "../../Example"
import DataTable from '../../DataTable'
function Workers() {
	const dataWorkers = [
		{
			name:"Umumiy daromad",
			price: "120000" +"$",
			id: 1
		},
		{
			name:"Jami foyda",
			price: "120000"+ "$",
			id: 2
		},
		{
			name:"Jami mahsulotlar soni",
			price: "1200",
			id: 3
		},
	]
	return (
		<div className='px-10 py-5'>
			<div className='flex items-center mb-10 gap-5 bg-white/20 '>
				{dataWorkers.map((worker)=> (
					<Example key={worker.id} worker={worker} />
				))}
				
			</div>
			<DataTable />
			</div>
	)
}

export default Workers