import React from "react";
import Header from "../Components/Header";
import DetailSection from "../Components/DetailSection";

export default function Details({
  match,
  countries,
  onSwitchBtnClicked,
  darkMode,
}) {
  // destructuring props
  const {
    params: { countryId },
  } = match;

  return (
    <div>
      <Header switchMode={onSwitchBtnClicked} darkMode={darkMode} />
      {countries.map((country, index) => {
        const {
          name,
          alpha2Code,
          alpha3Code,
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
        if (name === countryId) {
          return (
            <DetailSection
              key={index}
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
              darkMode={darkMode}
            />
          );
        }
        if (alpha3Code === countryId || alpha2Code === countryId) {
          return (
            <DetailSection
              key={index}
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
              darkMode={darkMode}
            />
          );
        }
      })}
    </div>
  );
}
