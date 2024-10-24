import { Box, Fab } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const SocialButtons = () => {

    return (
        <>
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
        </>
    );
};

export default SocialButtons;