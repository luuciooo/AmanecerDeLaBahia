import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from 'react';
import Home from "../pages/Home";
import Habitaciones from "../pages/RoomsAndReservations";
import DescubreUshuaia from "../pages/DiscoverUshuaia";
import UbicacionYContacto from "../pages/LocationAndContact";
import Servicios from "../pages//Services";
import Reseñas from "../pages/Reviews";


export const MainLayaout = () => {
    const [selectedOption, setSelectedOption] = useState('Home');

    const handleMenuOptionChange = (option) => {
        setSelectedOption(option);
        console.log('Opción seleccionada:', option); // Manejar la lógica adicional que necesites
    };

    const renderContent = () => {
        switch (selectedOption) {
            case 'Home':
                return <Home />;
            case 'Habitaciones y Tarifas':
                return <Habitaciones />;
            case 'Descubre Ushuaia':
                return <DescubreUshuaia />;
            case 'Servicios':
                return <Servicios/>;
            case 'Ubicacion y contacto':
                return <UbicacionYContacto  />;
            case 'Reseñas':
                return <Reseñas />;
        }
    };

    return (
        <>
            <Header onMenuOptionChange={handleMenuOptionChange} />
            {renderContent()}
            <Footer></Footer>
        </>
    )
}
