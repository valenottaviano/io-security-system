import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Contact() {

    return <section className="min-h-screen w-screen bg-neutral-900 flex flex-col items-center justify-between">
        <NavBar />
        <ContactForm />
        <Footer />
    </section>
}