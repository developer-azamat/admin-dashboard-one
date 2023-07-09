import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import authService from '../../api/axios.js';
import { columns } from './ProductsArray.js';

function ArchivesProductsData() {
  const [addRow, setAddRows] = useState([]);

  const getArchiveProducts = async () => {
    try {
      const { data } = await authService.getArchiveProducts();
      setAddRows(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArchiveProducts();
  }, []);

  return (
    <div className="">
      <div className='products'>
        <h1 className='text-3xl font-semibold my-5'>Arxiv Mahsulotlar</h1>
        <div style={{ background: "white" }} className='w-full'>
          {addRow.length > 0 ? (
            <DataGrid
              rows={addRow}
              columns={columns}
              pagination
              pageSize={4}
              rowsPerPageOptions={[4]}
              className="text-lg text-cyan-900 font-[500]"
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArchivesProductsData;
