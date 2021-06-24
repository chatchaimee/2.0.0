import { useEffect } from "react";

import {
  Layout,
  Home,
  About,
  Skills,
  Qualification,
  ContactMe
} from "components";

const IndexContainer = (): JSX.Element => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "25px",
      duration: 2000
    });

    sr.reveal(".home__data", { interval: 200 });
    sr.reveal(".home__subtitle", { interval: 200 });
    sr.reveal(".home__description", { interval: 200 });
    sr.reveal(".button", { interval: 200 });
    sr.reveal(".home__img", { interval: 200 });
    sr.reveal(".home__social-icon", { interval: 200 });
    sr.reveal(".home__scroll", { interval: 200 });

    // About
    sr.reveal(".section__title, .section__subtitle", { interval: 200 });
    sr.reveal(".about__img", { interval: 200 });
    sr.reveal(".about__data", { interval: 200 });

    // Skills
    sr.reveal(".skills__content", { interval: 200 });
    sr.reveal(".qualification__tabs", { interval: 200 });
    sr.reveal(".qualification__sections", { interval: 200 });

    // Contact
    sr.reveal(".contact__information", { interval: 200 });

    // Footer
    sr.reveal(
      ".footer__title, .footer__subtitle, .footer__links, .footer__socials",
      {
        interval: 200
      }
    );
  }, []);

  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <ContactMe />
    </Layout>
  );
};

export default IndexContainer;
