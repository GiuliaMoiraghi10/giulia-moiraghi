import styles from '../layout/Header.module.css';
import work from '../assets/work.jpg'

export default function ProjectPage() {
    return (

        <div className='container min-w-screen p-10 lg:py-5 bg-gradient-to-b from-black/50 to-black/90'>
            <div className={styles.heroContainer}>
                <div className={styles.heroText}>
                    <h1 className="text-5xl font-extrabold leading-tight text-white">
                        <span className="text-pink-400">Portfolio</span>
                    </h1>
                    <p className='pt-3 font-style: italic text-2xl text-white font-bold'>Tra poco arriva...</p>
                </div>
                <img className={styles.heroImg} src={work} alt="Giulia" />
            </div >
        </div>
    )
}