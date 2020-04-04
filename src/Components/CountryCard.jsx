import React from "react";

function CountryCard(props) {
  return (
    <div className="country-card box-shadow">
      <a href="/details/<%=country.name%>">
        <img src={props.flag} alt="germany-flag" />
        <div className="details">
          <h1>{props.name}</h1>
          <p>
            Population:{" "}
            <span>
              {props.population.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)}
            </span>
          </p>
          <p>
            Region: <span>{props.region}</span>
          </p>
          <p>
            Capital: <span>{props.capital}</span>
          </p>
        </div>
      </a>
    </div>
  );
}

export default CountryCard;
