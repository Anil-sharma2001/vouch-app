import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./App.css";
import "antd/dist/antd.css";
import Work from "./working.jpg";
import axios from "axios";
import { useWindowSize } from "../utils/useWindowSize";

export const NormalLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const { width, height } = useWindowSize();

  console.log("widthh", width);
  console.log("height", height);
  const logIN = () => {
    axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  console.log(data);
  return (
    <div className="container">
      <div className="form">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={logIN}
        >
          <h2 className="para">Welcome Back</h2>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "#2f4f4f", borderColor: "#2f4f4f" }}
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
        { width > 614 && <div className="images">
        <img className="work" src={Work}></img>
      </div> 
}
    </div>
  );
};
