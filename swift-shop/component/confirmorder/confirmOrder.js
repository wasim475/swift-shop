'use client'

import { Card } from "antd";
import { Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from 'next/link';

const ConfirmOrder = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-md w-full text-center p-6 shadow-lg rounded-2xl bg-white">
        <CheckCircleOutlined style={{ fontSize: 50, color: "#52c41a" }} />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Thank You for Your Order!</h2>
        <p className="text-gray-600 mt-2">Your order has been successfully placed with Cash on Delivery.</p>
        <div className="bg-gray-100 p-4 mt-4 rounded-lg">
          <p className="text-sm text-gray-700"><strong>Order ID:</strong> #123456</p>
          <p className="text-sm text-gray-700"><strong>Estimated Delivery:</strong> 3-5 Business Days</p>
        </div>
        <Button type="primary" className="mt-6 w-full" >
            <Link href={"/products"}>Continue Shopping</Link>
        </Button>
      </Card>
    </div>
  );
};

export default ConfirmOrder;