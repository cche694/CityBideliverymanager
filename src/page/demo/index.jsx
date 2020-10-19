import React, { Component } from "react";
import { Button } from "antd";
import Style from "./style.module.scss";
import { connect } from "react-redux";
import { ActionCreator } from "./store";
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Button>testantd</Button>
        <input
          type="text"
          onChange={(e) => this.props.handleChange(e)}
          value={this.props.value}
        />
      </div>
    );
  }
}
const mapToState = (state) => {
  return {
    value: state.getIn(["demo", "value"]),
  };
};
const mapToDispatch = (dispatch) => {
  return {
    handleChange(e) {
      console.log(e.target.value);
      const value = e.target.value;
      const action = ActionCreator.DemoAction(value);
      dispatch(action);
    },
  };
};

export default connect(mapToState, mapToDispatch)(Demo);
