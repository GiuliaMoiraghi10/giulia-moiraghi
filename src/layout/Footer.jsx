import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import behance from "../assets/behance.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export default function Footer() {
    const [showArrow, setShowArrow] = useState(false);

    // Funzione che gestisce lo scroll
    const handleScroll = () => {
        if (window.scrollY > 300) { // Mostra la freccia dopo aver scrollato 300px
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }
    };

    // Funzione che fa scorrere la pagina in cima
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        // Aggiunge l'event listener quando il componente viene montato
        window.addEventListener('scroll', handleScroll);

        // Rimuove l'event listener quando il componente viene smontato
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // L'array vuoto assicura che l'effetto venga eseguito solo una volta

    return (
        <footer className="h-15 bg-[#EAB899] fixed bottom-0 left-0 w-full flex justify-between items-center px-8">
            <div className='text-white'>Sito Portfolio di Giulia Moiraghi <span className='text-white opacity-70 text-sm'>(realizzato da me con React)</span></div>

            <div className='flex gap-6'>
                <a href="https://www.linkedin.com/in/giulia-moiraghi-a30475b4/" target="_blank"><img className="w-8 hover:opacity-80" src={linkedin} alt="" /></a>
                <a href="https://github.com/GiuliaMoiraghi10" target="_blank"><img className="w-8 hover:opacity-80" src={github} alt="" /></a>
                <a href="https://www.behance.net/giuliamoira1e4" target="_blank"><img className="w-8 hover:opacity-80" src={behance} alt="" /></a>
            </div>

            {/* L'icona che ti riporta in cima, mostrata solo se showArrow è true */}
            {showArrow && (
                <div
                    className="cursor-pointer text-white hover:text-gray-200 transition-colors"
                    onClick={handleScrollToTop}
                >
                    <FaArrowUp size={30} />
                </div>
            )}
        </footer>
    );
}