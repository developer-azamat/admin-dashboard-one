import React, { useState } from "react";
import Example from "../../Example";
import DataTable from "../../DataTable";
import AddingWorkers from "../addworkers/AddingWorkers";
function Workers() {
  const dataWorkers = [
    {
      name: "Umumiy daromad",
      price: "120000" + "$",
      id: 1,
    },
    {
      name: "Jami foyda",
      price: "120000" + "$",
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
      <div className="flex w-full justify-between items-center mb-10 gap-5 bg-white/20 ">
        {dataWorkers.map((worker) => (
          <Example key={worker.id} worker={worker} />
        ))}
      </div>
      <a href="#" className="flex justify-end">
        <button
          className="px-5 py-2 bg-gray-600/90 hover:bg-gray-600/40 transition-all duration-200 ease-in hover:text-black mb-2 text-base rounded-md  text-white"
          onClick={() => setIsActive((prev) => !prev)}
        >
          {!isActive ? "Add worker" : "List workers"}
        </button>
      </a>
      {!isActive ? <DataTable /> : <AddingWorkers />}
    </div>
  );
}

export default Workers;
