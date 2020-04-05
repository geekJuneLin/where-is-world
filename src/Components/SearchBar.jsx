import React from "react";

function SearchBar(props) {
  // destructuring props
  const { darkMode } = props;

  const [isShow, setShow] = React.useState(false);

  const darkButton = {
    backgroundColor: darkMode && "hsl(209, 23%, 22%)",
    color: darkMode && "#fff",
    fontFamily: darkMode && "Nunito Sans, sans-serif",
    fontSize: darkMode && "1em",
  };

  function switchVisibility() {
    setShow(!isShow);
  }

  return (
    <section className="search-result">
      <div className="row">
        <form action="/">
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
          <input
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
