import { PersonCardProps } from "@/shared/types";

export const PersonCard = ({ imageSrc, name, department }: PersonCardProps) => {
  return (
    <div className="blog-card__author person-card">
      <img
        src={imageSrc}
        alt=""
        className="person-card__image"
        width="80"
        height="80"
        loading="lazy"
      />
      <div className="person-card__body">
        <p className="person-card__name">{name}</p>
        <p className="person-card__department">{department}</p>
      </div>
    </div>
  );
};
