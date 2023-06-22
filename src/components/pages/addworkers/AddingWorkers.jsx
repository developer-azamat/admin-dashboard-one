import React from "react";

const AddingWorkers = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.fullname.value);
  };
  return (
    <>
      <div className="flex mt-5 justify-center items-start w-[100%] bg-[white] min-h-[100vh]">
        <form
          onSubmit={handleSubmit}
          className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] md:max-w-[600px] shadow-md 
         shadow-white bg-black/10 bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-6 3xl:p-![18px]"
        >
          <div className="relative flex flex-col justify-between">
            <span className="flex shadow-md mb-5 text-xs">
              <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                Fullname
              </span>
              <input
                className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                type="text"
                id="fullname"
                placeholder=""
              />
            </span>
            <span className="flex shadow-md mb-5 text-xs">
              <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                Username
              </span>
              <input
                className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                type="text"
                id="username"
                placeholder=""
              />
            </span>
            <span className="flex shadow-md mb-5 text-xs">
              <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                Password
              </span>
              <input
                className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                type="password"
                id="password"
                placeholder=""
              />
            </span>
            <span className="flex shadow-md mb-5 text-xs">
              <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                Filial
              </span>
              <input
                className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                type="text"
                placeholder=""
              />
            </span>
            <span className="flex shadow-md mb-5 text-xs">
              <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                Bio
              </span>
              <input
                className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                type="text"
                id="bio"
                placeholder=""
              />
            </span>
            <span className="flex shadow-md mb-5 text-xs">
              <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
                Tel
              </span>
              <input
                className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                type="tel"
                placeholder=""
              />
            </span>
            <button className="border-2 border-indigo-500 hover:bg-indigo-500 hover:text-gray-100 mt-3 text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddingWorkers;
