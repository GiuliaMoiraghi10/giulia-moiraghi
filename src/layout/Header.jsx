import giulia from '../assets/giulia.png'
import styles from './Header.module.css'
import Navbar from '../components/Navbar'

export default function Header() {
    return (
        <>
            <Navbar />
            <div className={styles.heroContainer}>
                <div className={styles.heroText}>
                    <p className='text-4xl bold mb-8'>Ciao, sono Giulia!</p>
                    <p className='font-style: italic text-2xl text-white'>Graphic & Web Designer</p>
                    <p className='font-style: italic text-xl text-white'>Jr FullStack Web Developer</p>
                </div>
                <img className={styles.heroImg} src={giulia} alt="Giulia" />
            </div >
        </>
    )
}