"use client"
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import Link from 'next/link';

const Register = () => {
  const onFinish = (values) => {
    console.log('Form values: ', values);
   
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
      <h2>Register</h2>
      <Form
        name="register"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: 'Please input your phone number!' },
            { pattern: /^[0-9]{10}$/, message: 'Please enter a valid phone number!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
        </Form.Item>
      </Form>
          <Divider/>
      <Row justify="center">
        <Col>
          <p>
            Already have an account?{' '}
            <Link href={"/login"} className='text-blue-400'>Sign in</Link>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
