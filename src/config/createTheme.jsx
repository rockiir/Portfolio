import { createTheme } from '@mui/material/styles';

// Defina suas variáveis de CSS como valores de cor do Material-UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#FDC435',
    },
    secondary: {
      main: '#e2a200',
    },
    text: {
      primary: '#828282',
    },
    title: {
      main: '#ffc227', 
    },
    background: {
      default: '#f5f5f5', 
    },
    action: {
      disabled: '#ddd', 
    },
  },
});

export default theme;
