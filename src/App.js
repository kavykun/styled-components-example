import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Styled Components
import { AppContainer } from "./theme/index";
import Header from "./components/Header";
import BasicButton from "./components/BasicButton";

// Global CSS
// import globalStyles from "./theme/globalStyle";

// Styled Compoonents
import { Section } from "./theme";

class App extends Component {
  render() {
    return (
      <AppContainer>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Header />
        <Section>
          <BasicButton primary>My Button</BasicButton>
          <BasicButton>My Button</BasicButton>
        </Section>
      </AppContainer>
    );
  }
}

export default App;
