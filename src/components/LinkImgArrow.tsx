import yellowArrow from "@/assets/icons/yellowArrow.svg";
import { ImgArrowProps } from "@/shared/types";
import { NavLink } from "react-router-dom";

type Props = {
  href:string;
  text:string;
  src:string;
  download?:boolean;
}

export const LinkImgArrow = ({ href, className, children,download }: ImgArrowProps) => {
  return (
    <NavLink to={href} className={className} download={download}>
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
