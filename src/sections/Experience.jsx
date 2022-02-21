import Link from "next/link";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    const tabs = document.querySelector(".tabs");

    tabs.addEventListener("click", (e) => handleClick(e));

    function handleClick(e) {
      const target = e.target;
      const tabNum = target.dataset.tab;
      const activeTab = document.querySelector(".tabs .active");
      const activeContent = document.querySelector(".content .visible");
      const currentContent = document.querySelector(
        `.content__section[data-tab='${tabNum}']`
      );

      if (!tabNum) {
        return;
      }

      activeTab.classList.remove("active");
      target.classList.add("active");
      activeContent.classList.remove("visible");
      currentContent.classList.add("visible");
    }
  });

  return (
    <section id="experience">
      <div className="container-section">
        <h1 className="title-section">Experiência</h1>

        <div className="container">
          <div className="tabs">

            {/* EXPERIENCE 1 */}
            <button className="tab tab-1 active" data-tab="1">
              Forsoft
            </button>   
            
            <span className="highlighter"></span>
          </div>

          <div className="content">

            {/* EXPERIENCE 1 */}
            <div className="content__section visible" data-tab="1">
              <h3 className="title-experience">
                Dev Full Stack <Link href="https://www.linkedin.com/company/forsoftacademy/"><a target="_blank" rel="noopener">@Forsoft Academy</a></Link>
              </h3>
              <p className="time-experience">Maio - Dezembro 2021</p>
              <ul className="list-experience">
                <li>
                  Desenvolvendo páginas web com HTML, CSS, JavaScript, Sass, Bootstrap
                </li>
                <li>
                  Responsável pela equipe de UI, desenvolvendo as telas utilizando o Figma
                </li>
              </ul>
            </div>
            
            
        

             
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
 