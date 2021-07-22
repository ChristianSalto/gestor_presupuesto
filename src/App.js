import React from 'react';
import { Presupuesto } from './component/Presupuesto/Presupuesto'

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Gestor de presupuesto</h1>
        <div>
          <Presupuesto />
        </div>
      </header>
    </div>
  );
}

export default App;
