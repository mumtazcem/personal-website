import { createMuiTheme } from '@material-ui/core/styles';
import { red, green, amber } from '@material-ui/core/colors';


// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontWeightMedium: 600,
    fontFamily: ['Open Sans', 'Arial', 'sans-serif'].join(','),
    fontSize: 16,
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    type: "dark"
  },
});

export default theme;
