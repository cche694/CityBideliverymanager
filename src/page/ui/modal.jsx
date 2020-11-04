import React, { Component } from "react";
import { Modal, Button, Card } from "antd";
import "./ui.less";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;
class ModalUI extends Component {
  // modal func
  state = {
    showmodal1: false,
    showmodal2: false,
    showmodal3: false,
  };
  showModal = (type) => {
    this.setState({
      [type]: true,
    });
  };

  handleOk = (type) => {
    this.setState({
      [type]: false,
    });
  };

  handleCancel = (type) => {
    this.setState({
      [type]: false,
    });
  };
  //   confirm func
  showConfirm = (type) => {
    Modal[type]({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  render() {
    return (
      <div>
        <Card title="basemodal">
          <Button type="primary" onClick={() => this.showModal("showmodal1")}>
            base modal
          </Button>
          <Modal
            title="modal1"
            visible={this.state.showmodal1}
            onOk={() => this.handleOk("showmodal1")}
            onCancel={() => this.handleCancel("showmodal1")}
          >
            <p>Top 20px</p>
          </Modal>
          <Button type="primary" onClick={() => this.showModal("showmodal2")}>
            top 10px
          </Button>
          <Modal
            title="modal2"
            visible={this.state.showmodal2}
            style={{ top: "10px" }}
            onOk={() => this.handleOk("showmodal2")}
            onCancel={() => this.handleCancel("showmodal2")}
          >
            <p>Top 20px</p>
          </Modal>
          <Button type="primary" onClick={() => this.showModal("showmodal3")}>
            center
          </Button>
          <Modal
            title="modal3"
            wrapClassName="vertical-center-modal"
            visible={this.state.showmodal3}
            style={{ top: "10px" }}
            onOk={() => this.handleOk("showmodal3")}
            onCancel={() => this.handleCancel("showmodal3")}
          >
            <p>center</p>
          </Modal>
         
        </Card>
        <Card title="confirm">
          {" "}
          <Button onClick={() => this.showConfirm("success")}>success</Button>
          <Button onClick={() => this.showConfirm("error")}>error</Button>
          <Button onClick={() => this.showConfirm("warning")}>warning</Button>
          <Button onClick={() => this.showConfirm("confirm")}>Confirm</Button>
          <Button onClick={() => this.showConfirm("info")}>info</Button>
        </Card>
      </div>
    );
  }
}

export default ModalUI;
