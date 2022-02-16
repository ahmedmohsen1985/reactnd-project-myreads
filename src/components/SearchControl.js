import React from "react";

const SearchControl = () => {
  return (
    <div className="search-books-bar">
      <button
        className="close-search"
        onClick={() => this.setState({ showSearchPage: false })}
      >
        Close
      </button>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author"  value={query} onChange={(event) => this.updateQuery(event.target.value)} />
      </div>
    </div>
  );
};

export default SearchControl;
