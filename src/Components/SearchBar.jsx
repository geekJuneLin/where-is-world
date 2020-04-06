import React from "react";

function SearchBar(props) {
  // destructuring props
  const { darkMode, onUpdate, onFiltered } = props;

  const [isShow, setShow] = React.useState(false);

  const conditions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const darkButton = {
    backgroundColor: darkMode && "hsl(209, 23%, 22%)",
    color: darkMode && "#fff",
    fontFamily: darkMode && "Nunito Sans, sans-serif",
    fontSize: darkMode && "1em",
  };

  function switchVisibility() {
    setShow(!isShow);
  }

  // search functionality
  function onSearch(e) {
    const { value } = e.target;
    onUpdate(value);
  }

  const onFilter = (c) => {
    onFiltered(c);
  };

  return (
    <section className="search-result">
      <div className="row">
        <form action="/">
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
          <input
            onChange={onSearch}
            className={darkMode ? "box-shadow-dark" : "box-shadow"}
            type="search"
            name=""
            id="search"
            placeholder="Search for a country..."
            autoComplete="off"
          />
        </form>

        <div
          className={
            darkMode ? "filter-dark box-shadow-dark" : "filter box-shadow"
          }
        >
          <button onClick={switchVisibility} style={darkButton}>
            Filter by Region
            <i
              className="fas fa-sort-down"
              style={{
                transform: isShow && "rotate(180deg)",
                position: isShow && "relative",
                top: isShow && "2.5px",
              }}
            ></i>
          </button>

          <div
            className={
              darkMode ? "dropdown box-shadow-dark" : "dropdown box-shadow"
            }
            style={{
              display: isShow && "block",
              backgroundColor: darkMode && "hsl(209, 23%, 22%)",
              color: darkMode && "#fff",
            }}
          >
            <ul>
              {conditions.map((c, index) => {
                return (
                  <li key={index} onClick={() => onFilter(c)}>
                    {c}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
