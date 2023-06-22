import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'T/r', width: 70 },
  { field: 'firstName', headerName: 'Fullname', width: 230 },
  {
    field: 'telnumber',
    headerName: 'Telefon raqami',
    type: 'number',
    width: 130,
  },
  {
    field: 'filial',
    headerName: 'Filial',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', telnumber: "+998908749223", filial: "Toshkent" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', telnumber: "+998908749223" , filial: "Farg'ona" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', telnumber: "+998908749223" , filial: "Farg'ona" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', telnumber: "+998908749223" , filial: "Farg'ona" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', telnumber: "+998908749223" , filial: "Farg'ona" },
  { id: 6, lastName: 'Melisandre', firstName: null, telnumber: "+998908749223", filial: "Farg'ona" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', telnumber: "+998908749223",  filial: "Andijon" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', telnumber: "+998908749223", filial: "Andijon" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', telnumber: "+998908749223", filial: "Namangan" },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%', background:"white",}} >
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
				// getCellClassName={()=> "font-semibold"}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
}