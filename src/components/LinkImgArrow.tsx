import yellowArrow from "@/assets/icons/yellowArrow.svg";
import React from "react";

type Props = {
    href:string;
    className:string;
    children:React.ReactNode;
};

export const LinkImgArrow = ({href, className,children}: Props) => {
  return (
    <a href={href} className={className}>
      <span className="icon">
        {children}
        <img className="icon--yellow-arrow" src={yellowArrow} alt="" />
      </span>
    </a>
  );
};
