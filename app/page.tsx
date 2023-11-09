import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Banner />
      <AboutUs />
      <ContactSection />
      <Footer />
    </main>
  )
}
