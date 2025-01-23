import { PersonCardProps } from "@/shared/types";

export const PersonCard = ({
  imageSrc,
  name,
  department,
  width,
  height,
}: PersonCardProps) => {
  return (
    <>
      <img
        src={imageSrc}
        alt=""
        className="person-card__image"
        width={width}
        height={height}
        loading="lazy"
      />
      <div className="person-card__body">
        <p className="person-card__name">{name}</p>
        <p className="person-card__department">{department}</p>
      </div>
    </>
  );
};
