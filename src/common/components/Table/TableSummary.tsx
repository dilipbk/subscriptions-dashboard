import { useEffect, useState } from "react";

const TableSummary = ({
  limit,
  page,
  onLimitChangeHandler,
  usersCount,
  onPageChageHandler,
}) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(usersCount / limit);
  }, [limit]);

  return (
    <div className="table-summary flex justify-between items-center text-sm">
      <div className="result-count flex items-center gap-1">
        <div className="count-selector">
          <label htmlFor="count-changer">Show Results</label>
          <select
            name="count-changer"
            value={limit}
            onChange={onLimitChangeHandler}
            id="count-changer"
          >
            <option value="10" defaultChecked>
              10
            </option>
            <option value="20">20</option>
            <option value="100 ">100</option>
          </select>
        </div>
        <div className="page">
          <p>
            Page: {page} of {totalPages}
          </p>
        </div>
        <div className="results-of">
          Showing {page * limit} / {usersCount}
        </div>
      </div>
      <div className="pagination flex items-center">
        <button
          disabled={page === 1}
          onClick={() => onPageChageHandler(-1)}
          className="prev page"
        >
          Prev
        </button>
        {totalPages > 2 && (
          <>
            <button onClick={() => onPageChageHandler(1)} className="page">
              1
            </button>
            <button onClick={() => onPageChageHandler(2)} className="page">
              2
            </button>
            <span>...</span>
            <button onClick={() => onPageChageHandler(totalPages)}>
              {totalPages}
            </button>
          </>
        )}
        <button
          disabled={page === totalPages}
          onClick={() => onPageChageHandler("+1")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableSummary;
