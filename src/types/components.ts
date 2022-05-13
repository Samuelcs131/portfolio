export interface iLayout {
    children: JSX.Element | JSX.Element[]
}

 
export interface iIntro {
    dataProfile: iDataProfile
}

export interface iHome {
    dataCurriculum: iDataCurriculum
}

export interface iAbout {
    dataAbout: string
}

export interface iSkills {
    dataSkills: Array<iDataTechnologies>
}

export interface iProjects {
    dataProjects: Array<iDataProjects>
}
 
export interface iFooter {
    dataContact: iDataContact
}

export interface iIcons {
    options?: iOptionsIcon
}
export interface iOptionsIcon {
    fill?: string,
    stroke?: string
    width?: string,
    height?: string
}

// DATA CURRICULUM
export interface iDataCurriculum {
    profile: iDataProfile,
    about: string,
    technologies: Array<iDataTechnologies>,
    projects: Array<iDataProjects>,
    contact: iDataContact
}

export interface iDataProfile {
    name: string,
    office: string,
    description: string,
    curriculum: string
}

export interface iDataTechnologies {
    name: string,
    icon: string,
    color: string
}

export interface iDataProjects {
    title: string,
    description: string,
    technologies: Array<string>,
    imageURL: string,
    repository: string,
    projectURL: string,
    iconProject: string,
    imageProject: string
}

export interface iDataContact {
    github: string,
    linkedin: string,
    email: string
}