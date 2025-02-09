import { ContactUsProps } from "@/shared/types";
import { NavLink } from "react-router-dom";

export const ContactUsLink = ({ className, style,closeMenu }: ContactUsProps) => {
  return (
    <NavLink
      to="/contacts"
      className={className}
      title="Contact us"
      aria-label="Contact us"
      style={style}
      onClick={closeMenu}
    >
      Contact Us
    </NavLink>
  );
};

