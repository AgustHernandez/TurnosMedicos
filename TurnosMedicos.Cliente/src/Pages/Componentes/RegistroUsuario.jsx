import React, { useState } from 'react';
import {AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select,} from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;
const { Option } = Select;

const residences = [
    {
    value: 'Buenos Aires',
    label: 'Buenos Aires',
    children: [
        {
            value: 'CABA',
            label: 'CABA',
        },
        ],
    },
    {
        value: 'Códoba',
        label: 'Córdoba',
        children: [
        {
            value: 'Rio Cuarto',
            label: 'Rio Cuarto',
        },
        ],
    },
];
const formItemLayout = {
    labelCol: {
        xs: {
        span: 24,
        },
        sm: {
        span: 8,
        },
    },
    wrapperCol: {
        xs: {
        span: 24,
        },
        sm: {
        span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 16,
        offset: 8,
        },
    },
};

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
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                width: 70,
                }}
            >
                <Option value="86">+54</Option>
            </Select>
        </Form.Item>
    );
    return (
        <Content style={{ padding: '100px 48px', justifyContent: "center" }}>
            
            <Title level={2}>Creación usuario</Title>
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: [''],
                prefix: '54',
            }}
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
                    name="username"
                    label="Usuario"
                    tooltip="Nombre de usuario"
                    rules={[
                    {
                        required: true,
                        message: 'Ingresar un usuario',
                        whitespace: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="residencia"
                    label="Residencia"
                    rules={[
                    {
                        type: 'array',
                        required: true,
                        message: 'Seleccionar la residencia actual',
                    },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>

                <Form.Item
                    name="telefono"
                    label="Teléfono"
                    rules={[
                    {
                        required: true,
                        message: 'Ingresar número de teléfono',
                    },
                    ]}
                >
                    <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                    />
                </Form.Item>
                <Form.Item
                    name="genero"
                    label="Género"
                    rules={[
                    {
                        required: true,
                        message: 'Ingresar género',
                    },
                    ]}
                >
                    <Select placeholder="Seleccionar género">
                        <Option value="masculino">Masculino</Option>
                        <Option value="femenino">Femenino</Option>
                        <Option value="otro">Otro</Option>
                    </Select>
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
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                    I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                    Register
                    </Button>
                </Form.Item>
            </Form>
        </Content>
    );
};
export default RegistroUsuario