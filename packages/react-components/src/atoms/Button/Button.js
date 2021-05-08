import React from 'react';
import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';

/**
 *
 * @param {string} label
 * @param {string} variant
 * @param {string} color
 * @param {function} onClick
 */
const Button = ({ label, ...rest }) => <MuiButton {...rest}>{label}</MuiButton>;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
