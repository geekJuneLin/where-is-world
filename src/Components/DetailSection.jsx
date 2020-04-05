import React from "react";

export default function DetailSection(props) {
  return (
    <section className="details-section">
      <a href="/" className="box-shadow">
        {" "}
        <i className="fas fa-arrow-left"></i> Back{" "}
      </a>
      <div className="country-details">
        <img src={props.flag} alt="" />
        <div className="info">
          <div>
            <div className="left">
              <h1>{props.name}</h1>
              <p>
                Native Name: <span>{props.nativeName}</span>
              </p>
              <p>
                Population:
                <span>
                  {props.population
                    .toString()
                    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)
                    .toString()}
                </span>
              </p>
              <p>
                Region: <span>{props.region}</span>
              </p>
              <p>
                Sub Region: <span>{props.subRegion}</span>
              </p>
              <p>
                Capital: <span>{props.capital}</span>
              </p>
            </div>

            <div className="right">
              <p>
                Top Level Domain: <span>{props.topLevelDomain}</span>
              </p>
              <p>
                Currencies:
                {props.currencies.map((c, index) => (
                  <span key={index}>{c.code}</span>
                ))}
              </p>
              <p>
                Languages:
                {props.languages.map((l, index) => (
                  <span key={index}>{l.name}</span>
                ))}
              </p>
            </div>

            <div className="borders">
              <p>
                Border Countries:
                {props.borders.map((border, index) => {
                  return (
                    <span className="border-card box-shadow" key={index}>
                      {border}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
