import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { columns } from './ProductsData'
import productService from '../../components/api/productsApi'
import { getRowEl } from '@mui/x-data-grid/utils/domUtils'

const ProductXodim = () => {
	const [rows, setRows] = useState([]) 
	const getProRow = async ()=> {
		try {
			const {data} = await productService.getProductsXodim()

			// setRows(data)
			setRows(data.mahsulotlar)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(()=> {
		getProRow()
	},[])
	return (
		<div>
			<DataGrid
				// rows={addRow}
				columns={columns}
				rows={rows}
				// onRowClick={handleRow}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
				getRowClassName={() => 'text-lg text-cyan-900 font-[500] '}
				// checkboxSelection
			/>
		</div>
	)
}

export default ProductXodim