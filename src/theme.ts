import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      dark: '#980a31',
      main: '#BF0D3E',
      light: '#cb3d64',
    },
    secondary: {
      main: '#041E42',
      light: '#364a67',
    },
    info: {
      main: '#FFFFFF',
    },
  },
});

export default theme;
