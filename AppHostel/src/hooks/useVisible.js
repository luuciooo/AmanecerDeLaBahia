import { useEffect, useState } from "react";

export const useVisible = () => {
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

    return isVisible;
}