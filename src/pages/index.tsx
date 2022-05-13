import type { GetStaticProps, NextPage } from 'next'
import Intro from '../components/Intro'
import DataCurriculum from '../../public/DataCurriculum.json'
import { iDataCurriculum, iHome } from '../types/components'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects' 
import Footer from '../components/Footer'
import Head from 'next/head'



const Home: NextPage<iHome> = ({dataCurriculum}) => { 
  return (<>
    <Head><title>Samuel Claudino - Desenvolvedor Full Stack</title></Head>

    <Intro dataProfile={dataCurriculum.profile}/>

    <About dataAbout={dataCurriculum.about}/>

    <Skills dataSkills={dataCurriculum.technologies} />

    <Projects dataProjects={dataCurriculum.projects}/>

    <Footer dataContact={dataCurriculum.contact} />
  </>)
}


export const getStaticProps: GetStaticProps = async () => {

  const dataCurriculum:iDataCurriculum = DataCurriculum[0]

  return { props: { dataCurriculum } }
}

export default Home
