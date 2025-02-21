"use client";
import { Select, Table, Tag } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const { Option } = Select;

const ManageOrder = ({ orderData }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(orderData);
  }, [orderData]);

  const handleStatusChange = async (value, record) => {
    console.log(`Order ${record.oderId} status changed to: ${value}`);
    const statusValue = { oderId: record.oderId, order_status: value };
    const response = await axios.patch(
      "https://swift-shop-backend.vercel.app/api/v1/products/order-status",
      statusValue
    );
    if (response.data.success) {
      toast.success(response.data.success);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.oderId === record.oderId
            ? { ...order, order_status: value }
            : order
        )
      );
    }
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "oderId",
      key: "oderId",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Total",
      dataIndex: "grandTotal",
      key: "grandTotal",
    },
    {
      title: "Status",
      dataIndex: "order_status",
      key: "order_status",
      render: (text) => {
        let color;
        switch (text) {
          case "proccessing":
            color = "orange";
            break;
          case "Confirm":
            color = "blue";
            break;
          case "Shipped":
            color = "purple";
            break;
          case "Complete":
            color = "green";
            break;
          default:
            color = "gray";
        }
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Action",
      key: "order_status",
      render: (_, record) => (
        <Select
          defaultValue={record.order_status}
          style={{ width: 120 }}
          onChange={(value) => handleStatusChange(value, record)}
        >
          <Option value="Proccessing">Proccessing</Option>
          <Option value="Confirm">Confirm</Option>
          <Option value="Shipped">Shipped</Option>
          <Option value="Complete">Complete</Option>
        </Select>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Manage Orders</h2>
      <Table
        columns={columns}
        dataSource={orders}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ManageOrder;
