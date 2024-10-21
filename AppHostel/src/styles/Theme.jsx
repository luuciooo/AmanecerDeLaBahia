import { createTheme, ThemeProvider } from '@mui/material/styles';

const muiTheme = createTheme({
    palette: {
        primary: {
            main: '#ca8f07',  // Color primario
        },
        secondary: {
            main: '#eea56d',  // Color secundario
        },
        text: {
            primary: '#1a0f0f',  // Color del texto
        },
        background: {
            default: '#ffffff',  // Color de fondo
        },
        accent: {
            main: '#a73535',  // Color de acento
        },
    },
    typography: {
        fontFamily: 'Open Sans',  // Fuente principal
        h1: {
            fontFamily: 'Gochi Hand',  // Fuente para títulos
            fontWeight: 700,
            fontSize: '4.210rem',  // Tamaño del h1 (67.36px)
        },
        h2: {
            fontFamily: 'Gochi Hand',
            fontWeight: 700,
            fontSize: '3.158rem',  // Tamaño del h2 (50.56px)
        },
        h3: {
            fontFamily: 'Gochi Hand',
            fontWeight: 700,
            fontSize: '2.369rem',  // Tamaño del h3 (37.92px)
        },
        h4: {
            fontFamily: 'Gochi Hand',
            fontWeight: 700,
            fontSize: '1.777rem',  // Tamaño del h4 (28.48px)
        },
        h5: {
            fontFamily: 'Gochi Hand',
            fontWeight: 700,
            fontSize: '1.333rem',  // Tamaño del h5 (21.28px)
        },
        small: {
            fontSize: '0.750rem',  // Tamaño del texto pequeño (12px)
        },
    },
});

const Theme = ({ children }) => {
    return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};
export default Theme;