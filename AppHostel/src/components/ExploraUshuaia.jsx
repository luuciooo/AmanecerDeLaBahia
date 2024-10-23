import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';

const ExploraUshuaia = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Explora Ushuaia
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://ruta-de-imagen/canal-beagle.jpg"
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
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://ruta-de-imagen/parque-nacional.jpg"
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
                </Grid>
                {/* Añade más lugares turísticos aquí */}
            </Grid>
        </Box>
    );
};

export default ExploraUshuaia;