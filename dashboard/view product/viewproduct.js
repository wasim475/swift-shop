"use client";
import { Table, Space, Modal, Input, Form, Button } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Viewproduct = ({ data }) => {

  const [filterCat, setFilterCat] = useState([]);
  const [isActive, setIsActive] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [catData, setCatData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const catagory = data?.map((item) => ({
      name: item.name,
      price: item.price,
      cat: item.category.name,
      key: item._id,
    }));

    setCatData(catagory);
    // console.log(catagory)
  }, [data]);

  useEffect(() => {
    const cateNames = data?.map((cat) => ({
      text: cat.name,
      value: cat.name,
    }));
    setFilterCat(cateNames);
  }, [data]);

  // console.log(catData)

  const uniqueFiterData = filterCat.filter(
    (item, index, self) =>
      index === self.findIndex((obj) => obj.text === item.text)
  );

  const handleDelete = async (categoryId) => {
    const response = await axios.post(
      "http://localhost:1559/api/v1/products/deleteCategory",
      { categoryId }
    );
    if (response.data.success) {
      setMsg(response.data.success);
      const remainingData = catData?.filter((item) => item.key !== categoryId);
      setCatData(remainingData);

      setTimeout(() => {
        setMsg("");
      }, 1000);
    }
  };

  const [editCat, setEditCat] = useState("");
  const [editId, setEditId] = useState(null);
  const [editname , setEditName]= useState(null)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onEditFinish = async (values) => {
    const EditcategoryData = {
      name: values.name,
      categoryId: editId,
    };

    const response = await axios.post(
      "http://localhost:1559/api/v1/products/editcategory",
      EditcategoryData
    );
    if (response?.data?.success) {
      toast.success(response.data.success);
      catDispatch(categoryData());
      setIsModalOpen(false);
    }
  };

  const handleEdit = (id, name) => {
    setEditCat(editCat);
    setEditName(name)
    setEditId(id);
    showModal();
  };
  const handleAprove = async (id) => {
    const response = await axios.post(
      "http://localhost:1559/api/v1/products/categoryaprove",
      { catId: id }
    );
    // console.log(response.data.success)
    if (response.data.success) {
      toast.success(response.data.success);
      catDispatch(categoryData());
    }
  };

  const handleHold = async (id) => {
    const response = await axios.post(
      "http://localhost:1559/api/v1/products/categoryhole",
      { catId: id }
    );
    // console.log(response.data.success)
    if (response.data.success) {
      toast.success(response.data.success);
      catDispatch(categoryData());
    }
  };

  // console.log("isActive",isActive)

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      filters: uniqueFiterData,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: "30%",
    },
    {
      title: "Category",
      dataIndex: "cat",
      filters: uniqueFiterData,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.cat.includes(value),
      width: "30%",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => handleEdit(record.key, record.name)}>
            Edit
          </button>

          <button onClick={() => handleDelete(record.key)}>Delete</button>
        </Space>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };


  return (
    <div>
      <h1 className="text-xl font-semibold flex justify-center mb-5">
        Products
      </h1>
      <p className="text-green-400">{msg}</p>
      <Table columns={columns} dataSource={catData} onChange={onChange} />

      <Modal
        title="Edit Category"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onEditFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Category Name"
            name="name"
            initialValue={editname}
            rules={[
              {
                required: true,
                message: "Please input your category Name.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label={null}>
            

            <Button type="default" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Viewproduct;
