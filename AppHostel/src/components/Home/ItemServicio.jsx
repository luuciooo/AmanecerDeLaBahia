import { useTheme } from "@emotion/react";
import { ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

// Definimos una animación de pulso suave para el texto
const pulseAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const ItemServicio = ({ icono, texto, esImpar }) => {
    const theme = useTheme();

    return (
        <ListItem
            sx={{
                padding: '5vh 5vw',
                justifyContent: esImpar ? 'flex-start' : 'flex-end',
            }}
        >
            {esImpar ? (
                <>
                    <ListItemText
                        primary={
                            <Typography
                                variant="h5"
                                sx={{
                                    textAlign: 'end',
                                    padding: '0 5vw 0 0',
                                    animation: `${pulseAnimation} 2s ease-in-out infinite`, // Animación de pulso solo en el texto
                                }}
                            >
                                {texto}
                            </Typography>
                        }
                    />
                    <ListItemIcon
                        sx={{
                            fontSize: 60,
                            color: esImpar ? 'black' : theme.palette.primary.main,
                        }}
                    >
                        {icono}
                    </ListItemIcon>
                </>
            ) : (
                <>
                    <ListItemIcon
                        sx={{
                            fontSize: 60,
                            padding: '0 5vw 0 0',
                            color: theme.palette.primary.main,
                        }}
                    >
                        {icono}
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Typography
                                variant="h5"
                                sx={{
                                    color: theme.palette.primary.main,
                                    animation: `${pulseAnimation} 2s ease-in-out infinite`, // Animación de pulso solo en el texto
                                }}
                            >
                                {texto}
                            </Typography>
                        }
                    />
                </>
            )}
        </ListItem>
    );
};

export default ItemServicio;