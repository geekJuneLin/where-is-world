import React from "react";
import Header from "../Components/Header";
import ResultSection from "../Components/ResultSection";
import SearchBar from "../Components/SearchBar";

export default function Home({ countries, onSwitchBtnClicked, darkMode }) {
  return (
    <div>
      <Header switchMode={onSwitchBtnClicked} darkMode={darkMode} />
      <SearchBar darkMode={darkMode} />
      <ResultSection countries={countries} darkMode={darkMode} />
    </div>
  );
}
