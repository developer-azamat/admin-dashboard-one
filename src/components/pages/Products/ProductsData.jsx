import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { rows, columns } from './ProductArray';



function ProductsData() {

	const navigate = useNavigate();
  const handleRow = (item) => {
    const id = item.row.id
    navigate(`/products/${id}`);
  };

	return (
		<div className="">
			<div className='products'>
				<h1 className='text-3xl font-semibold my-5'>Mahsulotlar</h1>
				<div style={{ background: "white", }} className='w-full'>
					<DataGrid
						rows={rows}
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

export default ProductsData