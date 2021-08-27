import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { checkBudget } from '../../helpers';
import './../../icon/icomoon.css'
import './styles.css'


export const ControlPresupuesto = ({ presupuesto, resto }) => {

  return (
    <Fragment>
      <div className="alert alert-primary mt-5 alrt-custom alrt-custom">
        Presupuesto: $ {presupuesto}
        <span className="icon-moneybag"></span>
      </div>

      <div className={`${checkBudget(presupuesto, resto)} alrt-custom`}>
        Restante: $ {resto}
        <span className="icon-dollar"></span>
      </div>
    </Fragment>
  )
}


ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  resto: PropTypes.number.isRequired
}