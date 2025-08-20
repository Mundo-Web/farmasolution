import React, { useState, useEffect } from 'react';
import General from '../../../Utils/General';

const AnimatedCintillo = ({ className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    
    // Obtener los cintillos y convertirlos en array
    const cintilloData = General.get("cintillo");
    const cintillos = cintilloData 
        ? cintilloData.split(',').map(c => c.trim()).filter(c => c.length > 0)
        : [];

    // Si no hay cintillos, no renderizar nada
    if (cintillos.length === 0) {
        return null;
    }

    // Si solo hay un cintillo, mostrarlo sin animación
    if (cintillos.length === 1) {
        return <span className={className}>{cintillos[0]}</span>;
    }

    // Efecto para rotar los cintillos
    useEffect(() => {
        if (cintillos.length <= 1) return;

        const interval = setInterval(() => {
            setIsVisible(false);
            
            setTimeout(() => {
                setCurrentIndex((prevIndex) => 
                    (prevIndex + 1) % cintillos.length
                );
                setIsVisible(true);
            }, 300); // Duración del fade out
        }, 4000); // Cambiar cada 4 segundos

        return () => clearInterval(interval);
    }, [cintillos.length]);

    return (
        <span 
            className={`
                ${className} 
                transition-all duration-300 ease-in-out
                ${isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform -translate-y-2'
                }
            `}
            style={{
                display: 'inline-block',
                minHeight: '1.2em', // Evita el salto de layout
            }}
        >
            {cintillos[currentIndex]}
        </span>
    );
};

export default AnimatedCintillo;