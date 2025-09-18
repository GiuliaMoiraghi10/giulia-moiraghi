import { motion } from "framer-motion";
import logowhite from "../assets/Mio Logo_white.png";
import behance from "../assets/behance.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/gmail.png"

export default function ContactPage() {
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
                        <span className="text-pink-200">Contattami</span>
                    </h1>

                    <div className="space-y-6 text-white/90 leading-relaxed text-lg">
                        <p className="font-semibold">
                            <img className="w-10" src={email} alt="" /><span className="text-xl font-extrabold leading-tight">gmoiraghi10@gmail.com</span>
                        </p>
                        <hr />
                        <h1 className="text-5xl font-extrabold leading-tight">
                            <span className="text-pink-200">Seguimi</span>
                        </h1>
                        <div className="flex gap-10">
                            <a href="https://www.linkedin.com/in/giulia-moiraghi-a30475b4/" target="_blank"><img className="w-10 hover:opacity-80" src={linkedin} alt="" /></a>
                            <a href="https://github.com/GiuliaMoiraghi10" target="_blank"><img className="w-10 hover:opacity-80" src={github} alt="" /></a>
                            <a href="https://www.behance.net/giuliamoira1e4" target="_blank"><img className="w-10 hover:opacity-80" src={behance} alt="" /></a>
                        </div>
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
    )
}