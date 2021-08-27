import React from 'react';
import PropTypes from 'prop-types';

export const Error = ({ msj }) => (
  <p className="alert alert-danger">{msj}</p>
)


Error.protoType = {
  msj: PropTypes.string.isRequired,
}