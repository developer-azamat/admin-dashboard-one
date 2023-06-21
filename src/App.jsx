import React, { useState } from 'react'
import "./App.css"
import Home from './components/pages/Sidebar/Home'
import Main from './components/pages/main-info/Main'

const App = () => {
  return (
    <div className='App flex'>
      <Home/>
      <Main/>
    </div>
  )
}

export default App
