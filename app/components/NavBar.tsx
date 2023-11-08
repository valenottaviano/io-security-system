import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


const NavBar = () => {
    return (
        <header className="w-screen px-[5vw] min-h-[10vh] flex items-center justify-between space-x-10">
            <Link href={'/'}><h1 className="text-white text-3xl font-bold">Logo</h1></Link>
            <nav>
                <ul className="space-x-10 hidden md:flex text-white">
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'#'}><li>Docs</li></Link>
                    <Link href={'/scanner'}><li>Program</li></Link>
                    <Link href={'#'}><li>Contact us</li></Link>
                </ul>
            </nav>
            <Link href={'https://github.com/valenottaviano/io-security-system'}>
                <FontAwesomeIcon icon={faGithub} className="fas fa-check text-white text-3xl"></FontAwesomeIcon>
            </Link>
        </header >
    )
}

export default NavBar;