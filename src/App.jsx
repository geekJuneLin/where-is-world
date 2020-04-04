import React, { Component } from "react";
import Header from "./Components/Header";
import ResultSection from "./Components/ResultSection";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    var xmlReq = new XMLHttpRequest();

    xmlReq.addEventListener("load", () => {
      // update the state of the component with the result here
      this.setState({
        countries: JSON.parse(xmlReq.responseText),
      });

      console.log(this.state.countries);
    });
    // open the request with the verb and the url
    xmlReq.open("GET", "https://restcountries.eu/rest/v2/all");
    // send the request
    xmlReq.send();
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <ResultSection countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
