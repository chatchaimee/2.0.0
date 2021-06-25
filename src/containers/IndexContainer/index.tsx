import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

import {
  Layout,
  Home,
  About,
  Skills,
  Qualification,
  ContactMe
} from "components";

const IndexContainer = (): JSX.Element => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "25px",
      scale: 0.85,
      duration: 1000,
      delay: 500,
      useDelay: "onload",
      interval: 100
    });

    setTimeout(() => {
      setLoading(!loading);
      loadAnimation(sr);
    }, 2000);
  }, []);

  const loadAnimation = (sr: scrollReveal.ScrollRevealObject): void => {
    // Home
    sr.reveal(".home__data", {});
    sr.reveal(".home__subtitle", {});
    sr.reveal(".home__description", {});
    sr.reveal(".button", {});
    sr.reveal(".home__img", {});
    sr.reveal(".home__social-icon", {});
    sr.reveal(".home__scroll", {});

    // About
    sr.reveal(".section__title, .section__subtitle", {});
    sr.reveal(".about__img", {});
    sr.reveal(".about__data", {});

    // Skills
    sr.reveal(".skills__content", {});
    sr.reveal(".qualification__tabs", {});
    sr.reveal(".qualification__sections", {});

    // Contact
    sr.reveal(".contact__information", {});

    // Footer
    sr.reveal(
      ".footer__title, .footer__subtitle, .footer__links, .footer__socials",
      {
        interval: 200
      }
    );
  };

  return (
    <>
      {loading ? (
        <div className="loading__animation">
          <HashLoader loading={loading} color="#1b5074" size={150} />
        </div>
      ) : (
        <Layout>
          <Home />
          <About />
          <Skills />
          <Qualification />
          <ContactMe />
        </Layout>
      )}
    </>
  );
};

export default IndexContainer;
