import { AboutContainer } from "../styles/about";
import { iAbout } from "../types/components";

const About = ({dataAbout}: iAbout): JSX.Element => {
    return(<>
        <AboutContainer id="about">
            <div>
                <h2>Sobre</h2>
                <p>{dataAbout}</p>
            </div>
        </AboutContainer>
    </>)
}

export default About;