import yellowArrow from "@/assets/icons/yellowArrow.svg";
import { ImgArrowProps } from "@/shared/types";

export const LinkImgArrow = ({href, className,children}: ImgArrowProps) => {
  return (
    <a href={href} className={className}>
      <span className="icon">
        {children}
        <img className="icon--yellow-arrow" src={yellowArrow} alt="" />
      </span>
    </a>
  );
};
