"use client";
import { Button, Input, Modal, Space, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ViewCategory = ({ categoryData }) => {
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});

  useEffect(() => {
    setCategories(categoryData);
  }, [categoryData]);

  const handleEdit = (record) => {
    setCurrentCategory(record);
    setIsModalVisible(true);
  };

  const handleDelete = async (record) => {
    try {
      const response = await axios.delete(
        `https://swift-shop-backend.vercel.app/api/v1/products/category/${record._id}`
      );
      if (response.data.success) {
        toast.success(response.data.success);
        setCategories((prev) => prev.filter((cat) => cat._id !== record._id));
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const handleModalOk = async () => {
    try {
      const response = await axios.patch(
        `https://swift-shop-backend.vercel.app/api/v1/products/edit-category/${currentCategory._id}`,
        currentCategory
      );
      if (response.data.success) {
        toast.success(response.data.success);
        setCategories((prev) =>
          prev.map((cat) =>
            cat._id === currentCategory._id
              ? { ...cat, name: currentCategory.name }
              : cat
          )
        );
        setIsModalVisible(false);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleCategoryNameChange = (e) => {
    setCurrentCategory((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const columns = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>View Categories</h2>
      <Table
        columns={columns}
        dataSource={categories}
        pagination={{ pageSize: 5 }}
        rowKey="_id"
      />

      {/* Modal for editing category */}
      <Modal
        title="Edit Category"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Input
          value={currentCategory.name || ""}
          onChange={handleCategoryNameChange}
          placeholder="Enter category name"
        />
      </Modal>
    </div>
  );
};

export default ViewCategory;
