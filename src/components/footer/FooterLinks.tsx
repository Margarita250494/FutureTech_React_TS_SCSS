import { footerLinks } from "./footerData"

export const FooterLinks = () => {
  return (
    <ul className="footer__extra-menu-list">
        {footerLinks.map((link, index)=>(
            <li key={index} className="footer__extra-menu-item">
            <a href={link.href} className="footer__extra-menu-link">
              {link.name}
            </a>
          </li>
        ))}
    </ul>
  )
}

