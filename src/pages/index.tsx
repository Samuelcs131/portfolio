import type { GetStaticProps, NextPage } from 'next'
import Intro from '../components/Intro'
import DataCurriculum from '../../public/DataCurriculum.json'
import { iDataCurriculum, iHome } from '../types/components'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects' 
import Footer from '../components/Footer'
import Head from 'next/head'  
import { Suspense } from 'react'
import Loading from '../components/Loading'

const Home: NextPage = ({dataCurriculum}: iHome) => { 
  return (<>
    <Head><title>Samuel Claudino - Desenvolvedor Full Stack</title></Head>
    
    <Suspense fallback={<Loading/>}>
      <Intro dataProfile={dataCurriculum.profile}/>

      <About dataAbout={dataCurriculum.about}/>

      <Skills dataSkills={dataCurriculum.technologies} />

      <Projects dataProjects={dataCurriculum.projects}/>

      <Footer dataContact={dataCurriculum.contact} />
    </Suspense> 
  </>)
}


export const getStaticProps: GetStaticProps = async () => {

  const dataCurriculum:iDataCurriculum = DataCurriculum[0]

  return { props: { dataCurriculum } }
}

export default Home
