import { useEffect } from "react";

import { LayoutHeader, LayoutFooter, IconArrowUp } from "components";
import { LayoutPropsModel } from "models";

const Layout = ({ children }: LayoutPropsModel): JSX.Element => {
  useEffect(() => {
    showScrollUp();
  }, []);

  const showScrollUp = (): void => {
    window.addEventListener("scroll", scrollUp);
  };

  const scrollUp = (): void => {
    const scrollUp = document.getElementById("scroll-up");
    const scrollY = window.pageYOffset;

    if (scrollY >= 560) {
      scrollUp?.classList.add("show-scroll");
    } else {
      scrollUp?.classList.remove("show-scroll");
    }
  };

  return (
    <>
      <LayoutHeader />
      <main className="main">{children}</main>
      <LayoutFooter />
      <a href="#" className="scrollup" id="scroll-up" aria-label="scroll-up">
        <div className="scrollup__icon">
          <IconArrowUp />
        </div>
      </a>
    </>
  );
};

export default Layout;
