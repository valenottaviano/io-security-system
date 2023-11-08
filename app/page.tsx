import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Banner />
      <AboutUs />
      <Footer />
    </main>
  )
}
