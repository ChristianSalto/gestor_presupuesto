import React, { useState } from 'react';
import './styles.css';

export const Presupuesto = () => {

  const [amount, setAmount] = useState(0);


  // manejador del onChenge
  const handleOnChange = e => {
    const { value } = e.target;
    setAmount(parseInt(value));
  }


  // manejado del onSubmit
  const handleOnSubmit = e => {
    e.preventDefault();
    console.log(amount)
  }

  return (
    <div className="container form">
      <h2>Añade tu presupuesto</h2>
      <form
        onSubmit={handleOnSubmit}>
        <input
          type="number"
          className="form-control"
          placeholder="Ingrese tu presupuesto"
          onChange={handleOnChange} />
        <input type="submit" className="form-control inpt-submit" value="AÑADIR PRESUPUESTO" />
      </form>
    </div>
  )
}
