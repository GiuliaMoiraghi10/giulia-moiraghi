import styles from '../layout/Header.module.css';
import work from '../assets/work.jpg'
import { projects } from '../data/projectData';
import { useNavigate } from "react-router-dom";

export default function ProjectPage() {
    const navigate = useNavigate();

    // Filtro per categoria
    const graphicProjects = projects.filter(p => p.category === "Grafica");
    const webProjects = projects.filter(p => p.category === "Web");

    const handleCardClick = (id) => {
        navigate(`/portfolio/${id}`);
    };

    return (

        <div className='container min-w-screen p-10 lg:py-5 bg-gradient-to-b from-black/50 to-black/90'>
            {/* <div className={styles.heroContainer}>
                <div className={styles.heroText}>
                    <h1 className="text-5xl font-extrabold leading-tight text-white">
                        <span className="text-pink-400">Portfolio</span>
                    </h1>
                    <p className='pt-3 font-style: italic text-2xl text-white font-bold'>Tra poco arriva...</p>
                </div>
                <img className={styles.heroImg} src={work} alt="Giulia" />
            </div > */}
            <div className="container mx-auto py-10">
                <h1 className="text-5xl font-extrabold text-pink-400 mb-8">Portfolio</h1>
                <section className="text-gray-900 homepage-gradient-bg w-full overflow-x-hidden">
                    <h2 className="text-3xl font-bold text-white mb-4">Web</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {webProjects.map(project => (
                            <div
                                key={project.id}
                                className="bg-white/80 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => handleCardClick(project.id)}
                            >
                                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                                <div className="p-4">
                                    <span className="text-xs font-bold text-pink-400 uppercase">{project.category}</span>
                                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4 mt-10">Grafica</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {graphicProjects.map(project => (
                            <div
                                key={project.id}
                                className="bg-white/80 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => handleCardClick(project.id)}
                            >
                                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                                <div className="p-4">
                                    <span className="text-xs font-bold text-pink-400 uppercase">{project.category}</span>
                                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}