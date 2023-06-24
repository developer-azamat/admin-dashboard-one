import React from "react";
import "./App.css";
import Sidebar from "./components/pages/sidebar/Sidebar";
import Main from "./components/pages/main-info/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Workers from "./components/pages/workers/Workers";
import Filials from "./components/pages/filials/Filials";
import Products from "./components/pages/Products/Products";
import Navbar from "./components/Navbar";
import Statistics from "./components/pages/statistics/Statistics";
import Product from "./components/pages/Product/Product";

const App = () => {
  return (
    <div className="flex overflow-x-hidden">
      <BrowserRouter>
        <Sidebar />
        <div className='w-full'>
          <Navbar />
          <div className="pages h-[90vh] overflow-y-scroll ">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/worker" element={<Workers />} />
              <Route path="/filials" element={<Filials />} />
              <Route path="/static" element={<Statistics />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
