import Head from "next/head";
import About from "./components/About";
import Apresentation from "./components/Apresentation";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
 
  return (
      <>
      <Head> <title>Samuel Claudino - Desenvolvedor Full Stack</title> </Head>
      
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
