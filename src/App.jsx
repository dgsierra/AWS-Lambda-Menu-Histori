import './App.css'
import React from 'react'
import { MenuDisplay } from './componets/MenuDisplay'
import Orders from './componets/Orders'

function App () {
  return (
    <div className="App">
      <h1>APP PAGE</h1>
      <MenuDisplay />
      <Orders />
    </div>
  )
}

export default App
