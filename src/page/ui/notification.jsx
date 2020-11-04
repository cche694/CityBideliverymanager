import React, { Component } from "react";
import { Button, notification, Card } from "antd";
import "./ui.less";
const openNotification = (type, placement = "topRight") => {
  notification[type]({
    message: `notification mesaage${placement}`,
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    placement,
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};
class NotificationUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card title="notification">
          <Button type="primary" onClick={() => openNotification("open")}>
            Open the notification box
          </Button>
          <Button type="primary" onClick={() => openNotification("warning")}>
            warning
          </Button>
        </Card>
        <Card title="position notification">
          <Button
            type="primary"
            onClick={() => openNotification("warning", "topLeft")}
          >
            topleft
          </Button>
        </Card>
      </div>
    );
  }
}

export default NotificationUI;
