import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import KitchenIcon from '@mui/icons-material/Kitchen';
import TvIcon from '@mui/icons-material/Tv';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import BookIcon from '@mui/icons-material/Book';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ServiciosComodidades = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Servicios y Comodidades
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon><LocalCafeIcon /></ListItemIcon>
                    <ListItemText primary="Desayuno con pan rico incluido" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><KitchenIcon /></ListItemIcon>
                    <ListItemText primary="Cocina equipada para preparar tus propias comidas" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><TvIcon /></ListItemIcon>
                    <ListItemText primary="Salón común con TV y chimenea" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><FireplaceIcon /></ListItemIcon>
                    <ListItemText primary="Chimenea en el salón" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><BookIcon /></ListItemIcon>
                    <ListItemText primary="Biblioteca y juegos de mesa" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><LocalLaundryServiceIcon /></ListItemIcon>
                    <ListItemText primary="Servicio de lavandería y planchado" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><AccessTimeIcon /></ListItemIcon>
                    <ListItemText primary="Recepción 24 horas" />
                </ListItem>
            </List>
        </Box>
    );
};

export default ServiciosComodidades;