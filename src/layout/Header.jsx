import giulia from '../assets/giulia.png'
import styles from './Header.module.css'
import Navbar from '../components/Navbar'

export default function Header() {
    return (
        <>
            <div className='container min-w-screen p-10 lg:py-5 bg-gradient-to-b from-black/50 to-black/90'>
                <div className={styles.heroContainer}>
                    <div className={styles.heroText}>
                        <h1 className="text-5xl font-extrabold leading-tight text-white">
                            Ciao, sono <span className="text-pink-400">Giulia</span>
                        </h1>
                        <p className='pt-3 font-style: italic text-2xl text-white font-bold'>Graphic & Web Designer</p>
                        <p className='font-style: italic text-xl text-white font-bold'>Jr FullStack Web Developer</p>
                    </div>
                    <img className={styles.heroImg} src={giulia} alt="Giulia" />
                </div >
            </div>
        </>
    )
}