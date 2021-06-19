import { IconMail } from "components";

const title = "Contact Me";
const subtitle = "Get in touch";

const informations = [
  {
    title: "Email",
    subtitle: "chatchai.meesuksabai@gmail.com",
    icon: <IconMail />
  }
];

const ContactMe = (): JSX.Element => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="contact__container container grid">
        <div>
          {informations.map(({ title, subtitle, icon }, index) => (
            <div className="contact__information" key={`${title}_${index}`}>
              <div className="contact__icon">{icon}</div>

              <div>
                <h3 className="contact__title">{title}</h3>
                <span className="contact__subtitle">{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
