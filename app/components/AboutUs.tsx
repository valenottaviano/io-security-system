import Image from "next/image";

export default function AboutUs() {
    return <section className="min-h-screen bg-neutral-900 flex flex-col-reverse items-center px-[10vw] py-20">
        <Image src={'/mockup.png'} width={500} height={500} alt='mockup-demo' />
        <div className="">
            <h2 className="text-3xl text-[#33996B] text-center font-bold mb-5">About us</h2>
            <p className="text-gray-100 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eos nisi doloribus cumque iure! Ex consequuntur tenetur enim, debitis architecto similique aliquam ab corrupti, commodi quisquam assumenda quam, molestiae nihil accusantium quibusdam vitae vero? Modi ullam nostrum explicabo officia voluptatibus reiciendis error quisquam nulla. Porro, ipsam fuga commodi, veritatis fugiat accusamus dicta cupiditate atque vitae architecto libero iste quae dignissimos doloremque doloribus necessitatibus, deserunt ullam labore dolore deleniti ducimus quos? Libero ipsum incidunt quibusdam minus, ut excepturi sit fugit dignissimos soluta optio sed placeat accusantium eos, sunt et quis vitae veritatis laborum dolore ipsam reiciendis! Eveniet dolorem vel ab voluptatem.</p>
        </div>
    </section>
}