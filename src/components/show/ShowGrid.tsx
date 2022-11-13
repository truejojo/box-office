import { IShow } from "../../pages/Home";
import ShowCard from "./ShowCard";
import { useShows, ActionTypes } from "../../misc/custom-hooks";

import { FlexGrid } from "../styled";

// import IMAGE_NOT_FOUND from "../../images/not-found.png";

interface IShowGridProps {
  data: IShow[];
}

const ShowGrid = ({ data }: IShowGridProps) => {
  const { state, dispatch } = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = state.includes(show.id);

        const onStarClick = () =>
          isStarred
            ? dispatch({ type: ActionTypes.REMOVE, showId: show.id })
            : dispatch({ type: ActionTypes.ADD, showId: show.id });

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : ""}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
