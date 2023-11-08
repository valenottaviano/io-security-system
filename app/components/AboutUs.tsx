import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function AboutUs() {
    return <section className="min-h-screen bg-neutral-900 flex flex-col-reverse md:flex-row items-center px-[10vw] md:px-[20vw] py-20">
        <Image src={'/mockup.png'} width={500} height={500} alt='mockup-demo' />
        <div className="">
            <h2 className="text-3xl md:text-4xl text-emerald-400 text-center md:text-left  font-bold mb-5">About us</h2>
            <p className="text-gray-100 text-justify md:text-left mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eos nisi doloribus cumque iure! Ex consequuntur tenetur enim, debitis architecto similique aliquam ab corrupti, commodi quisquam assumenda quam, molestiae nihil accusantium quibusdam vitae vero? Modi ullam nostrum explicabo officia voluptatibus reiciendis error quisquam nulla. Porro, ipsam fuga commodi, veritatis fugiat accusamus dicta cupiditate atque vitae architecto libero iste quae dignissimos doloremque doloribus necessitatibus, deserunt ullam labore dolore deleniti ducimus quos? Libero ipsum incidunt quibusdam minus, ut excepturi sit fugit dignissimos soluta optio sed placeat accusantium eos, sunt et quis vitae veritatis laborum dolore ipsam reiciendis! Eveniet dolorem vel ab voluptatem.</p>
            <button className="bg-emerald-400 font-bold text-gray-900 px-4 py-3 rounded-lg shadow-md shadow-emerald-400/50 flex items-center ">
                <span>Start demo</span> <FontAwesomeIcon icon={faArrowRight} style={{
                    width: '20px',
                    marginLeft: '1rem'
                }} />
            </button>
        </div>
    </section>
}