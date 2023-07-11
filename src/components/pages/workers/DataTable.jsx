import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import authService from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { columns } from "./WorkersArray";

export default function DataTable({ role }) {
  const [addRow, setAddRows] = useState([]);
  const [name, setName] = useState("");
  const [fam, setFam] = useState("");
  const [kpi, setKpi] = useState(0);
  const [ombor, setOmbor] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [filial, setFilial] = useState(null);
  const [tel, setTel] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const getWorkersData = async () => {
    try {
      const { data } = await authService.getWorkers();
      setAddRows(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWorkersData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRow = {
      username: username,
      password: password,
      ism: name,
      fam: fam,
      ombor: ombor,
      tel: tel,
      kpi: kpi,
      deleted: false
    };

    try {
      console.log(newRow)
      const data =  await authService.setWorkers(newRow);
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    setIsActive(!isActive);
  };

  const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/worker/${id}`);
  };

  return (
    <div>
      <div className="flex justify-end">
        {role === "admin" ? (
          <button
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="px-5 py-2 bg-gray-600/90 hover:bg-gray-600/40 transition-all duration-200 ease-in hover:text-black mb-2 text-base rounded-md text-white"
          >
            {!isActive ? "Xodim qoshish" : "orqaga"}
          </button>
        ) : (
          ""
        )}
      </div>
      {!isActive ? (
        <div style={{ height: 400, background: "white" }} className="w-full">
          <DataGrid
            rows={addRow}
            onRowClick={handleRow}
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
      ) : (
        <div className="w-full flex justify-center items-center mt-10">
          <form
            onSubmit={handleSubmit}
            className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[600px] shadow-md
      shadow-white bg-black/10 bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-6 3xl:p-![18px]"
          >
            <div className="relative flex flex-col justify-between">
              <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                  Lastname
                </span>
                <input
                  onChange={(e) => setFam(e.target.value)}
                  value={fam}
                  className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="text"
                  id="fullname"
                  placeholder=""
                />
              </span>
              <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                  Fullname
                </span>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="text"
                  id="fullname"
                  placeholder=""
                />
              </span>
              <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                  KPI
                </span>
                <input
                  onChange={e => setKpi(e.target.value)}
                  value={kpi}
                  className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="number"
                  id="fullname"
                  placeholder=""
                />
              </span>
              <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                  Ombor
                </span>
                <input
                  onChange={e => setOmbor(e.target.value)}
                  value={ombor}
                  className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="number"
                  id="fullname"
                  placeholder=""
                />
              </span>
              <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                  Password
                </span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="text"
                  id="password"
                  placeholder=""
                />
              </span>
              <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                  Tel
                </span>
                <input
                  onChange={(e) => setTel(e.target.value)}
                  value={tel}
                  className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="text"
                  placeholder=""
                />
              </span>
              <span className="flex shadow-md mb-5 text-xs">
                <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                  Username
                </span>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                  type="text"
                  placeholder=""
                />
              </span>
              <button
                type="submit"
                className="border-2 border-indigo-500 hover:bg-indigo-500 hover:text-gray-100 mt-3 text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
