import React, { Component } from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./pages/details";

class App extends Component {
  state = {
    countries: [],
    darkMode: false,
  };

  switchMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
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
    document.body.style.backgroundColor = this.state.darkMode
      ? "hsl(207, 26%, 17%)"
      : "hsl(0, 0%, 98%)";

    return (
      <Router>
        <Switch>
          <Route
            render={(props) => (
              <Home
                countries={this.state.countries}
                onSwitchBtnClicked={this.switchMode}
                darkMode={this.state.darkMode}
                {...props}
              />
            )}
            exact
            path="/"
          ></Route>
          <Route
            render={(props) => (
              <Details countries={this.state.countries} {...props} />
            )}
            exact
            path="/details/:countryId"
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
