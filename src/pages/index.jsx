import About from "../sections/About";
import Apresentation from "../sections/Apresentation";
import Experience from "../sections/Experience";
import Footer from "../sections/Footer";
import HeadPage from "../sections/HeadPage";
import Navbar from "../sections/Navbar";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function Home() {
 
  return (
      <>
      <HeadPage titlePage={'Samuel Claudino - Desenvolvedor Full Stack'}/>
      
      <Navbar/>
      <Apresentation/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Footer/>
 
      </>
  )
}
