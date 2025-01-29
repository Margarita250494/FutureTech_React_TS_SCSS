import { DescriptionProps } from "@/shared/types";

export const Description = ({
  bodyClassName,
  titleClassName,
  title,
  descClassName,
  desc,
  h2,
  h3,
  h4,
}: DescriptionProps) => {
  return (
    <div className={bodyClassName}>
      {h2 ? (
        <h2 className={titleClassName}>{title}</h2>
      ) : h3 ? (
        <h3 className={titleClassName}>{title}</h3>
      ) : h4 ? (
        <h4 className={titleClassName}>{title}</h4>
      ) : null}
      <div className={descClassName}>
        <p>{desc}</p>
      </div>
    </div>
  );
};
