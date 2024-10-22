import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReservationForm from '../Form/ReservationForm';

const PhotoCarousel = () => {
    return (
        <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
            <Carousel 
                showThumbs={false} 
                autoPlay 
                infiniteLoop 
            >
                <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
                    <img 
                        src="../../../public/hostel/pexels-gabii-fernandez-199438359-11545137.jpg" 
                        alt="Slide 1" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                </div>
                <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
                    <img 
                        src="../../../public/hostel/pexels-isis-petroni-280715053-13142809.jpg" 
                        alt="Slide 2" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                </div>
                <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
                    <img 
                        src="../../../public/hostel/pexels-uncachitodezoom-308724636-13508592.jpg" 
                        alt="Slide 3" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                </div>
            </Carousel>
            <ReservationForm />
        </Box>
    );
};

export default PhotoCarousel;