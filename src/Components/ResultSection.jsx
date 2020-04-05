import React from "react";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

function ResultSection(props) {
  return (
    <section className="countries-section">
      <div className="row">
        {props.countries.map((c, index) => (
          <Link key={index} to={"/details/" + c.name}>
            <CountryCard
              key={index}
              name={c.name}
              flag={c.flag}
              population={c.population}
              region={c.region}
              capital={c.capital}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ResultSection;
