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
		field: 'FirstCost',
		headerName: 'Tannarx',
		type: 'number',
		width: 200,
	},
	{
		field: 'SalePrice',
		headerName: 'Sotuv Narx',
		type: 'number',
		width: 200,
	},
];

const rows = [
	{
		id: 1,
		FirstCost: '15000$',
		SalePrice: "18000$",
		product: "Bitcoin"
	},
	{
		id: 2,
		FirstCost: '13000$',
		SalePrice: "15000$",
		product: "Bitcoin"
	},
	{
		id: 3,
		FirstCost: '14000$',
		SalePrice: "17500$",
		product: "Bitcoin"
	},
	{
		id: 4,
		FirstCost: '13300$',
		SalePrice: "15500$",
		product: "Bitcoin"
	},
	{
		id: 5,
		FirstCost: '13300$',
		SalePrice: "15500$",
		product: "Bitcoin"
	},
];

function ProductsData() {
	return (
		<div className="">
			<div className='products'>
				<h1 className='text-3xl font-semibold my-5'>Mahsulot</h1>
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

export default ProductsData