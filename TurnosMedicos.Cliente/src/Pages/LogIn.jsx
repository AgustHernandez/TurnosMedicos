import React, { useState, useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Content } from 'antd/es/layout/layout';
import axios from 'axios';


function LogIn () {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsernameInputChange = (e) => {
        setUsername(e.target.value);
      };

      const handlePasswordInputChange = (e) => {
        setPassword(e.target.value);
      };

 const handleSubmit = async (e) => {
    try {
       let credentials = {"username": username, "password":password};
      const response = await axios.post('http://localhost:8080/api/auth/login', {"username": username, "password":password});

      localStorage.setItem('jwtToken', response.data.token);
      navigate("/")
    } catch (error) {
      console.error('Error de autenticación:', error.message);
      // Manejar errores de autenticación según tus necesidades
    }
  };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    
    return (
        <Content style={{ padding: '170px 48px' }}>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={handleSubmit}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                    >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={handleUsernameInputChange} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                    >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordInputChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Recordarme</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="">
                    Olvidé la contraseña
                    </a>
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button"> 
                    Log in
                    </Button>
                    <a href="/registro">Registrarme</a>
                </Form.Item>
            </Form>
        </Content>
    );
};
export default LogIn;