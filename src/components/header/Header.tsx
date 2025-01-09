import logo from "@/assets/images/logo.svg";
import { Link } from "./Link";
import { useState } from "react";
import { ContactUsLink } from "./ContactUsLink";
import { BurgerMenuIcon } from "./BurgerMenuIcon";
import { useIsMobile, useBodyNoScroll } from "@/shared/hooks";
import { MOBILE_MEDIA_QUERY } from "@/shared/constants";
import { LinkImgArrow } from "../LinkImgArrow";


export const Header = () => {
  const isMobile = useIsMobile(MOBILE_MEDIA_QUERY);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const closeMenu = () => setIsMenuVisible(false);
  const toggleMenu = () => setIsMenuVisible((prev) => !prev);

  useBodyNoScroll(isMenuVisible && isMobile);

  return (
    <header className="header">
      <div className="header__promo">
        <div className="header__promo-inner container">
          <LinkImgArrow
            href="/"
            className="header__promo-link"
            >
            Subscribe to our Newsletter For New & latest Blogs and Resources
          </LinkImgArrow>
        </div>
      </div>
      <div className="header__body">
        <div className="header__body-inner container">
          <a
            href="/" className="header__logo logo"
            title="Home" aria-label="Home"
          >
            <img
              className="logo__image" src={logo} alt=""
              width="179" height="50"
            />
          </a>
          <div 
            className={`header__overlay ${isMenuVisible && isMobile ? "active" : ""}`}>
            <nav className="header__menu">
              <ul className="header__menu-list">
                <Link  closeMenu={closeMenu}/>
              </ul>
            </nav>
            <ContactUsLink
              className={`header__contact-us-link button button--accent ${isMenuVisible && isMobile ? "" : "visible-mobile"}` }
            />
          </div>

          {isMobile ? (
            <button
            className={`header__burger-button burger-button ${
              isMenuVisible ? "active" : ""
            }`}
              aria-label={isMenuVisible ? "Close Menu" : "Open Menu"}
              title={isMenuVisible ? "Close Menu" : "Open Menu"}
              onClick={toggleMenu}
              aria-expanded={isMenuVisible}
              aria-controls="menu"
            >
              <BurgerMenuIcon/>
            </button>
          ) : (
            <ContactUsLink className="header__contact-us-link button button--accent"/>
          )}
        </div>
      </div>
    </header>
  );
};
