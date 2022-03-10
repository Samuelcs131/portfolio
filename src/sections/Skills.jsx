import Image from 'next/image'
import { SkillContainer } from '../styles/styles';
import DataTechnologies from '../../public/DataTechnologies.json'

const Skills = () => {
    return ( 
        <section id="skills">
            <div className="container-section">
                <h1 className="title-section">Conhecimento</h1>
                <div className="container-skills">

                    {DataTechnologies.length !== 0 ?
                    (DataTechnologies.map( tech => {
                        return ( 
                            <SkillContainer className="skill-item" color={tech.color} >
                                <Image src={tech.icon} width="60px" height="60px" alt={`icone ${tech.name}`}/>
                            </SkillContainer>
                         )
                    }))
                    : 
                    (<h4>Nenhuma tecnologia encontrada!</h4>)}
                   
                </div>
            </div>
        </section>
     );
}
 
export default Skills;