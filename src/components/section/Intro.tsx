import { BlogIntroProps } from "@/shared/types";

export const Intro = ({ divClassName, h2ClassName, title, intro, reverse,pClassName,id }: BlogIntroProps) => {
  return (
    <div className={divClassName}>
      {reverse ? (
        <>
          <p className={pClassName}>{intro}</p>
          <h2 className={h2ClassName} id={id}>{title}</h2>
        </>
      ) : (
        <>
          <h2 className={h2ClassName} id={id}>{title}</h2>
          <p className={pClassName}>{intro}</p>
        </>
      )}
    </div>
  );
};