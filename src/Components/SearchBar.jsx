import React from "react";

function SearchBar() {
  return (
    <section className="search-result">
      <div className="row">
        <form action="/">
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
          <input
            className="box-shadow"
            type="search"
            name=""
            id="search"
            placeholder="Search for a country..."
            autoComplete="off"
          />
        </form>

        <div className="filter box-shadow">
          <button
            onClick={() => {
              console.log("search btn clicked!");
            }}
          >
            Filter by Region
            <i className="fas fa-sort-down"></i>
            <i className="fas fa-sort-up"></i>
          </button>

          <div className="dropdown box-shadow">
            <ul>
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
