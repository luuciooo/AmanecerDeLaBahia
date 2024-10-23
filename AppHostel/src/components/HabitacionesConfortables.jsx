import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const HabitacionesConfortables = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', padding: 3 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://ruta-de-imagen/habitacion.jpg"
                    alt="Habitación confortable"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Habitaciones Confortables
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Nuestras habitaciones están diseñadas para satisfacer tus necesidades, con camas cómodas, baño privado, TV por cable y Wi-Fi gratuito.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default HabitacionesConfortables;