import { FooterContainer } from "../styles/footer";
import { iFooter } from "../types/components";
import { EmailIcon, GithubIcon, LinkedInIcon } from "./icons/Icon";

const Footer = ({dataContact}: iFooter): JSX.Element => {
    return(<>
    <FooterContainer>
        <div>
            <span>Desenvolvido por Samuel Claudino</span>
            
            <div>
                <LinkedInIcon options={{height: '24', width: '24', fill: 'white'}} />
                <GithubIcon options={{height: '24', width: '24'}} />
                <EmailIcon options={{height: '23', width: '25'}} />
            </div>
        </div>
    </FooterContainer>
    </>)
}

export default Footer;