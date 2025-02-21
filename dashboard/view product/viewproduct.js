"use client";
import { Button, Form, Input, Modal, Space, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../utility/spinner";

const Viewproduct = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterCat, setFilterCat] = useState([]);
  const [isActive, setIsActive] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [catData, setCatData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const [editCat, setEditCat] = useState("");
  const [editId, setEditId] = useState(null);
  const [editname, setEditName] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://swift-shop-backend.vercel.app/api/v1/products/get-product",
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

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
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Spinner />
      </div>
    );
  }

  const uniqueFiterData = filterCat?.filter(
    (item, index, self) =>
      index === self.findIndex((obj) => obj.text === item.text)
  );

  const handleDelete = async (productId) => {
    console.log(productId);
    const response = await axios.delete(
      `https://swift-shop-backend.vercel.app/api/v1/products/delete-product?productId=${productId}`,
      { data: { productId } }
    );
    if (response.data.success) {
      toast.success(response.data.success);
      const remainingData = catData?.filter((item) => item.key !== productId);
      setCatData(remainingData);
    }
  };

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
    setEditName(name);
    setEditId(id);
    showModal();
  };

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
    <div className="min-h-[calc(100vh-116px)]">
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
