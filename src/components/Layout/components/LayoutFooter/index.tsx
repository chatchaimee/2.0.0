import { IconFacebook } from "components";

const links = [
  {
    href: "#contact",
    name: "Contactme"
  }
];

const socialLinks = [
  {
    href: "https://www.facebook.com/jayyzdayo",
    icon: <IconFacebook />,
    name: "facebook"
  }
];

const title = "Chatchai";
const subtitle = "Developer";
// const copyRight = "© Chatchai Meesuksabai. All right reserved";

const LayoutFooter = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">{title}</h1>
            <span className="footer__subtitle">{subtitle}</span>
          </div>

          <ul className="footer__links">
            {links.map(({ href, name }, index) => (
              <li key={`${name}_${index}`}>
                <a href={href} className="footer__link">
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer__socials">
            {socialLinks.map(({ href, icon, name }, index) => (
              <a
                href={href}
                target="_blank"
                className="footer__social"
                aria-label={name}
                key={`${href}_${index}`}
                rel="noreferrer"
              >
                <span className="">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* <p className="footer__copy">{copyRight}</p> */}
      </div>
    </footer>
  );
};

export default LayoutFooter;
