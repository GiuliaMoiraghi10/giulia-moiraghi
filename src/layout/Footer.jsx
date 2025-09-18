import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {

    // Funzione che fa scorrere la pagina in cima
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="h-15 bg-[#EAB899] fixed bottom-0 left-0 w-full flex justify-between items-center px-8">
            <div className='text-white'>Sito Portfolio di Giulia Moiraghi</div>

            {/* L'icona che ti riporta in cima */}
            <div
                className="cursor-pointer text-white hover:text-gray-200 transition-colors"
                onClick={handleScrollToTop}
            >
                <FaArrowUp size={30} />
            </div>
        </footer>
    );
}