import React from "react";
import Header from "../Components/Header";
import ResultSection from "../Components/ResultSection";
import SearchBar from "../Components/SearchBar";

export default function Home({ countries, onSwitchBtnClicked, darkMode }) {
  // state
  const [searchedCountries, setSearchedCountries] = React.useState([]);

  // update the searched countries
  function updateSearchedCountries(value) {
    console.log("updating..." + value);
    const newSearchedCountries = countries.filter((c) => {
      return c.name.toLowerCase().includes(value);
    });
    setSearchedCountries(newSearchedCountries);
  }

  // update the filtered countries
  const filteredCountries = (name) => {
    console.log("filtered countries by: " + name);
    const newFilteredCountries = countries.filter((c) => {
      return c.region.includes(name);
    });
    console.log(newFilteredCountries);
    setSearchedCountries(newFilteredCountries);
  };

  return (
    <div>
      <Header switchMode={onSwitchBtnClicked} darkMode={darkMode} />
      <SearchBar
        darkMode={darkMode}
        onUpdate={updateSearchedCountries}
        onFiltered={filteredCountries}
      />
      <ResultSection
        countries={searchedCountries.length > 0 ? searchedCountries : countries}
        darkMode={darkMode}
      />
    </div>
  );
}
