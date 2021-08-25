import React from 'react';
import './styles.css';

export const Spending = ({ spending }) => (
  <li className="list-spending mt-5">
    <p>
      {spending.name}
      <span className="sp-spending mb-2">$ {spending.spending}</span>
    </p>
  </li>
)
