import React from "react";

function CountryCard(props) {
  // destructuring props
  const { darkMode } = props;

  const population = props.population
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);

  return (
    <div
      className={
        darkMode
          ? "country-card  country-card-mobile box-shadow-dark"
          : "country-card country-card-mobile box-shadow"
      }
      style={{
        backgroundColor: darkMode && "hsl(209, 23%, 22%)",
        color: darkMode && "#fff",
      }}
    >
      <img src={props.flag} alt="germany-flag" />
      <div className="details">
        <h1>{props.name}</h1>
        <p>
          Population: <span>{population.toString()}</span>
        </p>
        <p>
          Region: <span>{props.region}</span>
        </p>
        <p>
          Capital: <span>{props.capital}</span>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
