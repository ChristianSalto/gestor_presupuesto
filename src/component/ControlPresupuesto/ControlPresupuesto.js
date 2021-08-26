import React, { Fragment } from 'react';
import { checkBudget } from '../../helpers';


export const ControlPresupuesto = ({ presupuesto, resto }) => {
  return (
    <Fragment>
      <div className="alert alert-primary mt-5">
        Presupuesto: $ {presupuesto}
      </div>
      <div className={checkBudget(presupuesto, resto)}>
        Restante: $ {resto}
      </div>
    </Fragment>
  )
}
