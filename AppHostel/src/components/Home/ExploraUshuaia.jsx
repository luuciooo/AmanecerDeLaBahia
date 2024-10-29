import { useTheme } from '@emotion/react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const ExploraUshuaia = () => {
    const theme = useTheme(); // Obtener el theme de Material UI
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h3" component="div" sx={{margin:'10vh 5vw 10vh 5vw', color: theme.palette.primary.main, textAlign:'center'}}>
            Explorar Ushuaia
        </Typography>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Colocar las cartas en columnas
                    alignItems: 'center', // Centrar las cartas horizontalmente
                    width: '100%', // Ocupa el 90% del ancho
                    gap: '5vh', // Distancia de 10vh entre cartas
                    margin: '0 auto' // Centrar el contenedor en la página
                }}
            >
                <Card sx={{
                    border: `5px solid ${theme.palette.primary.main}`,
                    borderRadius: '20px',
                    boxShadow: `0 10px 20px 0 ${theme.palette.secondary.main}`
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="../../../public/Ushuaia/CanalBeagle.jpg"
                        alt="Canal de Beagle"
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Canal de Beagle
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pasea por el Canal de Beagle y disfruta de la vida silvestre marina.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{
                    border: `5px solid ${theme.palette.primary.main}`,
                    borderRadius: '20px',
                    boxShadow: `0 10px 20px 0 ${theme.palette.secondary.main}`
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="../../../public/Ushuaia/Parque.jpg"
                        alt="Parque Nacional Tierra del Fuego"
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Parque Nacional Tierra del Fuego
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Visita uno de los parques más bellos de Argentina.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{
                    border: `5px solid ${theme.palette.primary.main}`,
                    borderRadius: '20px',
                    boxShadow: `0 10px 20px 0 ${theme.palette.secondary.main}`
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="../../../public/Ushuaia/GlaciarMartial.jpg"
                        alt="Glaciar Martial"
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Glaciar Martial
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Disfruta de una caminata en el Glaciar Martial y contempla vistas impresionantes.
                        </Typography>
                    </CardContent>
                </Card>
                {/* Añade más lugares turísticos aquí */}
            </Box>
        </Box>
    );
};

export default ExploraUshuaia;