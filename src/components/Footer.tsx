import Link from "next/link";
import { FooterContainer } from "../styles/footer";
import { iFooter } from "../types/components";
import { EmailIcon, GithubIcon, LinkedInIcon } from "./icons/Icon";

const Footer = ({dataContact}: iFooter): JSX.Element => {
    return(<>
    <FooterContainer>
        <div>
            <span>Desenvolvido por Samuel Claudino</span>
            
            <div>
                <Link href={dataContact.linkedin}><a target="_blank" rel="noopener">
                <LinkedInIcon options={{height: '24', width: '24', fill: 'white'}} />
                </a></Link>
                <Link href={dataContact.github}><a target="_blank" rel="noopener">
                <GithubIcon options={{height: '24', width: '24'}} />
                </a></Link>
                <Link href={'mailto:'+dataContact.email}><a target="_blank" rel="noopener">
                <EmailIcon options={{height: '23', width: '25'}} />
                </a></Link>
            </div>
        </div>
    </FooterContainer>
    </>)
}

export default Footer;