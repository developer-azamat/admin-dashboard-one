import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
const columns = [
	{
		field: 'id',
		headerName: 'T/r',
		width: 70
	},
	{
		field: 'product',
		headerName: 'Mahsulot nomi',
		type: 'text',
		width: 250,
	},
	{
		field: 'amount',
		headerName: 'Miqdori',
		type: 'number',
		width: 50,
	},
	{
		field: 'date',
		headerName: 'Sana',
		type: 'number',
		width: 250,
	},
];

const rows = [
	{
		id: 1,
		date: '22.08.2023',
		amount: "18",
		product: "Bitcoin"
	},
	{
		id: 2,
		date: '31.08.2023',
		amount: "15",
		product: "Bitcoin"
	},
	{
		id: 3,
		date: '11.07.2023',
		amount: "7",
		product: "Bitcoin"
	},
	{
		id: 4,
		date: '21.09.2023',
		amount: "5",
		product: "Bitcoin"
	},
	{
		id: 5,
		date: '12.09.2023',
		amount: "1",
		product: "Bitcoin"
	},
];

function SalesData() {
	return (
		<div>
			<div className='Sales mt-20'>
				<h1 className='text-3xl font-semibold my-5'>Sotuvlar</h1>
				<div style={{ background: "white", }} className='w-full'>
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

export default SalesData