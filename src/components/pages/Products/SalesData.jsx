import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import authService from "../../api/axios";
import { columns } from "./SalesArray";


function SalesData() {
  const [addRow, setAddRows] = useState([]);

  const getCash = async () => {
    try {
      const { data } = await authService.getCash();
      setAddRows(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCash();
  }, []);

  return (
    <div>
      <div className="Sales mt-20">
        <h1 className="text-3xl font-semibold my-5">Sotuvlar</h1>
        <div style={{ background: "white" }} className="w-full">
          <DataGrid
            rows={addRow}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 4 },
              },
            }}
            getRowClassName={() => "text-lg text-cyan-900 font-[500]"}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesData;
