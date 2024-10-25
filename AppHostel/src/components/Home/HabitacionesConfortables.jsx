// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material';

const HabitacionesConfortables = () => {
    const theme = useTheme(); // Obtener el theme de Material UI

    // Información de cada slide, incluyendo el color
    const slidesData = [
        {
            title: 'Habitación Confortable 1',
            description: 'Nuestras habitaciones están diseñadas para satisfacer tus necesidades, con camas cómodas, baño privado, TV por cable y Wi-Fi gratuito.',
            imageAlt: 'Habitación confortable 1',
            backgroundColor: theme.palette.primary.main, // Color primario
        },
        {
            title: 'Habitación Confortable 2',
            description: 'Relájate en nuestras cómodas habitaciones con baño privado, aire acondicionado y una hermosa vista al jardín.',
            imageAlt: 'Habitación confortable 2',
            backgroundColor: theme.palette.secondary.main, // Color secundario
        },
        {
            title: 'Habitación Confortable 3',
            description: 'Disfruta de habitaciones espaciosas, decoradas con un estilo moderno y equipadas con todas las comodidades.',
            imageAlt: 'Habitación confortable 3',
            backgroundColor: theme.palette.accent.main, // Color de acento
        },
    ];

    const swiperStyles = {
        width: '80vw',
        height: '70vh',
    };

    return (
        <>
        <Typography variant="h3" component="div" sx={{margin:'10vh 5vw 5vh 5vw', color: theme.palette.primary.main}}>
            Habitaciones disponibles
        </Typography>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                style={swiperStyles}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '18px', backgroundColor: `${slide.backgroundColor}90` }}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', width: '92%', height: '95%', borderRadius: '16px', justifyContent: 'center', backgroundColor: 'transparent' }}>
                            <CardMedia
                                component="img"
                                height="70%"
                                image="https://via.placeholder.com/400" // URL de la imagen (puedes reemplazar con una URL real)
                                alt={slide.imageAlt}
                                sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px', objectFit: 'cover' }} // Ajustar imagen
                            />
                            <CardContent sx={{ height: "30%", backgroundColor: slide.backgroundColor, color: '#fff', textAlign: 'center' }}>
                                <Typography variant="h5" component="div">
                                    {slide.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {slide.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default HabitacionesConfortables;