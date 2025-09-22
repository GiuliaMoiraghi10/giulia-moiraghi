import { motion } from "framer-motion";
import logowhite from "../assets/Mio Logo_white.png";
import corel from '../assets/corel.png';
import css from '../assets/css-3.png';
import elementor from '../assets/elementor.png';
import figma from '../assets/figma.png';
import html from '../assets/html.png';
import illustrator from '../assets/illustrator.png';
import indesign from '../assets/indesign.png';
import js from '../assets/js.png';
import mysql from '../assets/mysql.png';
import nodejs from '../assets/nodejs.png';
import photoshop from '../assets/photoshop.png';
import physics from '../assets/physics.png';
import premiere from '../assets/premiere.png';
import wordpress from '../assets/wordpress.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';
import giulia from '../assets/giulia.png'
import giuliaseduta from '../assets/giuliaseduta.png'


export default function AboutPage() {
    return (
        <>
            <section className="min-h-80 text-white px-8 py-10 pb-25 flex items-center justify-center">
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    {/* Testo */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl font-extrabold leading-tight">
                            Chi è <span className="text-pink-400">Giulia</span>
                        </h1>

                        <div className="space-y-6 text-white/90 leading-relaxed text-lg">
                            <p>
                                Sono una persona <span className="font-semibold">solare</span>,
                                <span className="font-semibold"> curiosa</span> e sempre pronta a
                                nuove sfide. La mia passione mi spinge a creare soluzioni che
                                uniscono <span className="italic">bellezza</span> e
                                <span className="italic"> funzionalità</span>.
                            </p>
                            <hr />
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
                                Amo in particolare il
                                <span className="font-semibold text-pink-200"> FrontEnd</span>, dove posso mettere a frutto la mia esperienza in UX/UI design
                                con <span className="font-semibold">Figma</span> e
                                <span className="font-semibold"> Adobe</span>. Inoltre, posso realizzare siti
                                con WordPress e plugin come Elementor.
                            </p>
                            <hr />
                            <p className="text-2xl font-extrabold leading-tight">
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
                            src={giulia}
                            alt="Logo Giulia"
                            className="rounded-xl w-156 lg:w-172 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
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
            </section>
            <section className="min-h-80 text-white px-8 py-3 pb-25 flex items-center justify-center bg-gradient-to-b from-black/50 to-black/90">
                <div>
                    <h2 className="text-3xl font-extrabold leading-tight py-8 text-center">
                        <span className="text-pink-200">Competenze</span>
                    </h2>
                    <hr />
                    <h3 className="mb-2 mt-10 text-xl font-semibold">☑️ Graphic</h3>
                    <div className="flex justify-center items-center gap-10 mt-2 bg-white/20 p-4 rounded-xl shadow-lg flex-wrap">

                        {/* Gruppo 1: Illustratore */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={illustrator} alt="Illustrator" />
                            <span className="text-sm text-white/90">Illustrator</span>
                        </div>

                        {/* Gruppo 2: Photoshop */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={photoshop} alt="Photoshop" />
                            <span className="text-sm text-white/90">Photoshop</span>
                        </div>

                        {/* Gruppo 3: Indesign */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={indesign} alt="Indesign" />
                            <span className="text-sm text-white/90">Indesign</span>
                        </div>

                        {/* Gruppo 4: Corel */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={corel} alt="Corel" />
                            <span className="text-sm text-white/90">Corel Draw</span>
                        </div>

                        {/* Gruppo 5: Premiere */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={premiere} alt="Premiere Pro" />
                            <span className="text-sm text-white/90">Premiere Pro</span>
                        </div>

                        {/* Gruppo 6: Figma */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={figma} alt="Figma" />
                            <span className="text-sm text-white/90">Figma</span>
                        </div>

                    </div>
                    <h3 className="mb-2 mt-10 text-xl font-semibold">☑️ Web Developer</h3>
                    <div className="flex justify-center items-center gap-10 mt-4 bg-white/20 p-4 rounded-xl shadow-lg flex-wrap">

                        {/* HTML */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={html} alt="HTML" />
                            <span className="text-sm text-white/90">HTML</span>
                        </div>

                        {/* CSS */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={css} alt="CSS" />
                            <span className="text-sm text-white/90">CSS</span>
                        </div>

                        {/* JavaScript */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={js} alt="JavaScript" />
                            <span className="text-sm text-white/90">JavaScript</span>
                        </div>

                        {/* React */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={physics} alt="React" />
                            <span className="text-sm text-white/90">React</span>
                        </div>

                        {/* Bootstrap */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-12' src={bootstrap} alt="Bootstrap" />
                            <span className="text-sm text-white/90">Bootstrap</span>
                        </div>

                        {/* Tailwind */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={tailwind} alt="Tailwind CSS" />
                            <span className="text-sm text-white/90">Tailwind</span>
                        </div>

                        {/* Node.js */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={nodejs} alt="Node.js" />
                            <span className="text-sm text-white/90">Node.js</span>
                        </div>

                        {/* MySQL */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={mysql} alt="MySQL" />
                            <span className="text-sm text-white/90">MySQL</span>
                        </div>

                    </div>
                    <h3 className="mb-2 mt-10 text-xl font-semibold">☑️ CMS</h3>
                    <div className="flex justify-center items-center gap-10 mt-4 bg-white/20 p-4 rounded-xl shadow-lg flex-wrap">

                        {/* WordPress */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={wordpress} alt="WordPress" />
                            <span className="text-sm text-white/90">WordPress</span>
                        </div>

                        {/* Elementor */}
                        <div className="flex flex-col items-center gap-2">
                            <img className='w-10' src={elementor} alt="Elementor" />
                            <span className="text-sm text-white/90">Elementor</span>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
