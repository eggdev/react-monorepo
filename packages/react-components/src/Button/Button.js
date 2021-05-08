import React from 'react';
import MuiButton from '@material-ui/core/Button';

const Button = ({ label, variant, ...rest }) => (
  <MuiButton variant={variant} {...rest}>
    {label}
  </MuiButton>
);

export default Button;
