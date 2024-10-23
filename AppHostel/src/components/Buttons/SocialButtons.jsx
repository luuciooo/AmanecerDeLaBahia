import { Box, Fab } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState } from 'react';

const SocialButtons = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsVisible(true); // Mostrar el componente al estar en la parte superior
            } else {
                setIsVisible(false); // Ocultar el componente si se hace scroll
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener cuando se desmonte el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {isVisible &&
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 120,
                        left: 16,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Fab
                        color="primary"
                        href="mailto:tuemail@gmail.com"
                        sx={{
                            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)', // Efecto 3D con sombra
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.4)',
                            },
                        }}
                    >
                        <EmailIcon sx={{ fontSize: 36 }} />
                    </Fab>

                    <Fab
                        color="secondary"
                        href="https://www.instagram.com/tuusuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.4)',
                            },
                        }}
                    >
                        <InstagramIcon sx={{ fontSize: 36 }} />
                    </Fab>

                    <Fab
                        color="success"
                        href="https://wa.me/tuNumero"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.4)',
                            },
                        }}
                    >
                        <WhatsAppIcon sx={{ fontSize: 36 }} />
                    </Fab>
                </Box>
            }
        </>
    );
};

export default SocialButtons;