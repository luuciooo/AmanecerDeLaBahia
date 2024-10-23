import Bienvenida from "../components/Bienvenida"
import SocialButtons from "../components/Buttons/SocialButtons"
import PhotoCarousel from "../components/Carousel/PhotoCarusel"
import ExploraUshuaia from "../components/ExploraUshuaia"
import ReservationForm from "../components/Form/ReservationForm"
import HabitacionesConfortables from "../components/HabitacionesConfortables"
import ServiciosComodidades from "../components/ServiciosComodidades"

const Home = () => {
    return (
        <>
            <PhotoCarousel />
            <SocialButtons />
            <ReservationForm />
            <Bienvenida />
            <HabitacionesConfortables/>
            <ServiciosComodidades />
            <ExploraUshuaia />
        </>
    )
}

export default Home;
