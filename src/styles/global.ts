import { memo } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: 3rem;

    /** ===== Colors ===== */
    // Change favorite color
    --hue-color: 204; // Purple 250 - Green 142 - Blue 231 - Pink 340

    // HSL color mode
    --first-color: hsl(var(--hue-color), 62%, 28%);
    --first-color-second: hsl(var(--hue-color), 62%, 34%);
    --first-color-alt: hsl(var(--hue-color), 62%, 40%);
    --first-color-lighter: hsl(var(--hue-color), 70%, 81%);
    --title-color: hsl(var(--hue-color), 8%, 15%);
    --text-color: hsl(var(--hue-color), 8%, 34%);
    --text-color-light: hsl(var(--hue-color), 8%, 65%);
    --input-color: hsl(var(--hue-color), 70%, 96%);
    --body-color: hsl(var(--hue-color), 69%, 99%);
    --container-color: #FFF;
    --scroll-bar-color: hsl(var(--hue-color), 12%, 90%);
    --scroll-thumb-color: hsl(var(--hue-color), 12%, 80%);

    /** ===== Font and typography ===== */
    --body-font: 'Poppins', sans-serif;

    // .5rem = 8px, 1rem = 16px, 1.5rem = 24px ...
    --big-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;

    // Font weight
    --font-medium: 500;
    --font-semi-bold: 600;

    /** ===== Margenes Bottom ===== */
    // .25rem = 4px, .5rem = 8px, .75rem = 12px ...
    --mb-0-25: .25rem;
    --mb-0-5: .5rem;
    --mb-0-75: .75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

    /** ===== z index ===== */
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
  }

  /** Font size for large devices */
  @media screen and (min-width: 968px) {
    :root {
      --big-font-size: 3rem;
      --h1-font-size: 2.25rem;
      --h2-font-size: 1.5rem;
      --h3-font-size: 1.25rem;
      --normal-font-size: 1rem;
      --small-font-size: .875rem;
      --smaller-font-size: .813rem;
    }
  }

  /** Variables dark theme */
  body.dark-theme {
    // HSL color mode
    --first-color: hsl(var(--hue-color), 70%, 42%);
    --first-color-second: hsl(var(--hue-color), 30%, 8%);
    --title-color: hsl(var(--hue-color), 8%, 95%);
    --text-color: hsl(var(--hue-color), 8%, 75%);
    --input-color: hsl(var(--hue-color), 29%, 16%);
    --body-color: hsl(var(--hue-color), 28%, 12%);
    --container-color: hsl(var(--hue-color), 29%, 16%);
    --scroll-bar-color: hsl(var(--hue-color), 12%, 48%);
    --scroll-thumb-color: hsl(var(--hue-color), 12%, 36%);
  }

  /** Button dark / light */
  .nav__btns {
    display: flex;
    align-items: center;
  }

  .change-theme {
    font-size: 1.25rem;
    color: var(--title-color);
    margin-right: var(--mb-1);
    margin-bottom: -2px;
    cursor: pointer;

    svg path {
      fill: var(--title-color);
    }
  }

  .change-theme:hover {
    color: var(--first-color);

    svg path {
      fill: var(--first-color);
    }
  }

  /** Base css */
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0 0 var(--header-height) 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
  }

  h1, h2, h3, h4 {
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .loading__animation {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  /** Reusable css classes */
  .section {
    padding: 2rem 0 4rem;
  }

  .section__title {
    font-size: var(--h1-font-size);
  }

  .section__subtitle {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);
  }

  .section__title,
  .section__subtitle {
    text-align: center;
  }

  /** Layout */
  .container {
    max-width: 768px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .header {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
  }

  /** Nav */
  .nav {
    max-width: 968px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__logo,
  .nav__toggle {
    color: var(--title-color);
    font-weight: var(--font-medium);

    svg path {
      fill: var(--title-color);
    }
  }

  .nav__logo:hover {
    color: var(--first-color);
  }

  .nav__toggle {
    font-size: 1.1rem;
    cursor: pointer;
    margin-bottom: -4px;
  }

  .nav__toggle:hover {
    svg path {
      fill: var(--first-color);
    }
  }

  @media screen and (max-width: 767px) {
    .nav__menu {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      background-color: var(--body-color);
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: .3s;
    }
  }

  .nav__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);

    svg path {
      fill: var(--title-color);
    }
  }

  .nav__link:hover {
    color: var(--first-color);

    svg path {
      fill: var(--first-color);
    }
  }

  .nav__icon {
    font-size: 1.2rem;
  }

  .nav__close {
    position: absolute;
    right: 1.3rem;
    bottom: .3rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--first-color);

    svg path {
      fill: var(--first-color);
    }
  }

  .nav__close:hover {
    svg path {
      fill: var(--first-color-alt);
    }
  }

  /** Show menu */
  .show-menu {
    bottom: 0;
  }

  /** Active link */
  .active-link {
    color: var(--first-color);

    svg path {
      fill: var(--first-color);
    };
  }

  /** Change background header */
  .scroll-header {
    box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
  }

  /** Home */
  .home__container {
    gap: 1rem;
  }

  .home__content {
    grid-template-columns: .5fr 3fr;
    padding-top: 3.5rem;
    align-items: center;
  }

  .home__social {
    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
  }

  .home__social-icon {
    font-size: 1.25rem;

    svg path {
      fill: var(--first-color);
    }
  }

  .home__social-icon:hover {
    svg path {
      fill: var(--first-color-alt);
    }
  }

  .home__blob {
    width: 200px;
    fill: var(--first-color);
  }

  .home__blob-img {
    width: 170px;
  }

  .home__data {
    grid-column: 1/3;
  }

  .home__title {
    font-size: var(--big-font-size);
  }

  .home__subtitle {
    font-size: var(--h3-font-size);
    color: var(--text-color);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-75);
  }

  .home__description {
    margin-bottom: var(--mb-2);
  }

  .home__scroll {
    display: none;
  }

  .home__scroll-button {
    color: var(--first-color);
    transition: .3s;

    svg path {
      fill: var(--first-color);
    }
  }

  .home__scroll-button:hover {
    transform: translateY(0.25rem);
  }

  .home__scroll-mouse {
    font-size: 2rem;

    svg {
      width: 31px;
      height: 32px;
      margin-bottom: -4px;
    }
  }

  .home__scroll-name {
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
  }

  .home__scroll-arrow {
    font-size: 1.25rem;

    svg {
      width: 21px;
      height: 22px;
      margin-bottom: -4px;
    }
  }

  /** Buttons */
  .button {
    display: inline-block;
    background-color: var(--first-color);
    color: #FFF;
    padding: 1rem;
    border-radius: .5rem;
    font-weight: var(--font-medium);

    svg {
      width: 22px;
      height: 23px;
      margin-bottom: -4px;
    }

    svg path {
      fill: #FFF;
    }
  }

  .button:hover {
    background-color: var(--first-color-alt);
  }

  .button__icon {
    font-size: 1.25rem;
    margin-left: var(--mb-0-5);
    transition: .3s;
  }

  .button--flex {
    display: inline-flex;
    align-items: center;
  }

  /** About */
  .about__img {
    width: 200px;
    border-radius: .5rem;
    justify-self: center;
    align-self: center;
  }

  .about__data {
    display: grid;
    align-content: center;
  }

  .about__description {
    text-align: center;
    margin-bottom: var(--mb-2-5);
  }

  .about__info {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2-5);
  }

  .about__info-title {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
  }

  .about__info-name {
    font-size: var(--smaller-font-size);
  }

  .about__info-title,
  .about__info-name {
    display: block;
    text-align: center;
  }

  .about__buttons {
    display: flex;
    justify-content: center;
  }

  /** Skills */
  .skills__container {
    row-gap: 0;
  }

  .skills__header {
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;
  }

  .skills__icon,
  .skills__arrow {
    font-size: 2rem;
    color: var(--first-color);

    svg {
      width: 30px;
      height: 31px;
    }

    svg path {
      fill: var(--first-color);
    }
  }

  .skills__icon {
    margin-right: var(--mb-0-75);
    margin-bottom: -8px;
  }

  .skills__arrow {
    margin-left: auto;
    margin-bottom: -12px;
    transition: .4s;
  }

  .skills__title {
    font-size: var(--h3-font-size);
  }

  .skills__subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color);
  }

  .skills__list {
    row-gap: 1.5rem;
    padding-left: 2.7rem;
  }

  .skills__titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
  }

  .skills__name {
    color: var(--title-color);
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  .skills__bar,
  .skills__percentage {
    height: 5px;
    border-radius: .25rem;
  }

  .skills__bar {
    background-color: var(--first-color-lighter);
  }

  .skills__percentage {
    display: block;
    background-color: var(--first-color);
  }

  .skills__close .skills__list {
    height: 0;
    overflow: hidden;
  }

  .skills__open .skills__list {
    height: max-content;
    margin-bottom: var(--mb-2-5);
  }

  .skills__open .skills__arrow {
    transform: rotate(-180deg);
  }

  /** Qualification */
  .qualification__tabs {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2);
  }

  .qualification__button {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    cursor: pointer;

    svg path {
      fill: var(--text-color);
    }
  }

  .qualification__button:hover {
    color: var(--title-color);

    svg path {
      fill: var(--first-color);
    }
  }

  .qualification__icon {
    font-size: 1.8rem;
    margin-right: var(--mb-0-25);
    margin-bottom: -6px;

    svg {
      width: 28px;
      height: 29px;
    }
  }

  .qualification__data {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
  }

  .qualification__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  .qualification__subtitle {
    display: inline-block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1);
  }

  .qualification__calendar {
    font-size: var(--smaller-font-size);
    color: var(--text-color);

    svg {
      margin-bottom: -4px;
    }

    svg path {
      fill: var(--text-color)
    }
  }

  .qualification__rounder {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: var(--first-color);
    border-radius: 50%;
  }

  .qualification__line {
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--first-color);
    transform: translate(6px, -7px);
  }

  .qualification [data-content] {
    display: none;
  }

  .qualification__active[data-content] {
    display: block;
  }

  .qualification__button.qualification__active {
    color: var(--title-color);

    svg path {
      fill: var(--first-color)
    }
  }

  /** Contact Me */
  .contact__container {
    row-gap: 3rem;
  }

  .contact__information {
    display: flex;
    margin-bottom: var(--mb-2);
  }

  .contact__icon {
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);

    svg {
      width: 28px;
      height: 29px;
      margin-bottom: -4px;
    }

    svg path {
      fill: var(--first-color);
    }
  }

  .contact__title {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
  }

  .contact__subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color);
  }

  /** Footer */
  .footer {
    padding-top: 2rem;
  }

  .footer__container {
    row-gap: 3.5rem;
  }

  .footer__bg {
    background-color: var(--first-color-second);
    padding: 2rem 0 3rem;
  }

  .footer__title {
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-0-25);
  }

  .footer__subtitle {
    font-size: var(--small-font-size);
  }

  .footer__links {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }

  .footer__link:hover {
    color: var(--first-color-lighter);
  }

  .footer__social {
    font-size: 1.25rem;
    margin-right: var(--mb-1-5);
  }

  .footer__social:hover {
    color: var(--first-color-lighter);

    svg path {
      fill: var(--first-color-lighter);
    }
  }

  .footer__copy {
    font-size: var(--smaller-font-size);
    text-align: center;
    color: var(--text-color-light);
    margin-top: var(--mb-3);
  }

  .footer__title,
  .footer__subtitle,
  .footer__link,
  .footer__social {
    color: #FFF;

    svg path {
      fill: #FFF;
    }
  }

  /** Scroll up */
  .scrollup {
    position: fixed;
    right: 1rem;
    bottom: -20%;
    background-color: var(--first-color);
    opacity: .8;
    padding: 0 .3rem;
    border-radius: .4rem;
    z-index: var(--z-tooltip);
    transition: .4s;
  }

  .scrollup:hover {
    background-color: var(--first-color-alt);
  }

  .scrollup__icon {
    font-size: 1.5rem;
    color: #FFF;

    svg {
      width: 24px;
      height: 25px;
      margin-bottom: -4px;
    }

    svg path {
      fill: #FFF;
    }
  }

  /** Show scroll */
  .show-scroll {
    bottom: 5rem;
  }

  /** Scroll bar */
  ::-webkit-scrollbar {
    width: .60rem;
    background-color: var(--scroll-bar-color);
    border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll-thumb-color);
    border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--text-color-light);
  }

  /** ===== Media queries ===== */
  // For small devices
  @media screen and (max-width: 350px) {
    .container {
      margin-left: var(--mb-1);
      margin-right: var(--mb-1);
    }

    .nav__menu {
      padding: 2rem .25rem 4rem;
    }

    .nav__list {
      column-gap: 0;
    }

    .home__content {
      grid-template-columns: .25fr 3fr;
    }

    .home__blob {
      width: 180px;
    }

    .skills__title {
      font-size: var(--normal-font-size);
    }

    .qualification__data {
      gap: .5rem;
    }

    .contact__subtitle {
      font-size: var(--smaller-font-size);
    }
  }

  // For medium devices
  @media screen and (min-width: 568px) {
    .home__content {
      grid-template-columns: max-content 1fr 1fr;
    }

    .home__data {
      grid-column: initial;
    }

    .home__img {
      order: 1;
      justify-self: center;
    }

    .about__container,
    .skills__container,
    .contact__container,
    .footer__container {
      grid-template-columns: repeat(2, 1fr);
    }

    .qualification__sections {
      display: grid;
      grid-template-columns: .6fr;
      justify-content: center;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      margin-left: auto;
      margin-right: auto;
    }

    body {
      margin: 0;
    }

    .show-scroll {
      bottom: 3rem;
    }

    .section {
      padding: 10rem 0 4rem;
    }

    .section__subtitle {
      margin-bottom: 4rem;
    }

    .header {
      top: 0;
      bottom: initial;
    }

    .main {
      overflow-x: hidden;
    }

    .header,
    .main,
    .footer__container {
      padding: 0 1rem;
    }

    .nav {
      height: calc(var(--header-height) + 1.5rem);
      column-gap: 1rem;
    }

    .nav__icon,
    .nav__close,
    .nav__toggle {
      display: none;
    }

    .nav__list {
      display: flex;
      column-gap: 2rem;
    }

    .nav__menu {
      margin-left: auto;
    }

    .change-theme {
      margin: 0;
      margin-bottom: -2px;
    }

    .home__container {
      row-gap: 15rem;
    }

    .home__content {
      padding-top: 5.5rem;
      column-gap: 2rem;
    }

    .home__blob {
      width: 270px;
    }

    .home__scroll {
      display: block;
    }

    .home__scroll-button {
      margin-left: 3rem;
    }

    .about__container {
      column-gap: 5rem;
    }

    .about__img {
      width: 350px;
    }

    .about__info {
      justify-content: space-between;
    }

    .about__buttons {
      justify-content: initial;
    }

    .qualification__tabs {
      justify-content: center;
    }

    .qualification__button {
      margin: 0 var(--mb-1);
    }

    .qualification__sections {
      grid-template-columns: .5fr;
    }

    .footer__container {
      grid-template-columns: repeat(3, 1fr);
    }

    .footer__bg {
      padding: 3rem 0 3.5rem;
    }

    .footer__links {
      flex-direction: row;
      column-gap: 2rem;
    }

    .footer__socials {
      justify-self: flex-end;
    }

    .footer__copy {
      margin-top: 4.5rem;
    }
  }

  // For large devices
  @media screen and (min-width: 1024px) {
    .change-theme {
      margin: 0;
      margin-bottom: -4px;
    }

    .show-scroll {
      bottom: 3rem;
    }

    .header,
    .main,
    .footer__container {
      padding: 0;
    }

    .home__blob {
      width: 320px;
    }

    .home__social {
      transform: translateX(-6rem);
    }
  }
`;

export default memo(GlobalStyle);
