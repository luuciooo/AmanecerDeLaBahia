import Bienvenida from "../components/Home/Bienvenida"
import SocialButtons from "../components/Buttons/SocialButtons"
import PhotoCarousel from "../components/Carousel/PhotoCarusel"
import ExploraUshuaia from "../components/Home/ExploraUshuaia"
import ReservationForm from "../components/Form/ReservationForm"
import HabitacionesConfortables from "../components/Home/HabitacionesConfortables"
import ServiciosComodidades from "../components/Home/ServiciosComodidades"
import { useVisible } from "../hooks/useVisible"
import DividerBar from "../components/Others/Divider"

const Home = () => {
    const isVisible = useVisible();
    return (
        <>
            <PhotoCarousel />
            {isVisible && (
                <>
                    <SocialButtons />
                    <ReservationForm />
                </>
            )}
            <DividerBar />
            <Bienvenida />
            <HabitacionesConfortables />
            <ServiciosComodidades />
            <ExploraUshuaia />
        </>
    )
}

export default Home;
