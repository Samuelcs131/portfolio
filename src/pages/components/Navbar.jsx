import { useEffect, useState } from "react";

const Navbar = () => {

    useEffect(()=>{
        // GET ELEMENTS HTML
        const GET_ELEMENT = (element) => document.querySelector(element);

        // ACTIVE MENU MOBILE
        GET_ELEMENT('.mobile-menu').addEventListener('click',actionMenu)

        function actionMenu(){
            GET_ELEMENT('.mobile-menu').classList.toggle("active");
            GET_ELEMENT('.nav-list').classList.toggle("active");

            // ANIMATION LIST MENU
            document.querySelectorAll('.nav-list li').forEach(
                (link,index) => { 
                    link.style.animation ? 
                    (link.style.animation = "") :
                    (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
                })
        }
    })

    return (
        <header className="navbar">
        <nav className="container">
           <a href="#" className="logo-navbar">SΔmuel</a>
           <div className="mobile-menu">
               <div className="line1"></div>
               <div className="line2"></div>
               <div className="line3"></div>
           </div>

           <ul className="nav-list">
               <li><a href="#about">Sobre</a></li>
               <li><a href="#skills">Conhecimento</a></li>
               <li><a href="#projects">Projetos</a></li>
               <li><a href="#Serviços">Serviços</a></li>
           </ul>
        </nav>
        </header>
     );
}
 
export default Navbar;