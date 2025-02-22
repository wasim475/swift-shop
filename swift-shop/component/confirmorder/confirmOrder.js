'use client'

import { Card } from "antd";
import { Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from 'next/link';
import useAuth from '../../customHook/useAuth';

const ConfirmOrder = () => {
  useAuth()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-md w-full text-center p-6 shadow-lg rounded-2xl bg-white">
        <CheckCircleOutlined style={{ fontSize: 50, color: "#52c41a" }} />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Thank You for Your Order!</h2>
        <p className="text-gray-600 mt-2">Your order has been successfully placed with Cash on Delivery.</p>
        <Button type="primary" className="mt-6 w-full" >
            <Link href={"/products"}>Continue Shopping</Link>
        </Button>
      </Card>
    </div>
  );
};

export default ConfirmOrder;