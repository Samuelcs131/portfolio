import Link from "next/link";
import { ProjectContainer } from "../styles/styles";

const Project = ({ projectData }) => {
   
    return ( 
        <> 
        {projectData.map( (project, index) => {
            return( 
                <ProjectContainer key={index} imageProject={project.imageProject}>
                    <div className="container-project">
                        <div className="info-project">
                            <h1 className="title-project">{project.title}</h1>
                            <p>{project.description}</p> 
                        </div> 

                        <div className="group-down-project">
                            <p className="tecnology-project">
                            {project.technologies.map( tech => <span key={tech}>{tech}</span>)}
                            </p>

                        <div className="icons-project"> 
                            <img src={project.iconProject} alt="logo" width={40} height={40} style={{padding: '4px'}}/>
                            <div className="icons-right-project">

                            <Link href={project.repository}><a target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            </a></Link>
                            
                            <Link href={project.projectURL}><a target="_blank" rel="noopener">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                            <title>{project.title}</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            </a></Link>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </ProjectContainer>
            )
        })}

        </>
     );
}
 
export default Project;