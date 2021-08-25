import React, { useState } from 'react';
import { Error } from '../Error/Error';
import './styles.css';

export const Presupuesto = ({ setPresupuesto, setResto, setShowMsj }) => {

  const [amount, setAmount] = useState(0);
  const [err, setErr] = useState(false);


  // manejador del onChenge
  const handleOnChange = e => {
    const { value } = e.target;
    setAmount(parseInt(value));
  }


  // manejado del onSubmit
  const handleOnSubmit = e => {
    e.preventDefault();

    if (amount < 1 || isNaN(amount)) {
      setErr(true);
      return;
    }

    setErr(false);
    setPresupuesto(amount);
    setResto(amount);
    setShowMsj(false);

  }

  return (
    <div className="container form">
      <h2>Añade tu presupuesto</h2>
      {err ? <Error msj="Importe incorrecto" /> : null}
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
