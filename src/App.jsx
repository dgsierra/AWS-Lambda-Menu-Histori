import './App.css'
import React from 'react'
import { Users } from './componets/Users'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className="App flex flex-col justify-center gap-10">
      <h1 className='text-4xl font-bold'>Comedor Histori Restaurante</h1>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<h1> 404: Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
