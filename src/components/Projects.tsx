import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import { Project, ProjectsContainer, ProjectsGrid, ProjectTechAndLink, ProjectTitleAndDescription } from "../styles/projects";
import { iDataProjects, iProjects } from "../types/components";
import { ExternalLinkIcon, GithubIcon } from "./icons/Icon";

const Projects = ({dataProjects}: iProjects): JSX.Element => {

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2},
        mobile: { breakpoint: { max: 824, min: 0 }, items: 1 }
    };

    return(<>
    <ProjectsContainer id="projects">

    <div>

    <h2>Projetos</h2>
 
    <ProjectsGrid>

    <Carousel
        swipeable={true}  
        draggable={true}  
        showDots={true} 
        arrows={false}  
        ssr={true}  
        infinite={false} 
        autoPlay={false} 
        autoPlaySpeed={1000} 
        shouldResetAutoplay={false} 
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}  
        removeArrowOnDeviceType={["tablet", "mobile"]}  
        responsive={responsive}>
             
             {dataProjects.length !== 0 ? (dataProjects.map(
        (project: iDataProjects, index:number)=>{
        return(
            <Project key={index} image={project.imageProject}>
                <ProjectTitleAndDescription>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </ProjectTitleAndDescription>

                <ProjectTechAndLink>
                    <p>{project.technologies.map( (tech: string,index:number)=>{
                        return(<span key={index}>{tech}</span>)
                    })}</p>
                    <div>
                        <Image src={project.iconProject} alt={project.title} width={36} height={36} />
                        
                        <span>
                            <Link href={project.repository}>
                                <a target="_blank" rel="noopener"><GithubIcon options={{width: '20', height: '20'}} /></a>
                            </Link>
                            <Link href={project.projectURL}>
                                <a target="_blank" rel="noopener"><ExternalLinkIcon options={{width: '20', height: '20'}} /></a>
                            </Link>
                        </span>
                    </div>
                </ProjectTechAndLink>
            </Project>
        )
    })
    ) : 
    (<p>Nenhum projeto encontrado</p>)}
    </Carousel>

    </ProjectsGrid>

    </div>

    </ProjectsContainer>
    </>)
}

export default Projects;