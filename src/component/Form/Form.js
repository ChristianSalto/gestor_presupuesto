import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Error } from '../Error/Error';
import './styles.css';

export const Form = ({ setAddSpending, setShowMsj, setCheckAddSpending }) => {

  const [name, setName] = useState('');
  const [spending, setSpending] = useState('');
  const [error, setError] = useState(false);


  const handleSpending = (e) => {
    e.preventDefault();


    if (spending < 1 || isNaN(spending) || name.trim() === '') {
      setError(true);
      return;
    }


    setError(false)


    const data = {
      name,
      spending,
      id: shortid.generate(),
    }


    setAddSpending(data);
    setCheckAddSpending(true);



    setName('')
    setSpending(0);
  }

  return (
    <form onSubmit={handleSpending}>
      <h2 className="title-form mt-4 mb-4">Ingrese el gasto</h2>
      <div className="col-12 text-start">
        <label className="col-form-label">Tipo de gasto : </label>
        <input type="text"
          className="form-control"
          placeholder="Ej. Comida"
          value={name}
          onChange={e => setName(e.target.value)} />
      </div>
      <div className="col-12 text-start mb-4">
        <label className="col-form-label">Cantidad de gasto : </label>
        <input type="number"
          className="form-control"
          placeholder="Ej. Cantidad -> 300"
          value={spending}
          onChange={e => setSpending(parseInt(e.target.value, 10))} />
      </div>

      <input type="submit" className="btn btn-primary col-12 mb-2" value="Añadir gasto" />
      <button className="btn btn-success col-12 mb-5" onClick={e => setShowMsj(true)}>Añadir nuevo presupuesto</button>
      {error ? (
        <Error msj="Ambos campos son obligatorios !!!" />
      ) : (null)}
    </form>
  )
}


Form.protoType = {
  setAddSpending: PropTypes.func.isRequired,
  setShowMsj: PropTypes.func.isRequired,
  setCheckAddSpending: PropTypes.func.isRequired,
}