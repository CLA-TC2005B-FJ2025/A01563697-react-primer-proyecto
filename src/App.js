import React from 'react'
import { Tarjeta } from './Tarjeta'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros</div>
        <Tarjeta nombre="Mario" colorFavorito="Rojo"/>
        <Tarjeta nombre="Luigi" colorFavorito="Verde"/>
        <Tarjeta nombre="Peaches" colorFavorito="Rosa"/>
    </div>
  )
}
