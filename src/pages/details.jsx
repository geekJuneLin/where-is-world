import React from "react";
import Header from "../Components/Header";
import DetailSection from "../Components/DetailSection";

export default function Details({ match, countries }) {
  console.log(match);
  const {
    params: { countryId },
  } = match;
  return (
    <div>
      <Header />
      {countries.map((country) => {
        if (country.name === countryId) {
          const {
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
            flag,
          } = country;

          return (
            <DetailSection
              countries={countries}
              flag={flag}
              name={name}
              nativeName={nativeName}
              population={population}
              region={region}
              subRegion={subregion}
              capital={capital}
              topLevelDomain={topLevelDomain}
              currencies={currencies}
              languages={languages}
              borders={borders}
            />
          );
        }
      })}
    </div>
  );
}
