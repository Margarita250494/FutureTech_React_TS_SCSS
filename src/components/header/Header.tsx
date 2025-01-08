import logo from "@/assets/images/logo.svg";
import { Link } from "./Link";
import { useEffect, useState } from "react";
import yellowArrow from "@/assets/icons/yellowArrow.svg";
import { ALink } from "./ALink";
import { BurgerMenuIcon } from "./BurgerMenuIcon";


//type Props = {}

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)"); // Условие: если ширина окна <= 768px
    const handleResize = () => setIsMobile(mediaQuery.matches); // Обновляем состояние

    handleResize(); // Проверяем ширину окна при первой загрузке
    mediaQuery.addEventListener("change", handleResize); // Добавляем слушатель событий

    return () => mediaQuery.removeEventListener("change", handleResize); // Убираем слушатель при размонтировании
  }, []);

  return (
    <header className="header">
      <div className="header__promo">
        <div className="header__promo-inner container">
          <ALink
            href="/"
            className="header__promo-link">
            <span className="icon">
              Subscribe to our Newsletter For New & latest Blogs and Resources
              <img className="icon--yellow-arrow" src={yellowArrow} alt="" />
            </span>
          </ALink>
        </div>
      </div>
      <div className="header__body">
        <div className="header__body-inner container">
          <ALink
            href="/"
            className="header__logo logo"
            title="Home"
            ariaLabel="Home"
          >
            <img
              className="logo__image"
              src={logo}
              alt=""
              width="179"
              height="50"
            />
          </ALink>
          <div className="header__overlay">
            <nav className="header__menu">
              <ul className="header__menu-list">
                <Link />
              </ul>
            </nav>
            <ALink
              href="/"
              className="header__contact-us-link button button--accent"
              style={{ display: isMenuOpen ? "block" : "none" }}
              ariaLabel="Contact us"
              title="Contact Us"
            >
              Contact Us
            </ALink>
          </div>

          {isMobile ? (
            <button
            className={`header__burger-button burger-button visible-mobile ${
              isMenuOpen ? "active" : ""
            }`}
              aria-label="Open Menu"
              title="Open Menu"
              onClick={toggleMenu}
            >
              <BurgerMenuIcon/>
            </button>
          ) : (
            <ALink
              href="/"
              className="header__contact-us-link button button--accent"
              ariaLabel="Contact us"
              title="Contact Us"
            >
              Contact Us
            </ALink>
          )}
        </div>
      </div>
    </header>
  );
};
