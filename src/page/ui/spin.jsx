import React, { Component } from "react";
import { Card, Spin, Alert } from "antd";
import "./ui.less";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
class SpinUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <Card title="spin">
          <Spin size="small" style={{ marginLeft: "20px" }} />
          <Spin style={{ marginLeft: "20px" }} />
          <Spin size="large" style={{ marginLeft: "20px" }} />
          <Spin indicator={antIcon} style={{ marginLeft: "20px" }} />
        </Card>
        <Card title="加载遮罩">
          <Spin spinning={!this.state.loading} tip="loading...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}

export default SpinUI;
