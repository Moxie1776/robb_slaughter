import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NavBar from './components/NavBar';
import Bio from './routes/bio';
import Contact from './routes/contact';
import Values from './routes/values';
import theme from './theme';

// -----------------------------------------------------------------------------------

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/values' element={<Values />} />
        <Route path='bio' element={<Bio />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
