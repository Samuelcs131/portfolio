import Image from "next/image";
import { SkillsContainer, SkillsGrid, SkillTechnology } from "../styles/skills";
import { iDataTechnologies, iSkills } from "../types/components";

const Skills = ({dataSkills}: iSkills): JSX.Element => {
    return(<>
    <SkillsContainer id="skills">
        <div>

            <h2>Conhecimento</h2>

            <SkillsGrid>
                {dataSkills.map( (technology:iDataTechnologies, index:number)=>{
                    return(
                        <SkillTechnology key={index} name={technology.name} color={technology.color}>
                            <img src={technology.icon} width={60} height={60} alt={technology.name} />
                        </SkillTechnology>
                    )
                })}
            </SkillsGrid>

        </div>
    </SkillsContainer>
    </>)
}

export default Skills;