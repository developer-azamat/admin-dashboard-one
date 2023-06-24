import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const columns = [
	{
		field: 'id',
		headerName: 'T/r',
		width: 70,
	},
	{
		field: 'product',
		headerName: 'Mahsulot nomi',
		type: 'text',
		width: 250,
	},
	{
		field: 'cost',
		headerName: 'Mahsulot miqdori',
		type: 'number',
		width: 200,
	},
	
];

const rows = [
	{
		id: 1,
		cost: '15',
		product: "Bitcoin"
	},
	{
		id: 2,
		cost: '13',
		product: "Bitcoin"
	},
	{
		id: 3,
		cost: '14',
		product: "Bitcoin"
	},
	{
		id: 4,
		cost: '13',
		
		product: "Bitcoin"
	},
	{
		id: 5,
		cost: '13',
		
		product: "Bitcoin"
	},
];

function StatisticFilialData() {
	return (
		<div className="px-10 py-4">
			<div className='products'>
				<h1 className='text-3xl font-semibold my-5'>Mahsulot</h1>
				<div style={{ background: "white"}} className='w-full '>
					<DataGrid
						rows={rows}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel: { page: 0, pageSize: 4 },
							},
						}}
						getRowClassName={() => "text-lg text-cyan-900 font-[500] "}
					/>
				</div>
			</div>
		</div>
	)
}

export default StatisticFilialData;