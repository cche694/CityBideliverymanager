import React, { Component } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "./store";
import { Row, Col } from "antd";
import Style from "./style.module.scss";
import Util from "../../util/utils.js";
import axios from "axios";

class Header extends Component {
  componentDidMount() {
    // apikey eb629ff4809d7e6274b2d94c0bcfdee8
    this.props.setName("changche");
    setInterval(() => {
      let sysTime = Util.fromateDate(new Date().getTime());

      this.props.setTime(sysTime);
    }, 1000);
    this.props.getWeather();
    setInterval(() => {
      this.props.getWeather();
    }, 21600000);
  }

  render() {
    const { userName, time, province, weather, temperature } = this.props;
    return (
      <div className={`${Style.header}`}>
        <Row>
          <Col span="24" className={`${Style.headerTop}`}>
            <span>welcome,{userName}</span>
            <a href="">退出</a>
          </Col>
        </Row>
        <Row className={`${Style.breadcrumb}`}>
          <Col span="4" className={`${Style.title}`}>
            首页
          </Col>
          <Col span="20" className={`${Style.weather}`}>
            <span className={`${Style.data}`}>{time}</span>
            <span className={`${Style.weatherDeatail}`}>
              {province}市 a{weather}天 {temperature}&deg;
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapToState = (state) => {
  return {
    userName: state.getIn(["header", "username"]),
    time: state.getIn(["header", "time"]),
    province: state.getIn(["header", "province"]),
    weather: state.getIn(["header", "weather"]),
    temperature: state.getIn(["header", "temperature"]),
  };
};
const mapToDispatch = (dispatch) => {
  return {
    setName(name) {
      const action = ActionCreator.SetNameAction(name);
      dispatch(action);
    },
    setTime(time) {
      const action = ActionCreator.SetTimeAction(time);
      dispatch(action);
    },
    getWeather() {
      const action = ActionCreator.GetWeatherAction();
      dispatch(action);
    },
  };
};

export default connect(mapToState, mapToDispatch)(Header);
