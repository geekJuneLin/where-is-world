import React from "react";
import CountryCard from "./CountryCard";

function ResultSection(props) {
  return (
    <section className="countries-section">
      <div className="row">
        {props.countries.map((c, index) => (
          <CountryCard
            key={index}
            name={c.name}
            flag={c.flag}
            population={c.population}
            region={c.region}
            capital={c.capital}
          />
        ))}
      </div>
    </section>
  );
}

export default ResultSection;
