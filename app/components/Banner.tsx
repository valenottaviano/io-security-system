import Link from "next/link";

export default function Banner() {
    return <section className="w-screen  bg-neutral-900 py-10">
        <div className="flex flex-col w-screen md:w-[80vw] lg:w-[60vw] m-auto space-y-10 px-10">
            <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
                <div className="p-4 flex flex-col grow bg-neutral-800 border-[1px] border-neutral-700 rounded-md  shadow-md md:basis-2/3 ">
                    <h3 className="mb-4 font-bold text-emerald-400">Lorem ipsum dolor sit amet consectetur</h3>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum corporis tempora deleniti, alias beatae nostrum doloremque error nesciunt maiores commodi! Quaerat totam praesentium doloremque, rem soluta ex voluptatum asperiores ad.</p>
                    <Link href={'#'}>
                        <button className="mt-5 bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">Contact us</button>
                    </Link>
                </div>
                <div className="p-4 flex flex-col grow bg-neutral-800 border-[1px] border-neutral-700 rounded-md  shadow-md md:basis-1/3 w-full">
                    <h3 className="mb-4 font-bold text-emerald-400">Lorem ipsum dolor sit amet consectetur</h3>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum corporis tempora deleniti, alias beatae nostrum doloremque error nesciunt maiores commodi! Quaerat totam praesentium doloremque, rem soluta ex voluptatum asperiores ad.</p>
                    <Link href={'#'}>
                        <button className="mt-5 bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">Contact us</button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
                <div className="p-4 flex flex-col grow bg-neutral-800 border-[1px] border-neutral-700 rounded-md  shadow-md md:basis-1/3 ">
                    <h3 className="mb-4 font-bold text-emerald-400">Lorem ipsum dolor sit amet consectetur</h3>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum corporis tempora deleniti, alias beatae nostrum doloremque error nesciunt maiores commodi! Quaerat totam praesentium doloremque, rem soluta ex voluptatum asperiores ad.</p>
                    <Link href={'#'}>
                        <button className="mt-5 bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">Contact us</button>
                    </Link>
                </div>
                <div className="p-4 flex flex-col grow bg-neutral-800 border-[1px] border-neutral-700 rounded-md shadow-md md:basis-2/3 w-full">
                    <h3 className="mb-4 font-bold text-emerald-400">Lorem ipsum dolor sit amet consectetur</h3>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum corporis tempora deleniti, alias beatae nostrum doloremque error nesciunt maiores commodi! Quaerat totam praesentium doloremque, rem soluta ex voluptatum asperiores ad.</p>
                    <Link href={'#'}>
                        <button className="mt-5 bg-neutral-800 px-4 py-3 rounded-lg border-[1px] border-neutral-700 text-neutral-300 font-bold">Contact us</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
}