import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
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
            <List>
                <ListItem sx={{  padding : '5vh 5vw'}}>
                <ListItemText primary={<Typography variant="h5" sx={{textAlign: 'end', padding : '0 5vw 0 0'}}>Desayuno con pan rico incluido</Typography>} />
                    <ListItemIcon ><LocalCafeIcon sx={{ fontSize: 60 }}/></ListItemIcon>
                </ListItem>
                <ListItem sx={{  padding : '5vh 5vw'}}>
                    <ListItemIcon ><KitchenIcon sx={{ fontSize: 60 , padding : '0 5vw 0 0' }} /></ListItemIcon>
                    <ListItemText primary={<Typography variant="h5">Cocina equipada para preparar tus propias comidas</Typography>} />
                </ListItem>
                <ListItem sx={{ justifyContent: 'flex-end' }}>
                    <ListItemText primary={<Typography variant="body1">Salón común con TV y chimenea</Typography>} />
                    <ListItemIcon sx={{ fontSize: 40 }}><TvIcon /></ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon sx={{ fontSize: 40 }}><FireplaceIcon /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body1">Chimenea en el salón</Typography>} />
                </ListItem>
                <ListItem sx={{ justifyContent: 'flex-end' }}>
                    <ListItemText primary={<Typography variant="body1">Biblioteca y juegos de mesa</Typography>} />
                    <ListItemIcon sx={{ fontSize: 40 }}><BookIcon /></ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon sx={{ fontSize: 40 }}><LocalLaundryServiceIcon /></ListItemIcon>
                    <ListItemText primary={<Typography variant="body1">Servicio de lavandería y planchado</Typography>} />
                </ListItem>
                <ListItem sx={{ justifyContent: 'flex-end' }}>
                    <ListItemText primary={<Typography variant="body1">Recepción 24 horas</Typography>} />
                    <ListItemIcon sx={{ fontSize: 40 }}><AccessTimeIcon /></ListItemIcon>
                </ListItem>
            </List>
        </Box>
    );
};
export default ServiciosComodidades;