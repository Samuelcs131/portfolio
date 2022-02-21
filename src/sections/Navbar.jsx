import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  

    useEffect(()=>{
        // GET ELEMENTS HTML
        const GET_ELEMENT = (element) => document.querySelector(element);
        const NAV_LIST = document.querySelectorAll('.nav-list li')

        // ACTIVE MENU MOBILE
        GET_ELEMENT('.mobile-menu').addEventListener('click',actionMenu)

        function actionMenu(){
            GET_ELEMENT('.mobile-menu').classList.toggle('active');
            GET_ELEMENT('.nav-list').classList.toggle('active');

            // ANIMATION LIST MENU
            NAV_LIST.forEach(
                (link,index) => { 
                    link.style.animation ? 
                    (link.style.animation = "") :
                    (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
                })
        }

        // CLOSE MENU 
        for(let num = 0; num < NAV_LIST.length; num++){
            NAV_LIST[num].addEventListener('click', () => {
                // CLOSE MENU & LIST
                GET_ELEMENT('.mobile-menu').classList.remove('active');
                GET_ELEMENT('.nav-list').classList.remove('active');
                // RESET STYLE ANIMATION
                for(let x = 0; x < 4; x++){
                    NAV_LIST[x].style.animation = ""
                }

            })
        }

    }) 
 
    return (
        <header className="navbar">
        <nav className="container">
           <Link href="/"><a className="logo-navbar">SΔmuel</a></Link>
           <div className="mobile-menu">
               <div className="line1"></div>
               <div className="line2"></div>
               <div className="line3"></div>
           </div>

           <ul className="nav-list">
               <li><a href="#about">Sobre</a></li>
               <li><a href="#skills">Conhecimento</a></li>
               <li><a href="#projects">Projetos</a></li>
               <li><a href="#experience">Experiência</a></li>
           </ul>
        </nav>
        </header>
     );
}
 
export default Navbar;