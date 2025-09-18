import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function DefaultLayout() {
    return (
        <section>
            <Navbar />
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}