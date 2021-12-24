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
        <h1 className="title-section">Experiencia</h1>

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
              <h3 className="">
                Desenvolvedor Full Stack <a href="">Forsoft Academy</a>
              </h3>
              <p>Maio - Dezembro 2021</p>
              <ul>
                <li>
                  Worked with a team of three designers to build a marketing
                  website and e-commerce platform for{" "}
                  <a
                    href="https://blistabloc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    blistabloc
                  </a>
                  , an ambitious startup originating from Northeastern
                </li>
                <li>
                  Helped solidify a brand direction for blistabloc that spans
                  both packaging and web
                </li>
                <li>
                  Interfaced with clients on a weekly basis, providing
                  technological expertise
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
 