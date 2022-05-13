import Link from "next/link";
import { useEffect } from "react";
import { IntroContainer,IntroCurriculum,IntroOffice } from "../styles/intro";
import { iIntro } from "../types/components"; 


const Intro = ({dataProfile}: iIntro): JSX.Element => {
    return(<>
        <IntroContainer id="intro">
            <div>
                <span>Olá! me chamo</span>
                <h1>{dataProfile.name}</h1>
                <IntroOffice className="typewrite">{dataProfile.office}</IntroOffice>
                <p>{dataProfile.description}</p> 
                <Link href="/resume/Curriculo-Samuel_Claudino_2022.pdf"><a target="_blank" rel="noopener">
                        <IntroCurriculum>Download CV</IntroCurriculum> 
                </a></Link>
            </div>
        </IntroContainer>
    </>)
}

export default Intro;