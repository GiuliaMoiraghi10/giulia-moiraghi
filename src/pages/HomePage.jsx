import { motion } from "framer-motion";
import logowhite from "../assets/Mio Logo_white.png";

export default function HomePage() {
    return (
        <section className="min-h-100 text-white px-8 py-10 pb-25 flex items-center justify-center">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Testo */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl font-extrabold leading-tight">
                        Benvenutǝ nel mio <span className="text-pink-200">Sito Portfolio</span>
                    </h1>

                    <div className="space-y-6 text-white/90 leading-relaxed text-lg">
                        <p>
                            Sono una persona <span className="font-semibold">solare</span>,
                            <span className="font-semibold"> curiosa</span> e sempre pronta a
                            nuove sfide. La mia passione per il Graphic & Web Design mi spinge a creare soluzioni che
                            uniscono <span className="italic font-semibold">bellezza, creatività e funzionalità</span>
                        </p>
                    </div>
                </motion.div>

                {/* Logo scenico */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex justify-center lg:justify-end"
                >
                    <motion.img
                        src={logowhite}
                        alt="Logo Giulia"
                        className="w-156 lg:w-172 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
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
        </section>
    );
}
