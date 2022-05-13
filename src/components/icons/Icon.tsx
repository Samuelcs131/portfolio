import { iIcons } from "../../types/components"

 
export const LinkedInIcon = ({options}: iIcons): JSX.Element => {
    const [height,width] = [options?.width, options?.height]

    return(<>
        <svg width={width} height={height} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 7C16.5913 7 18.1174 7.63214 19.2426 8.75736C20.3679 9.88258 21 11.4087 21 13V20H17V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V20H9V13C9 11.4087 9.63214 9.88258 10.7574 8.75736C11.8826 7.63214 13.4087 7 15 7V7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 8H1V20H5V8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </>)
}

export const GithubIcon = ({options}: iIcons): JSX.Element => {
    const [height,width] = [options?.width, options?.height]

    return(<>
        <svg width={width} height={height} viewBox={`0 0 24 24`} fill='none' xmlns="http://www.w3.org/2000/svg">
        <path d="M16 21.9994V18.1294C16.0375 17.6526 15.9731 17.1733 15.811 16.7232C15.6489 16.2732 15.3929 15.8629 15.06 15.5195C18.2 15.1695 21.5 13.9794 21.5 8.51945C21.4997 7.12328 20.9627 5.78065 20 4.76945C20.4559 3.54796 20.4236 2.1978 19.91 0.999449C19.91 0.999449 18.73 0.649449 16 2.47945C13.708 1.85827 11.292 1.85827 9 2.47945C6.27 0.649449 5.09 0.999449 5.09 0.999449C4.57638 2.1978 4.54414 3.54796 5 4.76945C4.03013 5.78815 3.49252 7.14291 3.5 8.54945C3.5 13.9694 6.8 15.1594 9.94 15.5494C9.611 15.8894 9.35726 16.2949 9.19531 16.7394C9.03335 17.1839 8.96681 17.6575 9 18.1294V21.9994M9 18.9994C5 20 7 16.7394 1.5 16.5L9 18.9994Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><title>Github</title>
        </svg>
    </>)
}

export const ExternalLinkIcon = ({options}: iIcons): JSX.Element => {
    const [height,width] = [options?.width, options?.height]  

    return(<>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line><title>Projeto</title></svg>
    </>)
}

export const EmailIcon = ({options}: iIcons): JSX.Element => {
    const [height,width] = [options?.width, options?.height]

    return(<>
        <svg width={width} height={height} viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33691 1.72852H19.3369C20.4369 1.72852 21.3369 2.62852 21.3369 3.72852V15.7285C21.3369 16.8285 20.4369 17.7285 19.3369 17.7285H3.33691C2.23691 17.7285 1.33691 16.8285 1.33691 15.7285V3.72852C1.33691 2.62852 2.23691 1.72852 3.33691 1.72852Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.3369 3.72852L11.3369 10.7285L1.33691 3.72852" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </>)
}