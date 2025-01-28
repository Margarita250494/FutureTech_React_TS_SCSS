import { BlogIntroProps } from "@/shared/types";

export const BlogIntro = ({divClassName,h2ClassName,title,intro}:BlogIntroProps) => {
  return (
    <div className={divClassName}>
      <h2 className={h2ClassName}>{title}</h2>
      <p>{intro}</p>
    </div>
  );
};
