"use client";
import { Button, Form, Input, InputNumber, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Addproduct = ({ data }) => {
  const [selectData, setSelectData] = useState(null);
  const onFinish = async (values) => {
    const { name, categoryId, imageLink, description, inStock, price } = values;
    const productInfo = {
      name,
      categoryId,
      imageLink,
      description,
      inStock,
      price,
    };
    const response = await axios.post(
      "https://swift-shop-backend.vercel.app/api/v1/products/create-product",
      productInfo
    );

    console.log("response", response.data);
    if (response.data.success) {
      toast.success(response.data.success);
    } else if (response.data.error) {
      toast.error(response.data.error);
    } else if (response.data.warn) {
      toast.error(response.data.warn);
    }

    // console.log(productInfo)
    // console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Select functionality

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  useEffect(() => {
    const selectCats = data?.map((item) => ({
      value: item._id,
      label: item.name,
    }));
    setSelectData(selectCats);
  }, [data]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[calc(100vh-116px)]">
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
          className="text-lg font-medium"
          name="name"
          rules={[
            {
              required: true,
              message: "Write Product Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="categoryId"
          rules={[
            {
              required: true,
              message: "Please select a category!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select one"
            optionFilterProp="label"
            options={selectData}
          />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true, message: "Enter product price!" },
            {
              type: "number",
              min: 10,
              message: "Price must be at least 10!",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Write Product Description!" }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item
          label="Image Link"
          name="imageLink"
          rules={[{ required: true, message: "Enter image URL!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="In Stock"
          name="inStock"
          rules={[
            { required: true, message: "Enter stock quantity!" },
            { type: "number", min: 1, message: "Stock must be at least 1!" },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Addproduct;
