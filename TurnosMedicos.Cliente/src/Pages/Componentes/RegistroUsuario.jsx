import React, { useState } from 'react';
import {AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select,} from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;
const { Option } = Select;

function RegistroUsuario () {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', values);
    
            if (response.status === 201) {
            console.log('Usuario registrado exitosamente:', response.data);
            } else {
            console.error('Error al registrar usuario:', response.data);
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return (
        <Content style={{ padding: '100px 48px', justifyContent: "center" }}>
            
            <Title level={2}>Creación usuario</Title>
            <Form
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
            scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                    {
                        type: 'email',
                        message: 'El e-mail ingresado no es válido!',
                    },
                    {
                        required: true,
                        message: 'Ingresa tu E-mail!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                    ]}
                >
                    <Checkbox>
                    He leido los términos y condiciones
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Registrarme
                    </Button>
                </Form.Item>
            </Form>
        </Content>
    );
};
export default RegistroUsuario