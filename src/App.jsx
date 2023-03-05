import './App.css'
import React from 'react'
import { MenuDisplay } from './componets/MenuDisplay'
import Orders from './componets/Orders'
import { Users } from './componets/Users'
import { Link, Route, Routes } from 'react-router-dom'
import { Form } from './componets/Form'

function App () {
  return (
    <div className="App">
      <h1>Comedor Histori Restaurante</h1>
      <nav>
        <button>
        <Link to="/">Menu</Link></button>
        <button>
        <Link to="orders">Orders</Link></button>
        <button>
        <Link to="users">Users</Link></button>
        <button><Link to="form">Form</Link></button>
      </nav>
      <Routes>
        <Route path="/" element={<MenuDisplay />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<h1> 404: Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
