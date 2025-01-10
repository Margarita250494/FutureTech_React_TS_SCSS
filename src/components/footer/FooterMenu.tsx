import { footerMenuData, footerMenuButton } from "./footerData";
import { FooterMenuData } from "@/shared/types";
import { NavLink } from "react-router-dom";
import { LinkImgArrow } from "../LinkImgArrow";


export const FooterMenu = () => {
  return (
    <>
      {footerMenuData.map((menu: FooterMenuData, index: number) => (
        <div className="footer__menu-column" key={index}>
          <NavLink to={menu.mainLink.to} className="footer__menu-main-link h6">
            {menu.mainLink.name}
          </NavLink>
          <ul className="footer__menu-list">
            {menu.subLinks.map((subLink, subIndex) => (
              <li key={subIndex} className="footer__menu-item">
                <a href={subLink.to} className="footer__menu-link">
                  {subLink.name}
                </a>
                {subLink.badge && (
                    <span className="badge">{subLink.badge}</span>
                  )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {footerMenuButton.map((menu: FooterMenuData, index: number) => (
        <div className="footer__menu-column" key={`button-${index}`}>
          <NavLink to={menu.mainLink.to} className="footer__menu-main-link h6">
            {menu.mainLink.name}
          </NavLink>
          <ul className="footer__menu-list">
            {menu.subLinks.map((subLink, subIndex) => (
              <li key={subIndex} className="footer__menu-item">
                <LinkImgArrow
                  href={subLink.to}
                  className="footer__menu-link button"
                >
                  {subLink.name}
                </LinkImgArrow>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
