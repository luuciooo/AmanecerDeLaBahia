import { Box } from '@mui/material';

const DividerBar = () => {
    return (
        <Box
            sx={{
                width: '100%', // ancho del separador
                height: '20px', // altura del separador
                backgroundColor: 'black', // color de fondo negro
                position: 'fixed', // posición fija
                top: '100vh', // posición debajo del componente anterior
                margin: '0', // eliminar margen
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0)' // sombra transparente
            }}
        />
    );
};

export default DividerBar;