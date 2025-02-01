import { LinkEye, LinkImgArrow } from "../LinkImgArrow";

type Props = {
    bodyClassName: string;
    subtitle:string;
    description:string;
    eyeLink?:boolean;
    arrowLink?:boolean;
    href:string;
    text:string;
    src?:string;
    arrowClassName?:string;
    h3?:boolean;
    
}


export const CardPreviewExtra = ({bodyClassName,subtitle,description,eyeLink,arrowLink,href,text,src,arrowClassName,h3}:Props) => {
  return (
    <div className={bodyClassName}>
      <div className="card__cell tile">
      {h3 ? 
      (<h3 className="card__cell-subtitle">{subtitle}</h3>) 
      : 
      <h4 className="card__cell-subtitle">{subtitle}</h4>}
      <p className="card__cell-description subDescription h6">
        {description}
      </p>
      {eyeLink ? (
        <LinkEye
        href={href}
        text={text}
        src={src || ""}/>
      ) : arrowLink ? (
        <LinkImgArrow
        href={href}
        className={arrowClassName as string}
        children={text}
        />
      ) : null}
      </div>
      
    </div>
  );
};
