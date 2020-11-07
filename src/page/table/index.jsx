import React, { Component } from "react";
import { connect } from "react-redux";
import { ActionType, ActionCreator } from "./store";
import { Card, Table } from "antd";

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "用户名",
    dataIndex: "username",
  },
  {
    title: "性别",
    dataIndex: "sex",
  },
  {
    title: "状态",
    dataIndex: "state",
  },
  {
    title: "爱好",
    dataIndex: "interest",
  },
  {
    title: "住址",
    dataIndex: "address",
  },
  {
    title: "早起时间",
    dataIndex: "time",
  },
  {
    title: "婚姻",
    dataIndex: "isMarried",
  },
  {
    title: "生日",
    dataIndex: "birthday",
  },
];
class TableBasic extends Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    const { list, page, page_size, total_count } = this.props;
    list.map((item,index)=>{
     item.key=index
    })
    return (
      <Card title="动态表格">
        <Table columns={columns} dataSource={list} />;
      </Card>
    );
  }
}
const mapToState = (state) => {
  return {
    list: state.getIn(["table", "list"]),
    page: state.getIn(["table", "page"]),
    page_size: state.getIn(["table", "page_size"]),
    total_count: state.getIn(["table", "total_count"]),
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

export default connect(mapToState, mapToDispatch)(TableBasic);
