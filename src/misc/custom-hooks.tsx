import { useReducer, useEffect } from "react";

export enum ActionTypes {
  ADD,
  REMOVE,
}

export type ACTIONS =
  | {
      type: ActionTypes.ADD;
      showId: number;
    }
  | {
      type: ActionTypes.REMOVE;
      showId: number;
    };

const initialState: number[] = [];

const showReducer = (prevState: typeof initialState = [], action: ACTIONS) => {
  switch (action.type) {
    case ActionTypes.ADD: {
      return [...prevState, action.showId];
    }
    case ActionTypes.REMOVE: {
      return prevState.filter((showId) => showId !== action.showId);
    }
    default:
      return prevState;
  }
};

const userPersistedReducer = (key: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(showReducer, initialState, (initial) => {
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial;
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return { state, dispatch };
};

export const useShows = (key: string = "shows") => {
  return userPersistedReducer(key);
};
