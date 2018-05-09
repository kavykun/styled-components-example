import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "../../logo.svg";

// Styled Comoponents
import { Header, Logo, Title } from "./styles";

class index extends Component {
  render() {
    return (
      <Header>
        <Logo src={logo} alt="logo" />
        <Title />
      </Header>
    );
  }
}

index.propTypes = {};

export default index;
