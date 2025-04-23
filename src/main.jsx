import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {CssBaseline} from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import App from './App.jsx'
import theme from './theme';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CssVarsProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </CssVarsProvider>
    </StrictMode>,
)
