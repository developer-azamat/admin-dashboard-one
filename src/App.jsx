import React from 'react'
import "./App.css"
import Home from './components/pages/Sidebar/Home'
import Main from './components/pages/main-info/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Workers from './components/pages/workers/Workers'

const App = () => {
  return (
  <div className='App flex overflow-y-hidden'>
    <BrowserRouter>
      <Home/>
       <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/worker' element={<Workers/>}/>
       </Routes>
   </BrowserRouter>
  </div>
  )
}

export default App
