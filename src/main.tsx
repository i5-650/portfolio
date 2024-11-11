import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from "@mui/material"
import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: "#194D33",
      contrastText: "#ffffff",
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
