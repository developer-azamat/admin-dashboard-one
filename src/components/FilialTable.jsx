import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: "id", headerName: "T/r", width: 70 },
  {
    field: "filial",
    headerName: "Filial nomi",
    type: "text",
    width: 150,
  },
  {
    field: "adress",
    headerName: "Manzil",
    type: "text",
    width: 130,
  },
  {
    field: "telnumber",
    headerName: "Telefon raqami",
    type: "number",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    adress: "Snow",
    firstName: "Jon",
    telnumber: "+998908749223",
    filial: "Toshkent",
  },
  {
    id: 2,
    adress: "Lannister",
    firstName: "Cersei",
    telnumber: "+998908749223",
    filial: "Farg'ona",
  },
  {
    id: 3,
    adress: "Lannister",
    firstName: "Jaime",
    telnumber: "+998908749223",
    filial: "Farg'ona",
  },
  {
    id: 4,
    adress: "Stark",
    firstName: "Arya",
    telnumber: "+998908749223",
    filial: "Farg'ona",
  },
];

export default function FilialTable() {
  const [rows, setRows] = React.useState([])
  const getRowsWhare = async () => {
		const {data} = await productService.getWhareHouses()
    setRows(data)
	}

	React.useEffect(() => {
		getRowsWhare()
	}, [])
  return (
    <div style={{ height: 400, background: "white" }} className="w-full">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        getRowClassName={() => "text-sm text-cyan-900 font-[500] "}
        autoPageSize={true}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
