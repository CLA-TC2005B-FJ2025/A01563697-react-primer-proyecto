import React from 'react'

export function Tarjeta( props ) {
  return (
    <div>
      <div>
        Nombre: {props.nombre}
      </div>
      <div>
        Color favorito: {props.colorFavorito}
      </div>
    </div>
  )
}
