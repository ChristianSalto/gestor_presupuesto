import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RemoveContext from './../../RemoveContext';
import './styles.css';
import './../../icon/icomoon.css';

export const Spending = ({ spending }) => {
  const removeSpending = useContext(RemoveContext);

  return (
    <li className="list-spending mb-2">
      <div>
        {spending.name}
        <div>
          <span className="sp-spending mb-2">$ {spending.spending}</span>
          <span className="icon-x-octagon" onClick={e => removeSpending(spending.id)}></span>
        </div>
      </div>
    </li>
  )
}


Spending.protoType = {
  spending: PropTypes.object.isRequired,
}