import Link from 'next/link'

const Projects = () => {
    return ( 
        <section id="projects">
            <div className="container-section">
                <h1 className="title-section">Projetos</h1>

                <div className="container-projects">

                    <div className="project pj-one"> 
                    <div className="container-project">
                        <div className="info-project">
                            <h1 className="title-project">DataSelic</h1>
                            <p>Uma forma fácil e prática de calcular seus investimento e os melhores investimentos de 2021.</p> 
                        </div> 

                    <div className="group-down-project">
                        <p className="tecnology-project">
                                <span>Next.js</span> <span>Bootstrap</span> <span>Axios</span> <span>Vercel</span> <span>API Banco Central</span> <span>API IBGE</span> 
                        </p>

                        <div className="icons-project"> 
                            <img src="/img/projects/logo-dataselic.svg" alt="logo" width={40} height={40} style={{padding: '4px'}}/>
                            <div className="icons-right-project">

                            <Link href="https://github.com/Samuelcs131/DataSelic"><a target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></Link>
                            
                            <Link href="http://data-selic.vercel.app"><a target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>DataSelic</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></Link>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    </div>

                    <div className="project pj-two"> 
                    <div className="container-project">
                        <div className="info-project">
                            <h1 className="title-project">AjaxNews</h1>
                            <p>Todas noticias sobre tecnologia em um só lugar.</p> 
                        </div> 

                    <div className="group-down-project">
                        <p className="tecnology-project">
                                <span>Next.js</span> <span>MySQL</span> <span>NodeJs</span> <span>Express</span> <span>Axios</span> <span>Bootstrap</span> <span>Vercel</span>
                        </p>

                        <div className="icons-project"> 
                            <img src="/img/projects/logo-ajaxnews.svg" alt="logo" width={40} height={40} />
                            
                            <div className="icons-right-project">

                            <Link href="https://github.com/Samuelcs131/ajaxnews"><a target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></Link>
                            
                            <Link href="/"><a target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>DataSelic</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></Link>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    </div>

                    <div className="project pj-three"> 
                    <div className="container-project">
                        <div className="info-project">
                            <h1 className="title-project">CIVA</h1>
                            <p>Carteira digital de vacinação de iniciativa da OMS e trabalhamos para garantir a saúde e segurança da população.</p> 
                        </div>

                    <div className="group-down-project">
                        <p className="tecnology-project">
                                <span>JavaScript</span> <span>Bootstrap</span> <span>MySQL</span> <span>Java</span>
                        </p>

                        <div className="icons-project"> 
                            <img src="/img/projects/logo-civa.svg" alt="logo" width={40} height={40} style={{padding: '4px'}}/>
                            <div className="icons-right-project">

                            <Link href="https://github.com/Forsoft-Academy-Full-Stack/forsoft-civa"><a target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></Link>
                            
                            <Link href="http://projetociva.al.prodigyan.com.br/login/"><a target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>DataSelic</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></Link>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    </div>
                    
                </div>

             

            </div>
        </section>
     );
}
 
export default Projects;