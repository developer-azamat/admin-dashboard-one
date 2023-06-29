import {DataGrid} from '@mui/x-data-grid'
import React from 'react'
import {columns, rows} from './ProductsArray.js';
function ArchivesProductsData() {
    return (
        <div className="">
            <div className='products'>
                <h1 className='text-3xl font-semibold my-5'>Arxiv Mahsulotlar</h1>
                <div style={{background: "white",}} className='w-full'>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {page: 0, pageSize: 4},
                            },
                        }}
                        getRowClassName={() => "text-lg text-cyan-900 font-[500] "}
                    />
                </div>
            </div>
        </div>
    )
}

export default ArchivesProductsData