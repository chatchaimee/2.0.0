// import { IconDownload } from "components";

const infos = [
  {
    title: "06+",
    name: (
      <>
        Years <br /> experience
      </>
    )
  },
  {
    title: "07+",
    name: (
      <>
        Completed <br /> project
      </>
    )
  },
  {
    title: "03+",
    name: (
      <>
        Companies <br /> worked
      </>
    )
  }
];

const description = `I am an developer with experience in designing, coding and testing complex systems. I am highly proficient in Javascript`;
// const buttonDownloadName = "Download CV";

const About = (): JSX.Element => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src="about__me.png" alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">{description}</p>

          <div className="about__info">
            {infos.map(({ title, name }, index) => (
              <div key={`${name}_${index}`}>
                <span className="about__info-title">{title}</span>
                <span className="about__info-name">{name}</span>
              </div>
            ))}
          </div>

          {/* <div className="about__buttons">
            <a download="" href="" className="button button--flex">
              <div className="button__icon">
                {buttonDownloadName} <IconDownload />
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
