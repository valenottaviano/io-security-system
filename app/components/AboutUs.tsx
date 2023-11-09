import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return <section className="min-h-screen bg-neutral-900 flex flex-col-reverse md:flex-row items-center px-[10vw] md:px-[10vw] lg:px-[20vw] pt-10 pb-0 md:py-20">
        <Image src={'/mockup.png'} width={500} height={500} alt='mockup-demo' className="" />
        <div className="">
            <h2 className="text-3xl md:text-4xl text-emerald-400 text-center md:text-left  font-bold mb-5">About us</h2>
            <p className="text-gray-100 md:text-left mb-10">Revolutionize your parking experience with our cutting-edge startup focused on security and efficiency. We leverage state-of-the-art QR code technology for seamless user validations, ensuring a swift and secure entry process. Our AI algorithms take parking optimization to the next level, intelligently managing parking spaces for maximum efficiency. Say goodbye to the hassle of finding a spot—welcome to the future of stress-free parking.</p>
            <Link href={"/scanner"}>
                <button className="bg-emerald-400 font-bold text-gray-900 px-4 py-3 rounded-lg shadow-md shadow-emerald-400/50 flex items-center ">
                    <span>Start demo</span> <FontAwesomeIcon icon={faArrowRight} style={{
                        width: '20px',
                        marginLeft: '1rem'
                    }} />
                </button></Link>
        </div>
    </section>
}