import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "./components/header";
import NavLeft from "./components/navleft";
import Footer from "./components/footer";
import Home from "./page/home";
import "./style/common.scss";

class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span="3" className="navLeft">
          <NavLeft />
        </Col>
        <Col span="21" className="main">
          <Header />
          <Row className="content">
            <Col span="24">{this.props.children}</Col>
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}

export default Admin;
