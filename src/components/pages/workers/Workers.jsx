import React, { useState } from "react";
import Example from "../../Example";
import DataTable from "../../DataTable";
function Workers() {
  const [activeLink, setActiveLink] = useState();
	const handleLink2Click = (index) => {
		setActiveLink(index);
	  };
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



  return (
    <div className="w-full">
      <div className="current-page w-full h-14 border-gray-300 border-[1px] flex items-center px-10 p-5 gap-3">
        <a href="" className="previous-page underline text-xl text-blue-600">
          Home
        </a>
        <span className="text-1xl">/</span>
        <a
          href=""
          className={`text-xl ${activeLink === 6 ? "text-black" : "text-gray-500 hover:text-black"
            }`}
          onClick={() => handleLink2Click(6)}
        >
          Dashboard
        </a>
      		</div>
      <div className="px-10 py-8">
      <div className="flex w-full justify-between items-center mb-10 gap-5 bg-white/20 ">
        {dataWorkers.map((worker) => (
          <Example key={worker.id} worker={worker} />
        ))}
      </div>
      <DataTable />
      </div>
    </div>
  );
}

export default Workers;
