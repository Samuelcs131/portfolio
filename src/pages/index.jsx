import About from "../components/About";
import Apresentation from "../components/Apresentation";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HeadPage from "../components/HeadPage";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

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
