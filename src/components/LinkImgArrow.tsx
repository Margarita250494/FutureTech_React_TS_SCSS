import yellowArrow from "@/assets/icons/yellowArrow.svg";
import { ImgArrowProps } from "@/shared/types";
import { NavLink } from "react-router-dom";

export const LinkImgArrow = ({href, className,children}: ImgArrowProps) => {
  return (
    <NavLink to={href} className={className}>
      <span className="icon">
        {children}
        <img className="icon--yellow-arrow" src={yellowArrow} alt="" />
      </span>
    </NavLink>
  );
};