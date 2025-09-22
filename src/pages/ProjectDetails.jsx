import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projectData";
import { motion } from "framer-motion";

export default function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-2xl font-bold text-pink-600 mb-4">Progetto non trovato</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 bg-pink-400 text-white rounded-full font-semibold hover:bg-pink-500 transition"
                >
                    Torna indietro
                </button>
            </div>
        );
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-[80vh] px-2 py-8 bg-transparent">
            <div className="w-full max-w-5xl bg-white/80 rounded-3xl shadow-2xl p-4 md:p-12 backdrop-blur-sm">
                <div className="mb-8 flex flex-col items-center">
                    <span className="text-sm font-bold text-pink-400 uppercase tracking-widest mb-2">
                        {project.category}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-4 text-center">
                        {project.title}
                    </h1>
                </div>
                <div className="flex flex-col items-center gap-8">
                    {project.category === "Web" && project.video ? (
                        <motion.video
                            src={project.video}
                            controls
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-4xl h-[60vh] md:h-[70vh] rounded-3xl shadow-lg border-4 border-pink-200 object-cover bg-black"
                        />
                    ) : (
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-4xl h-[60vh] md:h-[70vh] rounded-3xl shadow-lg border-4 border-pink-200 object-contain bg-white"
                        />
                    )}
                    {project.description && (
                        <p className="text-lg text-gray-700 bg-white/70 rounded-xl p-6 shadow mt-4">
                            {project.description}
                        </p>
                    )}
                </div>
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-8 py-3 bg-pink-400 text-white font-semibold rounded-full shadow-lg hover:bg-pink-500 transition-colors cursor-pointer"
                    >
                        Torna al Portfolio
                    </button>
                </div>
            </div>
        </section>
    );
}