import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import authService from "../../api/axios.js";
import { columns } from "./FilialsArray.js";
import { useNavigate } from "react-router-dom";

function FilialsData() {
  const [addRow, setAddRows] = useState([]);
  const navigate = useNavigate()

  const getWhareHouses = async () => {
    try {
      const { data } = await authService.getWhareHouses();
      setAddRows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWhareHouses();
  }, []);

  const handleRow = item => {
		const id = item.row.id
		navigate(`/filials/${id}`)
	}

  return (
    <div className="">
      <div className="filials">
        <h1 className="text-3xl font-semibold my-5">Omborxonalar</h1>
        <div style={{ background: "white" }} className="w-full">
          {addRow.length > 0 ? (
            <DataGrid
              key={addRow.length}
              rows={addRow}
              columns={columns}
              onRowClick={handleRow}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
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

export default FilialsData;
