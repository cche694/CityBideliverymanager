import React, { Component } from "react";
import Style from "./style.module.scss";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`${Style.footer}`}>
        版权所有cche_(推荐使用chrome浏览器,可以获得更佳体验效果) 技术支持：cche_
      </div>
    );
  }
}

export default Footer;
