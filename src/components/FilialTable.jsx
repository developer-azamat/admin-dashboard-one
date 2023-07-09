import { DataGrid } from '@mui/x-data-grid'
import * as React from 'react'
import productService from './api/productsApi'

const columns = [
  { field: 'id', headerName: 'T/r', width: 70 },
  {
    field: 'nom',
    headerName: 'Filial nomi',
    type: 'text',
    width: 150,
  },
  {
    field: 'manzil',
    headerName: 'Manzil',
    type: 'text',
    width: 130,
  },
  {
    field: 'tel',
    headerName: 'Telefon raqami',
    type: 'number',
    width: 130,
  },
];


export default function FilialTable() {
  const [rows, setRows] = React.useState([])
  const getRowsWhare = async () => {
		console.log('iksansjans')
		const {data} = await productService.getWhareHouses()
    setRows(data)
		console.log(data)
	}

	React.useEffect(() => {
		getRowsWhare()
	}, [])
  return (
    <div style={{ height: 400, background:"white",}}  className='w-full'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
				getRowClassName={()=> "text-sm text-cyan-900 font-[500] "}
				autoPageSize={true}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}