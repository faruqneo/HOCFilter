import { arrowDown, arrowUp, select } from "./constant";

export type StateType = {
  selectedIndex: number;
};

export type ActionType = {
  type: string;
  payload: number;
};

export const initialState: StateType = { selectedIndex: -1 };

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case arrowUp:
          return {
            selectedIndex:
              state.selectedIndex !== 0
                ? state.selectedIndex - 1
                : action.payload - 1,
          };
        case arrowDown:
          return {
            selectedIndex:
              state.selectedIndex !== action.payload - 1
                ? state.selectedIndex + 1
                : 0,
          };
        case select:
          return { selectedIndex: action.payload };
        default:
          throw new Error();
      }
};
