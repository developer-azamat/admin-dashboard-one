import React, { useState, useEffect } from "react";
import Example from "../../Example";
import "./Filials.css";
import AddingFilials from "../../AddingFilials";
import FilialsData from "./FilialsData";

const Filials = ({role}) => {

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
  const handleClick = () => {
		setIsActive(!isActive)
	}

  return (
    <div className="w-full">

      <div className="px-10 py-8 ">
        <div className="flex items-center justify-between  mb-10 gap-5 bg-white/20 ">
          {dataWorkers.map((worker) => (
            <Example key={worker.id} worker={worker} />
          ))}
        </div>
        <a href="#" className="flex justify-end">
        {role === 'admin' ? !isActive ? (
						<button
							onClick={handleClick}
							className='py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer'
						>
							Omborxona qoshish
						</button>
					) : (
						<button
							onClick={handleClick}
							className='py-3 px-4 border rounded-lg mt-8 bg-[#6558d3] text-white text-lg hover:bg-[#4c43a0] transition-all cursor-pointer'
						>
							Qaytish
						</button>
					) : ''}
        </a>
        <div className="text-xl p-10">
        {!isActive ? <FilialsData /> : <AddingFilials setIsActive={setIsActive} isActive={isActive} />}
        </div>
      </div>
    </div>
  );
};

export default Filials;
