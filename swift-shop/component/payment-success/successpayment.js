"use client";
import { Button } from "antd";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react/cjs/react.production.min";
import useAuth from '../../customHook/useAuth';

const SuccessPayment = ({ session_id, deliveryInfo }) => {
  useAuth()
  const {
    userName,
    email,
    phone,
    paymentMethod,
    grandTotal,
    products,
    state,
    streetAddress,
    zipCode,
    orderNotes,
    country,
  } = deliveryInfo;
  const orderInfo = {
    name: userName,
    email,
    paymentMethod,
    payment_Status: "paid",
    grandTotal,
    country,
    state,
    orderNotes,
  };
  useEffect(() => {
    const postOrderData = async () => {
      const response = await fetch(
        "https://swift-shop-backend.vercel.app/api/v1/products/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderInfo),
        }
      );
    };
    postOrderData();
  }, []);

  //   console.log(response)

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center max-w-lg">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 text-gray-800">
          🎉 Congratulations, <strong>{userName}</strong>!
        </h1>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Your Payment was Successful.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Button type="primary" size="large">
            <Link href="/products">Browse Products</Link>
          </Button>
          <Button type="default" size="large">
            <Link href="/dashboard">See Dashboad</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
