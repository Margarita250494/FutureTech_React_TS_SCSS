import { socialLinks } from "./footerData";

export const FooterSocials = () => {
  return (
    <ul className="soc1als__list">
      {socialLinks.map((social, index) => (
        <li key={index} className="soc1als__item">
          <a
            href={social.href}
            className="soc1als__link"
            target="_blank"
            aria-label={social.label}
            title={social.label}
          >
            {social.icon && social.icon()}
          </a>
        </li>
      ))}
    </ul>
  );
};
