import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";

export default function Dashboard() {
    return <>
        <section className="min-h-screen bg-neutral-900">
            <NavBar />
            <div>
                <Stats />
            </div>
        </section>
        <Footer />
    </>
}