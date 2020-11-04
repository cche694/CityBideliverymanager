import React, { Component } from "react";
import { Card, Button, Menu } from "antd";
import {
  SearchOutlined,
  PlusSquareOutlined,
  DeleteOutlined,
  EditOutlined,
  DownloadOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
class ButtonUI extends Component {
  //loding button
  state = {
    loadings: [],
  };

  enterLoading = (index) => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };
  //groupbutton
  handleMenuClick = (e) => {
    console.log("click", e);
  };

  render() {
    const { loadings } = this.state;
    return (
      <div>
        <Card title="BaseButton">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="primary" danger>
            Primary
          </Button>
          <Button type="dashed">Dashed Button</Button>
          <Button disabled>Default(disabled)</Button>
        </Card>
        <Card title="PicButton">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button type="primary" icon={<DownloadOutlined />}>
            下载
          </Button>
          <Button type="primary" icon={<PlusSquareOutlined />}>
            新增
          </Button>
          <Button type="primary" icon={<DeleteOutlined />}>
            删除
          </Button>
          <Button type="primary" icon={<EditOutlined />}>
            编辑
          </Button>
        </Card>
        <Card title="loadingButton">
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />

          <Button
            type="primary"
            loading={loadings[0]}
            onClick={() => this.enterLoading(0)}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => this.enterLoading(1)}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => this.enterLoading(2)}
          />
        </Card>
        
      </div>
    );
  }
}

export default ButtonUI;
