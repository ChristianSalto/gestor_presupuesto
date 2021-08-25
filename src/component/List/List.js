import React from 'react'
import { Spending } from '../Spending/Spending'
import './styles.css'

export const List = ({ data }) => (
  <div>
    <h2 className="title-list mt-4 mb-4">Listado de gastos</h2>
    {data.map(e => (
      <Spending
        key={e.id}
        spending={e} />
    ))}
  </div>
)
