"use client"

import Image from "next/image"
import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute top-0 left-0 z-20"><NavBar /></div>
      <Image src={'/bg.jpg'} className="absolute top-0 left-0 z-10 w-screen h-screen object-cover" width={1000} height={800} alt='bg' />
    </main>
  )
}
