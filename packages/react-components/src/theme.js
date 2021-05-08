import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 720,
      lg: 960,
      xl: 1280,
    },
  },
  typography: {
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
  },
});
