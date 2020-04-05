import React from "react";

function CountryCard(props) {
  const population = props.population
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);

  return (
    <div className="country-card box-shadow">
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
