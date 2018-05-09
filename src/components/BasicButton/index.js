import React, { Component } from "react";
import PropTypes from "prop-types";

// Styled Components
import { Button } from "./styles";

class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button {...this.props}>{this.props.children}</Button>;
  }
}

index.propTypes = {};

export default index;
