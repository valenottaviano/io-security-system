import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return <section className="min-h-[30vh] w-screen bg-black flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-[20vw]">
        <h1 className="text-white text-4xl mb-10 md:mb-10">Logo</h1>
        <div className="">
            <h4 className="text-white mb-5">Let&apos;s stay in touch!</h4>
            <div className="flex justify-between w-full space-x-2">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white', width: '30px' }} />
                <FontAwesomeIcon icon={faXTwitter} style={{ color: 'white', width: '30px' }} />
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', width: '30px' }} />
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', width: '30px' }} />
            </div>
        </div>
    </section>
}