import Link from "next/link";

export default function Banner() {
    return <>
        <section id="banner" className="w-screen  bg-neutral-900 py-10">
            <div className="flex flex-col w-screen md:w-[80vw] lg:w-[60vw] m-auto space-y-10 px-10">
                <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
                    <div className="p-4 flex flex-col grow bg-neutral-800 border-[1px] border-neutral-700 rounded-md  shadow-md md:basis-2/3 ">
                        <h3 className="mb-4 font-bold text-emerald-400">Unparalleled Security and Speed</h3>
                        <p className="text-white">Our advanced QR code technology guarantees swift and secure user validations, setting a new standard for parking access precision. Experience seamless entry with cutting-edge security measures.</p>
                        {/* <Link href={'#'}>
                            <button className="mt-5 bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">not available</button>
                        </Link> */}
                    </div>
                    <div className="p-4 flex flex-col grow bg-neutral-800 border-[1px] border-neutral-700 rounded-md  shadow-md md:basis-1/3 w-full">
                        <h3 className="mb-4 font-bold text-emerald-400">Effortless Parking Efficiency</h3>
                        <p className="text-white"><span className="md:hidden block">Harness the power of artificial intelligence to optimize parking spaces intelligently. </span>Our algorithms ensure a seamless parking experience, maximizing efficiency and minimizing the time spent searching for the perfect spot.</p>
                        {/* <Link href={'#'}>
                            <button className="mt-5 bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">not available</button>
                        </Link> */}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
                    <div className="p-4 flex flex-col grow bg-neutral-800 border-[1px] border-neutral-700 rounded-md  shadow-md md:basis-1/3 ">
                        <h3 className="mb-4 font-bold text-emerald-400">Intuitive Access, Anytime, Anywhere</h3>
                        <p className="text-white">Our startup boasts a user-friendly interface, providing easy access to parking solutions at your fingertips. Whether you&apos;re a driver or a parking lot manager, our platform is designed for simplicity and convenience.</p>
                        {/* <Link href={'#'}>
                            <button className="mt-5 bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">not available</button>
                        </Link> */}
                    </div>
                    <div className="p-4 flex flex-col grow bg-neutral-800 border-[1px] border-neutral-700 rounded-md shadow-md md:basis-2/3 w-full">
                        <h3 className="mb-4 font-bold text-emerald-400">Redefining the Parking Landscape</h3>
                        <p className="text-white">Join us in reshaping the future of parking. Our startup is at the forefront of innovation, continuously evolving to meet the dynamic needs of modern society. Embrace a future where parking is secure, optimized, and hassle-free.</p>
                        {/* <Link href={'#'}>
                            <button className="mt-5 bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">not available</button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    </>

}