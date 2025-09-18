import { motion } from "framer-motion";
import logowhite from "../assets/Mio Logo_white.png";

export default function AboutPage() {
    return (
        <section className="min-h-screen text-white px-8 py-10 flex items-center justify-center">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Testo */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl font-extrabold leading-tight">
                        Chi è <span className="text-pink-200">Giulia</span>
                    </h1>

                    <div className="space-y-6 text-white/90 leading-relaxed text-lg">
                        <p>
                            Sono una persona <span className="font-semibold">solare</span>,
                            <span className="font-semibold"> curiosa</span> e sempre pronta a
                            nuove sfide. La mia passione mi spinge a creare soluzioni che
                            uniscono <span className="italic">bellezza</span> e
                            <span className="italic"> funzionalità</span>.
                        </p>

                        <p>
                            Con più di <span className="font-semibold text-pink-200">10 anni di esperienza</span> nel
                            <span className="font-semibold"> Graphic Design</span> e un forte focus
                            negli ultimi anni su <span className="font-semibold text-pink-200">Web Design UX/UI</span>, ho affinato un approccio che combina creatività e
                            metodo.
                        </p>

                        <p>
                            Recentemente ho completato il percorso intensivo di
                            <span className="font-semibold text-pink-200"> Full-Stack Web Development</span> presso Boolean, realizzando progetti completi che
                            integrano codice solido e una cura particolare per l’esperienza
                            utente.
                        </p>

                        <p>
                            Lavoro con <span className="font-semibold">React.js</span>,
                            <span className="font-semibold"> TypeScript</span>,
                            <span className="font-semibold"> Tailwind</span>,
                            <span className="font-semibold"> Node.js</span> e <span className="font-semibold">MySQL</span>. Amo in particolare il
                            <span className="font-semibold text-pink-200"> front-end</span>, dove posso mettere a frutto la mia esperienza in UX/UI design
                            con <span className="font-semibold">Figma</span> e
                            <span className="font-semibold"> Adobe</span>. Inoltre, ho realizzato siti
                            con WordPress e Elementor.
                        </p>

                        <p>
                            Ogni progetto è per me l’occasione di dare vita a interfacce
                            <span className="italic"> moderne</span>,
                            <span className="italic"> accessibili</span> e
                            <span className="italic"> coinvolgenti</span>.
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
