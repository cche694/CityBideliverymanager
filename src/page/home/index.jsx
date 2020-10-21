import React, { Component } from "react";
import Style from "./style.module.scss";
class Home extends Component {
  render() {
    return (
      <div className={`${Style.homeWrapper}`}>
          <div>欢迎来到cche后台管理系统</div>
      </div>
    );
  }
}

export default Home;
