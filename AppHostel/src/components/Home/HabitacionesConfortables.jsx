// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

const HabitacionesConfortables = () => {
    const swiperStyles = {
        width: '240px',
        height: '320px',
    };

    const slideStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '18px',
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#fff',
    };

    const slideColors = [
        'rgb(206, 17, 17)',    // 1st slide
        'rgb(0, 140, 255)',    // 2nd slide
        'rgb(10, 184, 111)',   // 3rd slide
        'rgb(211, 122, 7)',    // 4th slide
        'rgb(118, 163, 12)',   // 5th slide
        'rgb(180, 10, 47)',    // 6th slide
        'rgb(35, 99, 19)',     // 7th slide
        'rgb(0, 68, 255)',     // 8th slide
        'rgb(218, 12, 218)',   // 9th slide
        'rgb(54, 94, 77)',     // 10th slide (if any more slides)
    ];

    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                style={swiperStyles}
            >
                {slideColors.map((color, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ ...slideStyles, backgroundColor: color }}
                    >
                        Slide {index + 1}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default HabitacionesConfortables;