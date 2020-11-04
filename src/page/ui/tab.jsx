import React, { Component } from "react";
import { message, Card, Tabs } from "antd";
const { TabPane } = Tabs;
class TabUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handlecallback = (key) => {
    message["info"](`This is a normal message ${key}`);
  };
  render() {
    return (
      <div>
        <Card>
          <Tabs
            defaultActiveKey="1"
            onChange={(activeKey) => this.handlecallback(activeKey)}
          >
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default TabUI;
