import React, { Component } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import menuList from "../../config/menuConfig";
import { connect } from "react-redux";
import { ActionCreator } from "./store";
import Style from "./style.module.scss";

const { SubMenu } = Menu;
class NavLeft extends Component {
  componentDidMount() {
    this.props.getList(menuList);
  }
  renderMenu = (list) => {
    // console.log(list);
    return list.map((item) => {
      // console.log(item.children);
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      } else {
        return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
      }
    });
  };
  render() {
    const { navList } = this.props;

    return (
      <div>
        <div className={`${Style.logo}`}>
          <img src="/assets/logo-ant.svg" alt="logo" className={`${Style.logoImg}`} />
          <h1 className={`${Style.logoHeader}`}>CityMs</h1>
        </div>
        <Menu
          style={{ width: "100% ", height: "100vh" }}
          mode="vertical"
          theme="dark"
          className={`${Style.Menu}`}
        >
          {this.renderMenu(navList)}
        </Menu>
      </div>
    );
  }
}

const mapToState = (state) => {
  return {
    navList: state.getIn(["navleft", "navList"]).toJS(),
  };
};
const mapToDispatch = (dispatch) => {
  return {
    getList(menulist) {
      const action = ActionCreator.getListAction(menulist);
      dispatch(action);
    },
  };
};
export default connect(mapToState, mapToDispatch)(NavLeft);
