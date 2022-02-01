import Link from 'next/link'

const Apresentation = () => {
    return ( 
        <section id="apresentation" className="container-section">
            <div className="group-text-apresentation">

                <span className="hello">Olá! me chamo</span>

                <h1 className="name">Samuel Claudino</h1>

                <span className="office">Full Stack Developer</span>

                <p className="resume">Atualmente estudando Analise e desenvolvimento de sistemas. </p>

                <Link href="https://www.linkedin.com/in/samuelcs131/"><a target="_blank" rel="noopener"><button className="view-more">LinkedIn</button></a></Link>
            </div>
            
        </section>
     );
}
 
export default Apresentation;


{/* <img src="/img/tech_ilustration.svg" alt="ilustrativo" /> */}