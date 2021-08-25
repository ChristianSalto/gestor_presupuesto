import React, { useState, useEffect } from 'react';
import { Presupuesto } from './component/Presupuesto/Presupuesto';
import { Form } from './component/Form/Form';
import { List } from './component/List/List';
import { ControlPresupuesto } from './component/ControlPresupuesto/ControlPresupuesto';

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [resto, setResto] = useState(0);
  const [showMsj, setShowMsj] = useState(true);
  const [addExpense, setAddExpense] = useState([]);
  const [addSpending, setAddSpending] = useState({});
  const [checkAddSpending, setCheckAddSpending] = useState(false)


  useEffect(() => {
    if (checkAddSpending) {
      setAddExpense([
        ...addExpense,
        addSpending
      ]);

      const restPresupuesto = resto - addSpending.spending
      setResto(restPresupuesto);

      setCheckAddSpending(false);
    }
  }, [addSpending])


  return (
    <div className="container">
      <header>
        <h1>Gestor de presupuesto</h1>
        <div>
          {showMsj ? (
            <Presupuesto
              setPresupuesto={setPresupuesto}
              setResto={setResto}
              setShowMsj={setShowMsj} />
          ) : (
            <div className="row">
              <div className="col">
                <Form
                  setAddSpending={setAddSpending}
                  setAddExpense={setAddExpense}
                  setCheckAddSpending={setCheckAddSpending} />
              </div>
              <div className="col">
                <List data={addExpense} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  resto={resto} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
