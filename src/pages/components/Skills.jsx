import Image from 'next/image'

const Skills = () => {
    return ( 
        <section id="skills">
            <div className="container-section">
                <h1 className="title-section">Conhecimento</h1>
                <div className="container-skills">
                 
                    <div className="skill-item s-html" s-name="HTML">
                    <Image src="/img/technologies/html.svg" width="60px" height="60px" alt="icone html" /></div>
                    
                    <div className="skill-item s-css" s-name="CSS">
                    <Image src="/img/technologies/css.svg" width="60px" height="60px" alt="icone css" /></div>
                    
                    <div className="skill-item s-js"  s-name="JavaScript">
                    <Image src="/img/technologies/javascript.svg" width="60px" height="60px" alt="icone javascript" /></div>
                    
                    <div className="skill-item s-sass" s-name="Sass">
                    <Image src="/img/technologies/sass.svg" width="60px" height="60px" alt="icone sass"  /></div>
                    
                    <div className="skill-item s-react" s-name="ReactJs">
                    <Image src="/img/technologies/reactjs.svg" width="60px" height="60px" alt="icone react" /></div>
                    
                    <div className="skill-item s-next" s-name="Next.js">
                    <Image src="/img/technologies/nextjs.svg" width="60px" height="60px" alt="icone nextjs" /></div>
                    
                    <div className="skill-item s-node" s-name="NodeJs">
                    <Image src="/img/technologies/nodejs.svg" width="60px" height="60px" alt="icone nodejs" /></div>
                    
                    <div className="skill-item s-mysql" s-name="MySQL">
                    <Image src="/img/technologies/mysql.svg" width="60px" height="60px" alt="icone mysql" /></div>

                </div>
            </div>
        </section>
     );
}
 
export default Skills;