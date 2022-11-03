import { IPerson } from "../../pages/Home";
import ActorCard from "./ActorCard";

interface IActorGridProps {
  data: IPerson[];
}

const ActorGrid = ({ data }: IActorGridProps) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : ""}
        />
      ))}
      ;
    </div>
  );
};

export default ActorGrid;
