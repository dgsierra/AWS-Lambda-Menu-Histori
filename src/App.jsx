import './App.css'
import React from 'react'
import { Users } from './componets/Users'
import { Route, Routes } from 'react-router-dom'
import { Form } from './componets/Form'

function App () {
  return (
    <div className="App">
      <h1>Comedor Histori Restaurante</h1>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="users" element={<Users />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<h1> 404: Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
