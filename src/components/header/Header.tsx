import { NavLink } from "react-router-dom";

//type Props = {}

export const Header = () => {
  return (
    <header className="header">
      <div className="header__promo">
        <div className="header__promo-inner container">
          <a href="/" className="header__promo-link">
            <span className="icon icon--yellow-arrow">
              Subscribe to our Newsletter For New & latest Blogs and Resources
            </span>
          </a>
        </div>
      </div>
      <div className="header__body">
        <div className="header__body-inner container">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/podcasts"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Podcasts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Resources
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
