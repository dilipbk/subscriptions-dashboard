const TableSummary = () => {
  return (
    <div className="table-summary flex justify-between items-center text-sm">
      <div className="result-count flex items-center gap-1">
        <div className="count-selector">
          <label htmlFor="count-changer">Show Results</label>
          <select name="count-changer" id="count-changer">
            <option value="10" defaultChecked>
              10
            </option>
            <option value="20">20</option>
            <option value="10o">100</option>
          </select>
        </div>
        <div className="page">
          <p>Page: 1</p>
        </div>
        <div className="results-of">Showing 10 / 100</div>
      </div>
      <div className="pagination flex items-center">
        <button className="prev page">Prev</button>
        <button className="first page">1</button>
        <button className="second page active">2</button>
        <button className="third page">3</button>
        <button className="escape">...</button>
        <button className="last page">30</button>
        <button className="next page">Next</button>
      </div>
    </div>
  );
};

export default TableSummary;
