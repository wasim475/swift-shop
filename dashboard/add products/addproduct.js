"use client";
import { Button, Checkbox, Form, Input } from "antd";

const Addproduct = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 800,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          className='text-lg font-medium'
          name="username"
          rules={[
            {
              required: true,
              message: "Write Product Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

       

       

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Addproduct
