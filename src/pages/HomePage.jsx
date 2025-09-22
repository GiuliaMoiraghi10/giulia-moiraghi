import { motion } from "framer-motion";
import logowhite from "../assets/Mio Logo_white.png";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaRocket } from 'react-icons/fa';
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();

    const handleGoToPortfolio = () => {
        navigate('/portfolio');
    };

    return (
        <>
            <Header />
            <section className="min-h-screen text-gray-900 pb-25 homepage-gradient-bg">

                {/* Sezione Hero (Introduzione) */}
                <div className="container mx-auto mt-30 mb-30 px-8 lg:py-10">
                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        {/* Testo introduttivo e CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6 leading-relaxed text-xl text-white">
                                <p>
                                    Sono una persona <span className="font-semibold">solare</span>,
                                    <span className="font-semibold"> curiosa</span> e sempre pronta a
                                    nuove sfide. La mia passione per il Graphic & Web Design mi spinge a creare soluzioni che
                                    uniscono <span className="italic font-semibold">bellezza, creatività e funzionalità</span>.
                                </p>
                            </div>
                            {/* Bottoni CTA con colori scuri */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="cursor-pointer px-8 py-3 bg-pink-400 text-white font-semibold rounded-full shadow-lg hover:bg-pink-500 transition-colors"
                                    onClick={handleGoToPortfolio}
                                >
                                    I miei Progetti
                                </motion.button>
                                <motion.a
                                    href="/CVGiuliaMoiraghi.pdf"
                                    download="CVGiuliaMoiraghi.pdf"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="cursor-pointer px-8 py-3 border-2 border-pink-400 text-white font-semibold rounded-full hover:bg-pink-500 hover:text-white transition-colors text-center"
                                >
                                    Scarica il mio CV
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Logo scenico con elementi decorativi */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            {/* Elementi decorativi sfumati*/}
                            <div className="absolute top-10 left-10 w-16 h-16 bg-pink-200 rounded-full opacity-50 blur-xl animate-pulse"></div>
                            <div className="absolute bottom-5 right-5 w-24 h-24 bg-pink-200 rounded-xl opacity-40 blur-xl animate-pulse delay-500"></div>

                            {/* Logo */}
                            <motion.img
                                src={logowhite}
                                alt="Logo Giulia"
                                className="w-full max-w-sm lg:max-w-md h-auto drop-shadow-[0_0_15px_rgba(0,0,0,0.2)] z-10" // Ombra scura per risaltare
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Sezione Servizi */}
                <div className="container min-w-screen p-10 lg:py-10 bg-gradient-to-b from-black/50 to-black/90">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 space-y-4"
                    >
                        <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-white">Cosa <span className="text-pink-400">so fare?</span></h2>
                        <p className="text-lg text-white max-w-3xl mx-auto">
                            Aiuto a dare vita alle tue idee, combinando estetica e funzionalità per risultati che lasciano il segno.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card Servizio 1: UI/UX Design */}
                        <motion.div
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-pink-400/20 hover:border-pink-400 border-5 transition-all duration-300 flex flex-col items-center text-center space-y-4"
                        >
                            <FaPalette className="text-pink-400 text-5xl" />
                            <h3 className="text-2xl font-bold">Graphic Design</h3>
                            <p className="text-gray-600">Creazione di identità visive, branding, materiali di marketing e illustrazioni uniche.</p>
                        </motion.div>

                        {/* Card Servizio 2: Web Design & Development */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-pink-400/20 hover:border-pink-400 border-5 transition-all duration-300 flex flex-col items-center text-center space-y-4"
                        >
                            <FaLaptopCode className="text-pink-400 text-5xl" />
                            <h3 className="text-2xl font-bold">Web Development</h3>
                            <p className="text-gray-600">Design di siti web intuitivi e accattivanti, con attenzione all'esperienza utente.</p>
                        </motion.div>

                        {/* Card Servizio 3: Mobile App Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-pink-400/20 hover:border-pink-400 border-5 transition-all duration-300 flex flex-col items-center text-center space-y-4"
                        >
                            <FaMobileAlt className="text-pink-400 text-5xl" />
                            <h3 className="text-2xl font-bold">UI/UX Design</h3>
                            <p className="text-gray-600">Progettazione di interfacce utente intuitive e un'esperienza utente coinvolgente.</p>
                        </motion.div>

                        {/* Card Servizio 4: Illustrazioni Digitali / Motion Graphics */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-pink-400/20 hover:border-pink-400 border-5 transition-all duration-300 flex flex-col items-center text-center space-y-4"
                        >
                            <FaRocket className="text-pink-400 text-5xl" />
                            <h3 className="text-2xl font-bold">Brand Identity</h3>
                            <p className="text-gray-600">Sviluppo completo dell'identità del brand, dal logo alla guideline visiva.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
