"use client";
import { Button } from "antd";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { getcardPaymentData } from "../../swift-shop/utility";
import Spinner from '../../utility/spinner';

const Success = ({ searchParams: { session_id } }) => {
  const [userName, setUserName] = useState(null);
  const hasRun = useRef(false); 
  useEffect(() => {
    if (!session_id || hasRun.current) return; 
    hasRun.current = true;
    
    const paymentInfo = getcardPaymentData();

    if (paymentInfo && paymentInfo.deliveryInfo) {
      const { deliveryInfo } = paymentInfo;
      const { userName, email, paymentMethod, grandTotal, country, state, orderNotes } = deliveryInfo;
      
      setUserName(userName);

      const orderInfo = {
        name: userName,
        email,
        paymentMethod,
        grandTotal,
        country,
        state,
        orderNotes,
        payment_status: "Paid",
        session_id:session_id,
        oderId: crypto.randomUUID().replace(/-/g, '').slice(0, 10)
      };

      // Send order data to backend
      fetch("http://localhost:8000/api/v1/products/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderInfo),
      })
        .then((res) => res.json())
        .then((data) => console.log("Order Response:", data))
        
    }
  }, [session_id]);

  if (!userName) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Spinner />
      </div>
    );
  }

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
            <Link href="/dashboard">See Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
