import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import authService from '../../api/axios';
import { columns } from './ProductsArray';



function StatisticFilialData() {
	const [addRow, setAddRows] = useState([])
	const navigate = useNavigate()

	const getProductsData = async () => {
		try {
			const { data } = await authService.getProducts()
			setAddRows(data)
			console.log(data);
		} catch (error) {
			console.log(error)
		}
	}
	
	useEffect(() => {
		getProductsData()
	}, [])

	const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/static/${id}`);
  };

	return (
		<div className="px-10 py-4">
			<div className='products'>
				<h1 className='text-3xl font-semibold my-5'>Mahsulot</h1>
				<div style={{ background: "white" }} className='w-full '>
					<DataGrid
						rows={addRow}
						columns={columns}
						onRowClick={handleRow}
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