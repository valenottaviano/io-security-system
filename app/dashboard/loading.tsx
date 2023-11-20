import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Loading() {

    return <section className="min-h-screen w-screen bg-neutral-900 flex flex-col items-center justify-between">
        <NavBar />
        <div className="h-full w-full flex items-center justify-center">
            <h2 className="font-bold text-emerald-400">Loading data...</h2>
        </div>
        <Footer />
    </section>
}