import giulia from '../assets/giulia.png'
import styles from './Header.module.css'
import Navbar from '../components/Navbar'

export default function Header() {
    return (
        <>
            <Navbar />
            <div className={styles.heroContainer}>
                <div className={styles.heroText}>
                    <h1 className='text-xl bold'>Ciao, sono Giulia!</h1>
                    <p className='text-m bold'>Graphic & Web Designer</p>
                    <p className='text-s'>Jr FullStack Web Developer</p>
                </div>
                <img className={styles.heroImg} src={giulia} alt="Giulia" />
            </div>
        </>
    )
}