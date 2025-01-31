import yellowArrow from "@/assets/icons/yellowArrow.svg";
import { ImgArrowProps } from "@/shared/types";
import { NavLink } from "react-router-dom";

type Props = {
  href:string;
  text:string;
  src:string;
}

export const LinkImgArrow = ({ href, className, children }: ImgArrowProps) => {
  return (
    <NavLink to={href} className={className}>
      <span className="icon">
        {children}
        <img className="icon--yellow-arrow" src={yellowArrow} alt="" />
      </span>
    </NavLink>
  );
};

export const LinkEye = ({href,text,src}:Props) => {
  return (
    <a className="card__cell-link button" href={href}>
      <span className="icon">
        {text}
        <img className="icon--yellow-eye" src={src} alt="" />
      </span>
    </a>
  );
};
