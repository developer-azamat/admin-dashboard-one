import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import authService from "../../api/axios";
import { columns } from "./SalesArray";
import { useNavigate } from "react-router-dom/dist";
import productService from "../../api/productsApi";

function SalesData({ role }) {
  const [addRow, setAddRows] = useState([]);
  const [mahsulot, setMahsulot] = useState("");
  const [miqdor, setMiqdor] = useState("");
  const [ombor, setOmbor] = useState("");
  const [xodim, setXodim] = useState("");
  const [sana, setSana] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate()

  const getCash = async () => {
    try {
      const { data } = await authService.getCash();
      console.log(data);
      setAddRows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCash();
  }, []);

  const handleClick = () => {
    setIsActive(!isActive);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRow = {
      mahsulot: mahsulot,
      miqdor: miqdor,
      ombor: ombor,
      sana: sana,
      xodim: xodim,
    };

    const settingCash = async (post) => {
      try {
        const { data } = await authService.setCash(post);
        setAddRows((prew) => [...prew, data]);
      } catch (error) {
        console.log(error);
      }
    };
    settingCash(newRow);
    setIsActive(!isActive);
  };

  const handleRow = (item) => {
    const id = item.row.id;
    navigate(`/products/sales/${id}`);
  };

  return (
    <div>
      <div className="Sales mt-20  flex flex-col justify-center items-center">
        <div className="products-text w-full flex justify-between my-5 items-center">
          <h1 className="text-3xl font-semibold">Sotuvlar</h1>
          {role === 'admin' ? !isActive ? (
            <button
              onClick={handleClick}
              className="py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer"
            >
              Sotuv qoshish
            </button>
          ) : (
            <button
              onClick={handleClick}
              className="py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer"
            >
              Qaytish
            </button>
          ) : ''}
        </div>
        {!isActive ? (
          <div style={{ background: "white" }} className="w-full">
            <DataGrid
              rows={addRow}
              columns={columns}
              onRowClick={handleRow}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              getRowClassName={() => "text-lg text-cyan-900 font-[500] "}
            />
          </div>
        ) : (
          <div className="w-full flex justify-center items-center">
            <div className="form-container w-[320px] rounded-[0.75rem] p-[2rem] bg-[#ECF0FF] text-black border hover:border-[black]">
              <p className="title text-center text-[1.5rem] font-[700] ">
                Mahsulotlar qo'shish
              </p>
              <form className="form mt-[1.5rem]" onSubmit={handleSubmit}>
                <div className="input-group mt-[0.25rem] text-[0.875rem]">
                  <label htmlFor="mahsulot" className="block mb-1">
                    Mahsulot
                  </label>
                  <input
                    onChange={(e) => setMahsulot(e.target.value)}
                    className="w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3"
                    type="number"
                    name="mahsulot"
                    id="mahsulot"
                    placeholder=""
                  />
                </div>
                <div className="input-group mt-[0.25rem] text-[0.875rem]">
                  <label htmlFor="miqdor" className="block mb-1">
                    Miqdor
                  </label>
                  <input
                    onChange={(e) => setMiqdor(e.target.value)}
                    type="number"
                    className="w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3"
                    name="miqdor"
                    placeholder=""
                  />
                </div>
                <div className="input-group mt-[0.25rem] text-[0.875rem]">
                  <label htmlFor="ombor" className="block mb-1">
                    Ombor
                  </label>
                  <input
                    onChange={(e) => setOmbor(e.target.value)}
                    type="number"
                    className="w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3"
                    name="ombor"
                    placeholder=""
                  />
                </div>
                <div className="input-group mt-[0.25rem] text-[0.875rem]">
                  <label htmlFor="ombor" className="block mb-1">
                    Xodim
                  </label>
                  <input
                    onChange={(e) => setXodim(e.target.value)}
                    type="number"
                    className="w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3"
                    name="ombor"
                    placeholder=""
                  />
                </div>
               
                <div className="input-group mt-[0.25rem] text-[0.875rem]">
                  <label htmlFor="sana" className="block mb-1">
                    Sana
                  </label>
                  <input
                    onChange={(e) => setSana(e.target.value)}
                    type="text"
                    className="w-full rounded-md border border-[#334155] outline-none bg-[#d5ddf8] px-4 py-3"
                    name="sana"
                    
                    placeholder="00.00.0000"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-10 sign bg-[#6558d3] hover:bg-[#4c43a0] transition-all text-white"
                >
                  qoshish
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SalesData;
