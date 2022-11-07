import { Reducer, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import ShowMainData from "../components/show/ShowMainData";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import Cast from "../components/show/Cast";
import { apiGet } from "../misc/config";
import { ShowPageWrapper, InfoBlock } from "./Show.styled";

export interface IEmbeddedSeasonsProps {
  id: number;
  number: number;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
}

export interface IEmbeddedCastProps {
  person: {
    name: string;
    image: {
      medium: string;
    };
  };
  character: {
    name: string;
  };
  voice: string;
}
interface IEmbeddedProps {
  seasons: IEmbeddedSeasonsProps[];
  cast: IEmbeddedCastProps[];
}
interface IShowProps {
  image: {
    original: string;
  };
  name: string;
  rating: {
    average: number;
  };
  summary: string;
  genres: string[];
  status: string;
  network: {
    name: string;
  };
  premiered: string;
  _embedded: IEmbeddedProps;
}

enum ACTIONS_KIND {
  FETCH_SUCCESSS,
  FETCH_FAILED,
}

interface IReducerState {
  show: null | IShowProps;
  isLoading: boolean;
  error: null | string;
}

type ACTIONS =
  | {
      type: ACTIONS_KIND.FETCH_SUCCESSS;
      show: IShowProps;
    }
  | {
      type: ACTIONS_KIND.FETCH_FAILED;
      error: string;
    };

const initialState: IReducerState = {
  show: null,
  isLoading: true,
  error: null,
};

const reducer: Reducer<IReducerState, ACTIONS> = (state, action) => {
  switch (action.type) {
    case ACTIONS_KIND.FETCH_SUCCESSS: {
      return { isLoading: false, error: null, show: action.show };
    }
    case ACTIONS_KIND.FETCH_FAILED: {
      return { ...state, isLoading: false, error: action.error };
    }
    default:
      return { ...state };
  }
};

const Show = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { show, isLoading, error } = state;
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        if (isMounted) {
          dispatch({
            type: ACTIONS_KIND.FETCH_SUCCESSS,
            show: results,
          });
        }
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({
            type: ACTIONS_KIND.FETCH_FAILED,
            error: err.message,
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return (
    <ShowPageWrapper>
      {show && (
        <ShowMainData
          image={show.image}
          name={show.name}
          rating={show.rating}
          summary={show.summary}
          tags={show.genres}
        />
      )}

      <InfoBlock>
        <h2>Details</h2>
        {show && (
          <Details
            status={show.status}
            network={show.network}
            premiered={show.premiered}
          />
        )}
      </InfoBlock>

      <InfoBlock>
        <h2>Seasons</h2>
        {show && <Seasons seasons={show._embedded.seasons} />}
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        {show && <Cast cast={show._embedded.cast} />}
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
