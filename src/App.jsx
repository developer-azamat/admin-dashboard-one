import React from "react";
import "./App.css";
import Sidebar from "./components/pages/sidebar/Sidebar";
import Main from "./components/pages/main-info/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Workers from "./components/pages/workers/Workers";
import Filials from "./components/pages/filials/Filials";

const App = () => {
  return (
    <div className="flex overflow-y-hidden">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/worker" element={<Workers />} />
          <Route path="/filials" element={<Filials />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
