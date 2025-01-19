import { TeamMember } from "@/shared/types";

type Props = {
  classname: string;
  people: TeamMember[]; 
};

export const Team = ({ classname, people }: Props) => {
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
