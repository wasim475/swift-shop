"use client";
import { Button, Checkbox, Form, Input } from "antd";


const Addcategory = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
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
          label="Category Name"
          className='text-lg font-medium'
          name="username"
          rules={[
            {
              required: true,
              message: "Write Category Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

       

       

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Add Category
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Addcategory;
