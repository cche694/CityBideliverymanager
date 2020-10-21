import React, { Component } from "react";
import Style from "./style.module.scss";

class NoMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`${Style.noMatchWrapper}`}>
        <div>404 Not Found</div>
      </div>
    );
  }
}

export default NoMatch;
