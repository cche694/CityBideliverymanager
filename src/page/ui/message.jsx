import React, { Component } from "react";
import { message, Button, Card } from "antd";
class MesaageUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  info = (type, duration) => {
    message[type]("This is a normal message", duration);
  };
  render() {
    return (
      <Card title="Message">
        {" "}
        <Button type="primary" onClick={() => this.info("success", 5)}>
          Display normal message
        </Button>
        <Button type="primary" onClick={() => this.info("error", 5)}>
          error
        </Button>
        <Button type="primary" onClick={() => this.info("warning", 5)}>
          warning
        </Button>
        <Button type="primary" onClick={() => this.info("loading", 5)}>
          loading
        </Button>
      </Card>
    );
  }
}

export default MesaageUI;
