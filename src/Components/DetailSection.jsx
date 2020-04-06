import React from "react";
import { Link } from "react-router-dom";

export default function DetailSection(props) {
  //destructuring props
  const {
    name,
    flag,
    population,
    region,
    subRegion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    nativeName,
    darkMode,
    countries,
  } = props;

  return (
    <section className="details-section">
      <a
        href="/"
        className={darkMode ? "box-shadow-dark" : "box-shadow"}
        style={{
          backgroundColor: darkMode && "hsl(209, 23%, 22%)",
          color: darkMode && "#fff",
        }}
      >
        {" "}
        <i className="fas fa-arrow-left"></i> Back{" "}
      </a>
      <div className="country-details">
        <img src={flag} alt="" />
        <div className="info" style={{ color: darkMode && "#fff" }}>
          <div>
            <div className="left">
              <h1>{name}</h1>
              <p>
                Native Name: <span>{nativeName}</span>
              </p>
              <p>
                Population:
                <span>
                  {population
                    .toString()
                    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)
                    .toString()}
                </span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                Sub Region: <span>{subRegion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </div>

            <div className="right">
              <p>
                Top Level Domain: <span>{topLevelDomain}</span>
              </p>
              <p>
                Currencies:
                {currencies.map((c, index) => (
                  <span key={index}>{c.code}</span>
                ))}
              </p>
              <p>
                Languages:
                {languages.map((l, index) => (
                  <span key={index}>{l.name}</span>
                ))}
              </p>
            </div>

            <div className="borders">
              <p>
                Border Countries:
                {borders.map((border, index) => {
                  return (
                    <Link
                      to={"/details/" + border}
                      className={
                        darkMode
                          ? "border-card box-shadow-dark"
                          : "border-card box-shadow"
                      }
                      key={index}
                      style={{
                        backgroundColor: darkMode && "hsl(209, 23%, 22%)",
                        color: darkMode && "#fff",
                      }}
                    >
                      {border}
                    </Link>
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
