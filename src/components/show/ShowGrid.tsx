import { IShow } from "../../pages/Home";
import ShowCard from "./ShowCard";

import { FlexGrid } from "../styled";

// import IMAGE_NOT_FOUND from "../../images/not-found.png";

interface IShowGridProps {
  data: IShow[];
}

const ShowGrid = ({ data }: IShowGridProps) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : ""}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
