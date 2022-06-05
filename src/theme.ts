import { blue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#353839',
    },
    secondary: {
      main: red[400],
    },
    info: {
      main: blue[400],
    },
  },
});

export default theme;
