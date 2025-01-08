import { NavLink } from "react-router-dom";
import { linkDate } from '@/shared/dateBase';

export const Link = () => {
  return ( 
  <>
    {linkDate.map((link) => (
      <li key={link.to} className="header__menu_item">
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `header__menu-link ${isActive ? "active" : ""}`.trim()
          }
        >
          {link.name}
        </NavLink>
      </li>
    ))}
  </>
    
  )
}

