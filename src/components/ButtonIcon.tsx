import { ButtonIconProps } from "@/shared/types";

export const ButtonIcon = ({buttonClassName,onClick,text,imgClassName,src}: ButtonIconProps) => {
  return (
    <button
      className={buttonClassName}
      type="button"
      onClick={onClick}
    >
      <span className="icon">
        {text}
        <img className={imgClassName} src={src} alt="" />
      </span>
    </button>
  );
};
