import { useState, useEffect } from "react";

import {
  IconApp,
  IconHome,
  IconAbout,
  IconSkills,
  IconContact,
  IconClose,
  IconMoon,
  IconSun
} from "components";

const navLogo = "Chatchai";
const navMenus = [
  {
    href: "#home",
    icon: <IconHome />,
    name: "Home"
  },
  {
    href: "#about",
    icon: <IconAbout />,
    name: "About"
  },
  {
    href: "#skills",
    icon: <IconSkills />,
    name: "Skills"
  },
  {
    href: "#contact",
    icon: <IconContact />,
    name: "Contactme"
  }
];

const LayoutHeader = (): JSX.Element => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    removeMenuMobile();
    scrollSectionsActiveLink();
    changeBackgroundHeader();
    changeTheme();
  }, []);

  const removeMenuMobile = () => {
    const navLinks = document.querySelectorAll(".nav__link");
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");

    navLinks.forEach(navLink =>
      navLink.addEventListener("click", () => {
        const navMenu = document.getElementById("nav-menu");

        // When we click on each nav__link, we remove the show-menu class
        navMenu?.classList.remove("show-menu");
      })
    );

    // Menu show
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu?.classList.add("show-menu");
      });
    }

    // Menu hidden
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu?.classList.remove("show-menu");
      });
    }
  };

  const scrollSectionsActiveLink = (): void => {
    window.addEventListener("scroll", scrollActive);
  };

  const scrollActive = (): void => {
    const sections: NodeListOf<HTMLElement> =
      document.querySelectorAll("section[id]");

    const scrollY = window.pageYOffset;

    sections.forEach((section: HTMLElement) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 270;
      const sectionId = section.getAttribute("id");

      const navMenuElement = document.querySelector(
        `.nav__menu a[href*=${sectionId}]`
      );

      const navMenuSkillsElement = document.querySelector(
        ".nav__menu a[href*=skills]"
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navMenuElement?.classList.add("active-link");

        if (sectionId === "qualification") {
          navMenuSkillsElement?.classList.add("active-link");
        }
      } else {
        navMenuElement?.classList.remove("active-link");
      }
    });
  };

  const changeBackgroundHeader = (): void => {
    window.addEventListener("scroll", scrollHeader);
  };

  const scrollHeader = (): void => {
    const nav = document.getElementById("header");
    const scrollY = window.pageYOffset;

    if (scrollY >= 80) {
      nav?.classList.add("scroll-header");
    } else {
      nav?.classList.remove("scroll-header");
    }
  };

  const changeTheme = (): void => {
    const selectedTheme = localStorage.getItem("theme");
    const selectedIcon = localStorage.getItem("icon-dark");

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        "dark-theme"
      );
      setIsDarkTheme(selectedIcon === "true");
    }
  };

  const getCurrentTheme = (): string =>
    document.body.classList.contains("dark-theme") ? "dark" : "light";

  const handleThemeButtonClick = (): void => {
    document.body.classList.toggle("dark-theme");

    setIsDarkTheme(!isDarkTheme);

    localStorage.setItem("theme", getCurrentTheme());
    localStorage.setItem("icon-dark", (!isDarkTheme).toString());
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          {navLogo}
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            {navMenus.map(({ href, icon, name }, index) => (
              <li className="nav__item" key={`${name}_${index}`}>
                <a
                  href={href}
                  className={`nav__link ${index === 0 ? "active-link" : ""}`}
                >
                  <span className="nav__icon">{icon}</span> {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__close" id="nav-close">
            <IconClose />
          </div>
        </div>

        <div className="nav__btns">
          <div
            className="change-theme"
            id="theme-button"
            onClick={() => handleThemeButtonClick()}
          >
            {isDarkTheme ? <IconSun /> : <IconMoon />}
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <IconApp />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LayoutHeader;
