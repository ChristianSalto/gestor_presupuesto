import React, { useState, useEffect } from 'react';
import { Presupuesto } from './component/Presupuesto/Presupuesto';
import { Form } from './component/Form/Form';
import { List } from './component/List/List';
import { ControlPresupuesto } from './component/ControlPresupuesto/ControlPresupuesto';
import { Error } from './component/Error/Error';
import { RemoveProvider } from './RemoveContext'


const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [resto, setResto] = useState(0);
  const [showMsj, setShowMsj] = useState(true);
  const [addExpense, setAddExpense] = useState([]);
  const [addSpending, setAddSpending] = useState({});
  const [checkAddSpending, setCheckAddSpending] = useState(false)


  useEffect(() => {
    if (checkAddSpending) {
      if (addSpending.spending <= resto) {
        setAddExpense([
          ...addExpense,
          addSpending
        ]);
        const restPresupuesto = resto - addSpending.spending
        setResto(restPresupuesto);
        setCheckAddSpending(false);
      } else {
        setCheckAddSpending(true);
      }
    }
  }, [addSpending, addExpense, checkAddSpending, resto])




  const removeSpending = (id) => {

    const newAddExpense = addExpense.filter(e => {

      if (e.id === id) setResto(resto + e.spending)
      return e.id !== id;

    })

    setAddExpense(newAddExpense)
    setCheckAddSpending(false)

  }


  return (
    <div className="container">
      <header>
        <h1>Gestor de presupuesto</h1>
        <div className="bg-secondary p-5 rounded">
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
                  setShowMsj={setShowMsj}
                  setCheckAddSpending={setCheckAddSpending} />
              </div>
              <div className="col">
                <RemoveProvider value={removeSpending}>
                  <List data={addExpense} />
                </RemoveProvider>
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  resto={resto} />
                {checkAddSpending ? (
                  <Error msj={`${addSpending.spending} $ supera tu saldo ${resto} $`} />
                ) : (null)}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
