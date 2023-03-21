import { Person } from "../Type";
import { select } from '../Reducer/constant'
import { StateType } from "../Reducer/keystrokeReducer";

interface PersonProps {
    item: Person;
    index: number;
    dispatch: any;
    state: StateType;
};

const PersonCard = ({ item, index, dispatch, state }: PersonProps) => {
  return (
    <li
      key={item.id}
      className="list-item"
      onClick={() => dispatch({ type: select, payload: index })}
    >
      <div
        aria-label={item.name}
        data-testid={item.name}
        style={{
          cursor: 'pointer',
          color: index === state.selectedIndex ? 'red' : 'black',
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            dispatch({ type: select, payload: index });
            e.target.blur();
          }
        }}
      >
        <strong className="list-item__name"> {item.name}</strong>
        <span className="list-item__email"> {item.email}</span>
      </div>
    </li>
  );
};

export default PersonCard;