import { useState, useEffect } from 'react';
import { Box } from '@mui/material'; 

const images = [
    '/hostel/pexels-gabii-fernandez-199438359-11545137.jpg',
    '/hostel/pexels-isis-petroni-280715053-13142809.jpg',
    '/hostel/pexels-uncachitodezoom-308724636-13508592.jpg',
];

const PhotoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 7000); // Cambia la imagen cada 7 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
            {images.map((image, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: currentIndex === index ? 1 : 0,
                        transition: 'opacity 2s ease-in-out, filter 2s ease-in-out',
                        willChange: 'opacity, filter',
                    }}
                >
                    <img
                        src={image}
                        alt={`carousel-img-${index}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: currentIndex === index ? 'none' : 'blur(2px)',
                            transition: 'filter 2s ease-in-out',
                        }}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default PhotoCarousel;