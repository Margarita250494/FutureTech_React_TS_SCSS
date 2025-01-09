import { NavLink } from "react-router-dom";
import { linkDate } from '@/shared/dateBase';

type Props = {
  closeMenu: () => void;
}

export const Link = ({ closeMenu }: Props) => {
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

