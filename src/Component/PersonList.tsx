import { useEffect, useReducer } from "react";
import PersonCard from "./Person";
import { Person } from "../Type";
import { withSearch } from "../HOC/withSearch";
import NoDataCard from "./NoPerson";
import useKeyPress from "../CustomHooks/useKeyPress";
import { initialState, reducer } from "../Reducer/keystrokeReducer";
import { arrowDown, arrowUp } from "../Reducer/constant";

const ArrowUp = 'ArrowUp';
const ArrowDown = 'ArrowDown';

interface PersonListProps {
  data: Person[];
}

export const PersonList = ({ data: people }: PersonListProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const arrowUpPressed = useKeyPress(ArrowUp);
  const arrowDownPressed = useKeyPress(ArrowDown);
  useEffect(() => {
    if (arrowUpPressed) {
      dispatch({ type: arrowUp, payload: people.length });
    }
  }, [arrowUpPressed, people]);

  useEffect(() => {
    if (arrowDownPressed) {
      dispatch({ type: arrowDown, payload: people.length  });
    }
  }, [arrowDownPressed, people]);
  return (
    <ul className="user__list" data-testid="user__list">
      {people.length ? people.map((person: Person, idx: number) => (
        <PersonCard key={person.id} item={person} index={idx} state={state} dispatch={dispatch} />
      )): <NoDataCard />}
    </ul>
  );
};

export default withSearch(PersonList);
