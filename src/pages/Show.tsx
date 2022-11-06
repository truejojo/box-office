import { Reducer, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { apiGet } from "../misc/config";

interface IShowProps {}

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

  return <div>Show: </div>;
};

export default Show;
