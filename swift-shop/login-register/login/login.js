"use client"
import { Form, Input, Button, Divider, Row, Col } from 'antd';
import Link from 'next/link';


const Login = () => {
  const onFinish = (values) => {
    console.log('Form values: ', values);
   
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>
      <Form
        name="login"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        layout="vertical"
      >
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
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>

      <Divider />

      <Row justify="center">
        <Col>
          <p>
            Don't have an account?{' '}
            <Link href={"/signup"} className='text-blue-400' >Register now</Link>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
