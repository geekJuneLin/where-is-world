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

  return (
    <div>
      <Header switchMode={onSwitchBtnClicked} darkMode={darkMode} />
      <SearchBar darkMode={darkMode} onUpdate={updateSearchedCountries} />
      <ResultSection countries={searchedCountries} darkMode={darkMode} />
    </div>
  );
}
