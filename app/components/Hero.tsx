import Image from "next/image"
import NavBar from "./NavBar"
import Link from "next/link"
import bg from '@/public/bg.jpg'
import NextJSLogo from "./NextJSLogo"
import TypescriptLogo from "./TypescriptLogo"
import { faArrowRight, faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PythonLogo from "./PythonLogo"
export default function Hero() {
    // {bg-[url('/bg.jpg')]}
    return <>
        <div className="absolute top-0 left-0 z-20"><NavBar /></div>
        <section className="min-h-[50vh] w-screen pt-[10vh] px-5 flex flex-col items-center justify-center text-white z-20 bg-neutral-900 bg-cover" >
            <h2 className="mt-[4rem] text-3xl md:text-5xl font-bold">WE&apos;RE THE EXPERTS</h2>
            <h3 className="text-2xl  md:text-4xl text-emerald-400 mb-5">ahead of the curve.</h3>
            <span className="w-[80vw] md:w-[40vw] text-center mb-10 md:text-xl">Your Passport to a Safer Experience - Where Identity Verification Meets Innovation.</span>
            <div className="flex space-x-5 mb-20">
                <Link href={'/scanner'}>
                    <button className="bg-emerald-400 font-bold text-gray-900 px-4 py-3 rounded-lg shadow-md shadow-emerald-400/50 flex items-center ">
                        <span>Start demo</span> <FontAwesomeIcon icon={faArrowRight} style={{
                            width: '20px',
                            marginLeft: '1rem'
                        }} />
                    </button>
                </Link>
                <Link href={'https://docs.spotter.com.ar'}>
                    <button className="bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">
                        <span>Docs</span><FontAwesomeIcon icon={faFile} style={{
                            width: '20px',
                            marginLeft: '0.5rem',
                            color: 'gray'
                        }} />
                    </button>
                </Link>
            </div>
            <div>Our tech stack</div>
            <div className="mt-5 flex space-x-5 items-center">
                <NextJSLogo />
                <TypescriptLogo />
                <PythonLogo />
            </div>
        </section>
    </>
}