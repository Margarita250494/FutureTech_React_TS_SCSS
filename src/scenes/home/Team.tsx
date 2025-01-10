import { team } from "./homeData";

export const Team = () => {
  return (
    <div className="resources-preview__team team">
      {team.map((person) => (
        <img
          key={person.name}
          src={person.img}
          alt={person.name}
          className="team__person"
          width="60"
          height="60"
          loading="lazy"
        />
      ))}
    </div>
  );
};
