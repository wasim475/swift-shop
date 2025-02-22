"use client"

import { Suspense } from "react";
import { Form, Input, Button, Divider, Row, Col } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || "/";

  const onFinish = async (values) => {
    try {
      const { email, password } = values;
      const loginData = { inputEmail: email, inputPassword: password };

      const response = await axios.post(
        "https://swift-shop-backend.vercel.app/api/v1/auth/login",
        loginData
      );

      if (response?.data?.user) {
        const userData = {
          ...response.data.user,
          token: response.data.token,
        };

        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(userData));
        }

        toast.success("Login Successful!");
        router.push(redirectTo);
      } else {
        toast.error(response.data.error || "Login failed! Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Something went wrong! Please check your credentials.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>
      <Form name="login" onFinish={onFinish} initialValues={{ remember: true }} layout="vertical">
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
            Don't have an account? <Link href={"/signup"} className='text-blue-400'>Register now</Link>
          </p>
        </Col>
      </Row>
    </div>
  );
};

const Login = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <LoginForm />
  </Suspense>
);

export default Login;
