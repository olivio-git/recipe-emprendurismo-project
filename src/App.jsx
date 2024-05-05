import React from 'react'
import { Route, Routes } from 'react-router'
import { Inicio } from './Inicio'
import Imagenes from './Imagenes'
import MenuMain from './MenuMain'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>} ></Route> 
      <Route path="imagenes" element={<Imagenes />} />
    </Routes>
  )
}

export default App