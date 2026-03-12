import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

 
export default function PortfolioHomepage() {
  
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-yellow-300 selection:text-black">
      <Navbar></Navbar>
      <Hero /> 
      <About/> 
      <Projects /> 
      <Stack /> 
      <Contact />
      <Footer /> 
       
    </main>
  );
}
