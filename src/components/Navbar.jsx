import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full py-4">
            <ul className="flex justify-center items-center gap-8 flex-wrap">
                <li>
                    <NavLink
                        to='/'
                        className="text-m font-semibold text-gray-800 hover:text-pink-600 transition-colors"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/about'
                        className="text-m font-semibold text-gray-800 hover:text-pink-600 transition-colors"
                    >
                        Chi è Giulia
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/portfolio'
                        className="text-m font-semibold text-gray-800 hover:text-pink-600 transition-colors"
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        className="text-m font-semibold text-gray-800 hover:text-pink-600 transition-colors"
                    >
                        Contattami
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}