import React, { Component } from "react";
import { connect } from "react-redux";
import { ActionType, ActionCreator } from "./store";
import { Card, Table } from "antd";
class TableUI extends Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    const { list, page, page_size, total_count } = this.props;
    return (
      <Card>
        <Table/> 
      </Card>
    );
  }
}
const mapToState = (state) => {
  return {
    list: state.getIn(["ui", "list"]),
    page: state.getIn(["ui", "page"]),
    page_size: state.getIn(["ui", "page_size"]),
    total_count: state.getIn(["ui", "total_count"]),
  };
};
const mapToDispatch = (dispatch) => {
  return {
    getList() {
      const action = ActionCreator.getList();
      dispatch(action);
    },
  };
};

export default connect(mapToState, mapToDispatch)(TableUI);
