import React, { useState } from "react";
import Example from "../../Example";
import DataTable from "../../DataTable";
import AddingWorkers from "../addworkers/AddingWorkers";
import "./Filials.css";
import FilialTable from "../../FilialTable";
import AddingFilials from "../../AddingFilials";

const Filials = () => {
  const dataWorkers = [
    {
      name: "Umumiy daromad",
      price: "13000" + "$",
      id: 1,
    },
    {
      name: "Jami foyda",
      price: "15000" + "$",
      id: 2,
    },
    {
      name: "Jami mahsulotlar soni",
      price: "1200",
      id: 3,
    },
  ];

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="px-10 py-5 w-full">
      <div className="flex items-center justify-between  mb-10 gap-5 bg-white/20 ">
        {dataWorkers.map((worker) => (
          <Example key={worker.id} worker={worker} />
        ))}
      </div>
      <a href="#" className="flex justify-end">
        <button
          className="px-5 py-2 bg-gray-600/90 hover:bg-gray-600/40 transition-all duration-200 ease-in hover:text-black mb-2 text-base rounded-md  text-white"
          onClick={() => setIsActive((prev) => !prev)}
        >
          {!isActive ? "Add filial" : "List filials"}
        </button>
      </a>
      {!isActive ? <FilialTable /> : <AddingFilials />}
    </div>
  );
};

export default Filials;
