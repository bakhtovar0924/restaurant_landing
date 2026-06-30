import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-dark-600 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}