import { TeamProps } from "@/shared/types";

export const Team = ({ classname, people }: TeamProps) => {
  return (
    <div className={classname}>
      {people.map((person) => (
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
