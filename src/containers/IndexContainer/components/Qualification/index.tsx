import { useEffect } from "react";

import { IconGraduation, IconWork, IconCalendar } from "components";
import { QualificationRounderLinePropsModel } from "models";

const tabs = [
  {
    name: "Education",
    icon: <IconGraduation />
  },
  {
    name: "Work",
    icon: <IconWork />
  }
];

const educations = [
  {
    title: "Bachelor of Engineering, Major in Computer Engineering",
    subtitle: "King Mongkut’s University of Technology North Bangkok",
    time: "2010 - 2014"
  }
];

const works = [
  {
    title: "Teacher Assistant: Teach Computer Programming in C",
    subtitle: "King Mongkut’s University of Technology North Bangkok",
    time: "Aug 2014 – Nov 2014"
  },
  {
    title: "PHP Programmer",
    subtitle: "Xsense Information Service Co., Ltd.",
    time: "Feb 2015 – Apr 2017"
  },
  {
    title: "PHP Programmer",
    subtitle: "EGG Digital Co., Ltd.",
    time: "May 2017 – Apr 2018"
  },
  {
    title: "Development Analyst",
    subtitle: "Digital Ventures Co., Ltd.",
    time: "Apr 2018 – Present"
  }
];

const title = "Qualification";
const subtitle = "My personal journey";

const QualificationRounderLine = ({
  isLastIndex
}: QualificationRounderLinePropsModel): JSX.Element => {
  return (
    <div>
      <span className="qualification__rounder"></span>
      {!isLastIndex ? <span className="qualification__line"></span> : null}
    </div>
  );
};

const Qualification = (): JSX.Element => {
  useEffect(() => {
    const tabs = document.querySelectorAll("[data-target]");
    const tabContents = document.querySelectorAll("[data-content]");

    tabs.forEach((tab: Element) => {
      tab.addEventListener("click", () => {
        const dataTargetId = tab.getAttribute("data-target") || "";
        const tabActive = document.querySelector(dataTargetId);

        tabContents.forEach((tabContent: Element) => {
          tabContent.classList.remove("qualification__active");
        });

        tabActive?.classList.add("qualification__active");

        tabs.forEach((tab: Element) => {
          tab.classList.remove("qualification__active");
        });

        tab.classList.add("qualification__active");
      });
    });
  }, []);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabs.map(({ name, icon }, index) => (
            <div
              className={`qualification__button button--flex ${
                index === 0 ? "qualification__active" : ""
              }`}
              data-target={`#${name.toLowerCase()}`}
              key={`${name}_${index}`}
            >
              <div className="qualification__icon">{icon}</div>
              {name}
            </div>
          ))}
        </div>

        <div className="qualification__sections">
          <div
            className="qualification__content qualification__active"
            data-content
            id="education"
          >
            {educations.map(({ title, subtitle, time }, index) => (
              <div className="qualification__data" key={`${title}_${index}`}>
                {index % 2 !== 0 ? (
                  <>
                    <div></div>

                    <QualificationRounderLine
                      isLastIndex={index === educations.length - 1}
                    />
                  </>
                ) : null}

                <div>
                  <h3 className="qualification__title">{title}</h3>
                  <span className="qualification__subtitle">{subtitle}</span>
                  <div className="qualification__calendar">
                    <IconCalendar /> {time}
                  </div>
                </div>

                {index % 2 === 0 ? (
                  <QualificationRounderLine
                    isLastIndex={index === educations.length - 1}
                  />
                ) : null}
              </div>
            ))}
          </div>

          <div className="qualification__content" data-content id="work">
            {works.map(({ title, subtitle, time }, index) => (
              <div className="qualification__data" key={`${title}_${index}`}>
                {index % 2 !== 0 ? (
                  <>
                    <div></div>

                    <QualificationRounderLine
                      isLastIndex={index === works.length - 1}
                    />
                  </>
                ) : null}

                <div>
                  <h3 className="qualification__title">{title}</h3>
                  <span className="qualification__subtitle">{subtitle}</span>
                  <div className="qualification__calendar">
                    <IconCalendar /> {time}
                  </div>
                </div>

                {index % 2 === 0 ? (
                  <QualificationRounderLine
                    isLastIndex={index === works.length - 1}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
