import { IPerson } from "../../pages/Home";
import ActorCard from "./ActorCard";

import { FlexGrid } from "../styled";
interface IActorGridProps {
  data: IPerson[];
}

const ActorGrid = ({ data }: IActorGridProps) => {
  return (
    <FlexGrid>
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
    </FlexGrid>
  );
};

export default ActorGrid;
