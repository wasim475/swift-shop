"use client";
import { Button, Modal, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ViewCustomer = ({ customerData }) => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setCustomers(customerData);
  }, [customerData]);

  const handleDisable = async (record) => {
    try {
      const response = await axios.patch(
        "https://swift-shop-backend.vercel.app/api/v1/customers/disable",
        { id: record.id }
      );
      if (response.data.success) {
        toast.success(response.data.success);
        setCustomers((prev) =>
          prev.map((customer) =>
            customer._id === record._id
              ? { ...customer, status: "Disabled" }
              : customer
          )
        );
      }
    } catch (error) {
      toast.error("Failed to disable account");
    }
  };

  const showDetails = (record) => {
    setSelectedCustomer(record);
    setModalVisible(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => (
        <span style={{ color: text === "customer" ? "green" : "red" }}>
          {text}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button type="primary" onClick={() => showDetails(record)}>
            View Details
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>View Customers</h2>
      <Table
        columns={columns}
        dataSource={customers}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title="Customer Details"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        {selectedCustomer && (
          <div>
            <p>
              <b>Name:</b> {selectedCustomer.name}
            </p>
            <p>
              <b>Email:</b> {selectedCustomer.email}
            </p>
            <p>
              <b>Phone:</b> {selectedCustomer.phoneNumber}
            </p>
            <p>
              <b>Address:</b> {selectedCustomer.address || "Not Provided"}
            </p>
            <p>
              <b>Status:</b> {selectedCustomer.role}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ViewCustomer;
