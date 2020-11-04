import React, { Component } from "react";
import Style from "./style.module.scss";
import { Result, Button } from "antd";
class NoMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Result
        style={{ background: "#fff" }}
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  }
}

export default NoMatch;
