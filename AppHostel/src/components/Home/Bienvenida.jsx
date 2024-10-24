import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@emotion/react';

const Bienvenida = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                height: '50vh',
                width: '80vw',
                backgroundImage: "url('/hostel/Hostel-Amanecer-de-la-Bahía-18.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: 2,
                margin: '20px auto',
                border: `5px solid ${theme.palette.primary.main}`,
                borderRadius: '20px',
                boxShadow: `0 10px 20px 0 ${theme.palette.secondary.main}`,
                flexDirection: 'column', // Para alinear el contenido verticalmente
            }}
        >
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                Bienvenido al Hostal Amanecer de la Bahía
            </Typography>
            <Button 
                variant="outlined" 
                sx={{ 
                    marginTop: 2, 
                    color: '#fff', 
                    borderColor: '#fff', 
                    '&:hover': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Efecto hover
                    }
                }}
            >
                Reservar Ahora
            </Button>
        </Box>
    );
};

export default Bienvenida;
