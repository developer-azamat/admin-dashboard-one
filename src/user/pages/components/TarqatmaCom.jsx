import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import productService from '../../../components/api/productsApi'
import { columns1 } from '../ProductsData'

const TarqatmaCom = () => {
	const [data, setData] = useState([])

	const getTarqatma = async () => {
		try {
			const { data } = await productService.getTarqatmalar()
			setData(data.details)
		} catch (error) {
			console.log(error.request)
		}
	}

	useEffect(() => {
		getTarqatma()
	}, [])

	return (
		<div>
		{/* {data &&	<DataGrid
				columns={columns1}
				rows={data}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
				getRowClassName={() => 'text-lg text-cyan-900 font-[500] '}
			/>} */}
		</div>
	)
}

export default TarqatmaCom
