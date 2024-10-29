import { Box, List, Typography } from "@mui/material";
import ItemServicio from "./ItemServicio";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import KitchenIcon from '@mui/icons-material/Kitchen';
import TvIcon from '@mui/icons-material/Tv';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import BookIcon from '@mui/icons-material/Book';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTheme } from "@emotion/react";

const ServiciosComodidades = () => {
    const servicios = [
        { texto: 'Desayuno con pan rico incluido', icono: <LocalCafeIcon sx={{ fontSize: 60 }}/> },
        { texto: 'Cocina equipada para preparar tus propias comidas', icono: <KitchenIcon sx={{ fontSize: 60 }}/> },
        { texto: 'Salón común con TV y chimenea', icono: <TvIcon sx={{ fontSize: 60 }}/> },
        { texto: 'Chimenea en el salón', icono: <FireplaceIcon sx={{ fontSize: 60 }}/> },
        { texto: 'Biblioteca y juegos de mesa', icono: <BookIcon sx={{ fontSize: 60 }}/> },
        { texto: 'Servicio de lavandería y planchado', icono: <LocalLaundryServiceIcon sx={{ fontSize: 60 }}/> },
        { texto: 'Recepción 24 horas', icono: <AccessTimeIcon sx={{ fontSize: 60 }}/> }
    ];

    const theme = useTheme();
    
    return (
        <>
        <Typography variant="h3" component="div" sx={{margin:'10vh 5vw 0vh 5vw', color: theme.palette.primary.main, textAlign:'center'}}>
            Servicios
        </Typography>
        <Box sx={{ padding: 3 }}>
            <List>
                {servicios.map((servicio, index) => (
                    <ItemServicio
                        key={index}
                        icono={servicio.icono}
                        texto={servicio.texto}
                        esImpar={index % 2 === 0} // Si el índice es par, es impar visualmente
                    />
                ))}
            </List>
        </Box>
        </>
    );
};

export default ServiciosComodidades;