import { useEffect } from "react";

import { IconBrackets, IconAngleDown } from "components";
import { SkillsValues } from "styles";

const skillsFrontEnds = [
  {
    name: "JavaScript"
  },
  {
    name: "TypeScript"
  },
  {
    name: "Next.js"
  },
  {
    name: "React.js"
  },
  {
    name: "Angular"
  }
];

const skillsBackEnds = [
  {
    name: "PHP"
  },
  {
    name: "Laravel"
  },
  {
    name: "Phalcon"
  },
  {
    name: "Node.js"
  },
  {
    name: "Spring Boot (Kotlin)"
  }
];

const skillsTools = [
  {
    name: "Git"
  },
  {
    name: "Docker"
  },
  {
    name: "Postman"
  }
];

const skillsContents = [
  {
    title: "Frontend",
    subtitle: "",
    skills: skillsFrontEnds
  },
  {
    title: "Backend",
    subtitle: "",
    skills: skillsBackEnds
  },
  {
    title: "Tool",
    subtitle: "",
    skills: skillsTools
  }
];

const title = "Skills";
const subtitle = "My technical level";

const Skills = (): JSX.Element => {
  useEffect(() => {
    const skillsContents: HTMLCollectionOf<Element> =
      document.getElementsByClassName("skills__content");

    const skillsHeaders: NodeListOf<Element> =
      document.querySelectorAll(".skills__header");

    skillsHeaders.forEach((skillsHeader: Element) => {
      skillsHeader.addEventListener("click", () => {
        const itemClass = skillsHeader.parentElement?.className;

        for (let i = 0; i < skillsContents.length; i++) {
          skillsContents[i]?.classList.remove("skills__open");
          skillsContents[i]?.classList.add("skills__close");
        }

        if (itemClass === "skills__content skills__close") {
          skillsHeader.parentElement?.classList.remove("skills__close");
          skillsHeader.parentElement?.classList.add("skills__open");
        }
      });
    });
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="skills__container container grid">
        {skillsContents.map(({ title, subtitle, skills }, index) => (
          <div key={`${title}_${index}`}>
            <div
              className={`skills__content ${
                index === 0 ? "skills__open" : "skills__close"
              }`}
            >
              <div className="skills__header">
                <div className="skills__icon">
                  <IconBrackets />
                </div>

                <div>
                  <h1 className="skills__title">{title}</h1>
                  <span className="skills__subtitle">{subtitle}</span>
                </div>

                <div className="skills__arrow">
                  <IconAngleDown />
                </div>
              </div>

              <div className="skills__list grid">
                {skills.map(({ name }, index) => (
                  <div className="skills__data" key={`${name}_${index}`}>
                    <div className="skills__titles">
                      <p className="skills__name">{name}</p>
                    </div>
                    <div className="skills__bar">
                      <SkillsValues width="100">
                        <span className="skills__percentage"></span>
                      </SkillsValues>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
