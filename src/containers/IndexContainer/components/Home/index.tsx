import {
  IconLinkedin,
  IconGithub,
  IconContact,
  IconMouse,
  IconArrowDown
} from "components";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/chatchai-meesuksabai",
    icon: <IconLinkedin />,
    name: "linkedin"
  },
  {
    href: "https://github.com/chatchaimee",
    icon: <IconGithub />,
    name: "github"
  }
];

const title = "Hi, I'am Chatchai";
const subtitle = "Development Analyst";
const description =
  "High level experience in web technology and development knowledge.";
const buttonContactName = "Contact Me";
const scrollName = "Scroll down";

const Home = (): JSX.Element => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {socialLinks.map(({ href, icon, name }, index) => (
              <a
                href={href}
                target="_bank"
                className="home__social-icon"
                aria-label={name}
                key={`${href}_${index}`}
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                <image
                  className="home__blob-img"
                  x="12"
                  y="18"
                  xlinkHref="home__me.png"
                />
              </g>
            </svg>
          </div>

          <div className="home__data">
            <h1 className="home__title">{title}</h1>
            <h2 className="home__subtitle">{subtitle}</h2>
            <div className="home__description">{description}</div>
            <a href="#contact" className="button button--flex">
              <div className="button__icon">
                {buttonContactName} <IconContact />
              </div>
            </a>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <div className="home__scroll-mouse">
              <IconMouse />
            </div>
            <span className="home__scroll-name">{scrollName}</span>
            <div className="home__scroll-arrow">
              <IconArrowDown />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
