import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";

import "./app.css";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

export default class App extends Component {
  state = {
    selectedPerson: null,
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div>
        <Header />
        <RandomPlanet />

        <PeoplePage />
      </div>
    );
  }
}
