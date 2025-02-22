"use client"
import { Table, Button, Modal } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from '../customHook/useAuth';
import { useSelector } from 'react-redux';

const CustomerDashboard = () => {
    useAuth()
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
    const user =useSelector(state=>state.user.value)
    const {_id}= user
    console.log(user)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("https://swift-shop-backend.vercel.app/api/v1/orders");
        setOrders(response.data.orders);
        setLoading(false);
      } catch (error) {
        toast.error("Failed to load orders");
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Order ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Total",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount) => `$${amount.toFixed(2)}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span className={status === "Delivered" ? "text-green-500" : "text-orange-500"}>
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => handleViewDetails(record)}>View Details</Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Customer Dashboard</h2>
      <Table columns={columns} dataSource={orders} loading={loading} pagination={{ pageSize: 5 }} />
      <Modal
        title="Order Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        {selectedOrder && (
          <div>
            <p><strong>Order ID:</strong> {selectedOrder._id}</p>
            <p><strong>Total Amount:</strong> ${selectedOrder.totalAmount.toFixed(2)}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <h3>Items:</h3>
            <ul>
              {selectedOrder.items.map((item, index) => (
                <li key={index}>{item.name} - ${item.price} x {item.quantity}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CustomerDashboard;
