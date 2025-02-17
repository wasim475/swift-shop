"use client";
import { Button, Checkbox, Form, Input } from "antd";
import axios from 'axios';
import toast from 'react-hot-toast';


const Addcategory =  () => {
  const onFinish = async (values) => {
    const catinfo ={name: values.name}
    const response = await axios.post("http://localhost:8000/api/v1/products/create-category",catinfo)
    
    if(response.data.success){
      toast.success(response.data.success)
    } else if(response.data.error){
      toast.error(response.data.error)
    } else if(response.data.warn){
      toast.error(response.data.warn)
    }
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
          name="name"
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
