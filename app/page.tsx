import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Gallery from "@/components/Gallery/Gallery";
import About from "@/components/About/About";
import Testimonials from "@/components/Testimonials/Testimonials";
import Location from "@/components/Location/Location";
import Footer from "@/components/Footer/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat/WhatsAppFloat";



export default function Home() {


  return (
    <>
       <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Location />
      <Footer />
      <WhatsAppFloat />
    
    </>
  );
}
