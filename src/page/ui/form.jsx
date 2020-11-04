import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
class FormUI extends Component {
  formRef = React.createRef();
  state = {
    value: 11,
  };

  onFinish = (values) => {
    message.success(values);
    console.log(this.formRef.current.getFieldsValue()); // password username remenber
    this.formRef.current.resetFields();
  };

  onFinishFailed = (errorInfo) => {
    message.error(errorInfo);
  };
  handleCheckBox = (e) => {
    console.log(e.target.checked);
  };

  render() {
    return (
      <Card title="LoginForm">
        <Form
          {...layout}
          name="basic"
          ref={this.formRef}
          style={{ width: "300px" }}
          initialValues={{
            remember: true,
          }}
          onFinish={() => this.onFinish("提交成功")}
          onFinishFailed={() => this.onFinishFailed("请完成表单")}
        >
          <Form.Item
            label="Username"
            name="username"
            icon=""
            rules={[
              {
                pattern: /^[a-zA-Z0-9_-]{4,16}$/,
                message: "4到16位（字母，数字，下划线，减号",
              },
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                pattern: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
                message:
                  "最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符",
              },
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox onChange={this.handleCheckBox}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button name="submitbtn" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default FormUI;
