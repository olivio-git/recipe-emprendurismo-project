import React from 'react'
import { Route, Routes } from 'react-router'
import { Inicio } from './Inicio'
import Imagenes from './Imagenes'
import MenuMain from './MenuMain'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MenuMain/>} ></Route>
      <Route path="/emprendimiento" element={<Inicio />} />
      <Route path="imagenes" element={<Imagenes />} />
    </Routes>
  )
}

export default App