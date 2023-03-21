
const NoDataCard = () => {
    return (
      <li
        className="list-item"
      >
        <div
          aria-label="No Data found"
          data-testid="noDataFound"
          role="button"
          tabIndex={0}
        >
          <strong className="list-item__name">No Data found</strong>
          <span className="list-item__email">NA</span>
        </div>
      </li>
    );
  };
  
  export default NoDataCard;