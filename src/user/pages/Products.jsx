import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { columns } from './ProductsData'
import productService from '../../components/api/productsApi'

const ProductXodim = () => {
	const [rows, setRows] = useState([]) 
	const [errors, setErrors] = useState()
	const getProRow = async ()=> {
		try {
			const { data } = await productService.getProductsXodim()
			console.log(data.success);
			if(!data.success){
				setErrors(data.message)
			}else {
				setRows(data.mahsulotlar)
			}
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
				columns={columns}
				rows={rows}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
				getRowClassName={() => 'text-lg text-cyan-900 font-[500] '}
			/>
		</div>
	)
}

export default ProductXodim