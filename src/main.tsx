import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import './utils/fixLeafletIcons';

const theme = createTheme();

createRoot(document.getElementById('root')!).render(<StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,);
