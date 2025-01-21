import { NavLink } from "react-router-dom";
import { linkDate } from "./headerData";
import { LinkProps} from "@/shared/types";

export const Link = ({ closeMenu }: LinkProps) => {
  return ( 
  <>
    {linkDate.map((link) => (
      <li key={link.to} className="header__menu-item">
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `header__menu-link ${isActive ? "active" : ""}`.trim()
          }
          onClick={closeMenu}
        >
          {link.name}
        </NavLink>
      </li>
    ))}
  </>
    
  )
}

