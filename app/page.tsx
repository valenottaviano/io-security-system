"use client"

import Image from "next/image"
import NavBar from "./components/NavBar"
import Link from "next/link"
import bg from '@/public/bg.jpg'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute top-0 left-0 z-20"><NavBar /></div>
      {/* <Image src={'/bg.jpg'} className="absolute top-0 left-0 z-10 w-screen h-screen object-cover" width={1000} height={800} alt='bg' /> */}
      <section className="min-h-screen w-screen pt-[12vh] px-5 flex flex-col items-center justify-center text-white z-20 bg-[url('/bg.jpg')] bg-cover" >
        <h2 className="text-3xl md:text-4xl font-bold">WE&apos;RE THE EXPERTS</h2>
        <h3 className="text-2xl text-[#33996B] mb-5">Ahead of the curve.</h3>
        <span className="w-[80vw] md:w-[40vw] text-center mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloremque repellendus suscipit, ipsa sunt omnis dolorem fugit neque.</span>
        <div className="flex space-x-5 mb-20">
          <Link href={'/scanner'}>
            <button className="bg-[#33996B] text-black px-4 py-3 rounded-lg shadow-md shadow-[#33996B]/50 ">Start demo</button>
          </Link>
          <Link href={'#'}>
            <button className="bg-none px-4 py-3 rounded-lg border-2 border-[#33996B] text-[#33996B]">Contact us</button>
          </Link>
        </div>
        <div>Our tech stack</div>
      </section>
    </main>
  )
}
