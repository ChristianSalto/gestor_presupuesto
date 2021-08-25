import React, { Fragment } from 'react'

export const ControlPresupuesto = ({ presupuesto, resto }) => {
  return (
    <Fragment>
      <div className="alert alert-primary mt-5">
        Presupuesto: $ {presupuesto}
      </div>
      <div className="">
        Restante: $ {resto}
      </div>
    </Fragment>
  )
}
