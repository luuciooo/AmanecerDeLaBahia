import { Box, Typography } from '@mui/material';

const Bienvenida = () => {
    return (
        <Box
            sx={{
                height: '50vh',
                backgroundImage: "url('/hostel/Hostel-Amanecer-de-la-Bahía-18.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: 2,
            }}
        >
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                Bienvenido al Hostal Amanecer de la Bahía
            </Typography>
        </Box>
    );
};

export default Bienvenida;